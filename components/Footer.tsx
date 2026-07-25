import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const socials = [
  { label: 'GitHub', href: siteConfig.github, Icon: Github, external: true },
  { label: 'LinkedIn', href: siteConfig.linkedin, Icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${siteConfig.email}`, Icon: Mail, external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-ink-subtle">
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

        <ul className="flex items-center gap-2" aria-label="Social links">
          {socials.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="icon-btn h-10 w-10"
              >
                <Icon size={18} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
