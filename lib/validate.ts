export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  /** Honeypot — must stay empty. Real users never see this field. */
  company?: string;
};

export type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the client form and the API route so both agree on what's valid. */
export function validateContact(input: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {};

  const name = input.name?.trim() ?? '';
  const email = input.email?.trim() ?? '';
  const message = input.message?.trim() ?? '';

  if (name.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  } else if (name.length > 100) {
    errors.name = 'That name is a little too long.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'That email address does not look right.';
  } else if (email.length > 200) {
    errors.email = 'That email address is too long.';
  }

  if (message.length < 10) {
    errors.message = 'Please write at least 10 characters.';
  } else if (message.length > 5000) {
    errors.message = 'Please keep your message under 5000 characters.';
  }

  return errors;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
