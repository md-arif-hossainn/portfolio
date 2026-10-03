import { ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const socials = [
  { label: 'GitHub', href: siteConfig.github, external: true },
  { label: 'LinkedIn', href: siteConfig.linkedin, external: true },
  { label: 'Email', href: `mailto:${siteConfig.email}`, external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
            {siteConfig.name}
          </p>
          <p className="meta mt-3">
            © {new Date().getFullYear()}
            <span aria-hidden className="mx-2 text-line-strong">
              /
            </span>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:items-end">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2" aria-label="Social links">
            {socials.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="link-wipe font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#hero"
            className="link-wipe font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-subtle transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp size={13} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
