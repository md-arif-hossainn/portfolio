import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const channels = [
  {
    Icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'md-arif-hossainn',
    href: siteConfig.github,
    external: true,
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'md-arif-hossainn',
    href: siteConfig.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing border-t border-line bg-surface-2/40"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Hiring, collaborating, or just want to talk Flutter architecture? Drop me a line — I read everything."
          id="contact-title"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <div>
            <ul className="space-y-3">
              {channels.map(({ Icon, label, value, href, external }, i) => (
                <Reveal as="li" key={label} delay={i * 0.05}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="card card-interactive group flex items-center gap-4 p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={19} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-ink-subtle">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-ink group-hover:text-accent">
                        {value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <p className="mt-6 text-sm leading-relaxed text-ink-subtle">
                Based in {siteConfig.location}. Available for full-time roles and
                selected freelance work.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
