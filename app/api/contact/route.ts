import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { escapeHtml, validateContact } from '@/lib/validate';
import { siteConfig } from '@/lib/data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Best-effort per-instance throttle. Serverless instances are short-lived, so
 * this is a speed bump for casual abuse rather than a real rate limiter.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing unbounded on a long-lived instance.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const honeypot = typeof body.company === 'string' ? body.company.trim() : '';

  // Bots fill every field they find. Accept silently so they don't retry.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact({ name, email, message });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: 'Please check the highlighted fields.', errors },
      { status: 422 }
    );
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages. Please try again in a minute.' },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — cannot deliver contact message.');
    return NextResponse.json(
      {
        ok: false,
        error: `Email is not configured yet. Please reach me directly at ${siteConfig.email}.`,
      },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#1a1a1a">
          <h2 style="margin:0 0 16px;font-size:18px">New portfolio message</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 16px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <div style="padding:16px;background:#fafafa;border:1px solid #e5e5e5;border-radius:8px;white-space:pre-wrap">${escapeHtml(
            message
          )}</div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend rejected the message:', error);
      return NextResponse.json(
        {
          ok: false,
          error: `Could not send your message. Please email me at ${siteConfig.email}.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Unexpected error sending contact message:', err);
    return NextResponse.json(
      {
        ok: false,
        error: `Something went wrong. Please email me at ${siteConfig.email}.`,
      },
      { status: 500 }
    );
  }
}
