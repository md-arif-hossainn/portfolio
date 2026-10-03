import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const channels = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  {
    label: 'GitHub',
    value: 'md-arif-hossainn',
    href: siteConfig.github,
    external: true,
  },
  {
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
      className="section-spacing"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something together"
          description="Hiring, collaborating, or just want to talk Flutter architecture? Drop me a line — I read everything."
          id="contact-title"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <div aria-hidden className="hidden lg:block" />

          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              {/* Contact channels as ruled rows — label in the rail, the
                  address itself set at reading size. */}
              <ul>
                {channels.map(({ label, value, href, external }, i) => (
                  <Reveal as="li" key={label} delay={i * 0.05}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 border-t border-line py-5"
                    >
                      <span className="meta">{label}</span>
                      <span className="truncate text-ink transition-colors group-hover:text-accent">
                        {value}
                      </span>
                      <ArrowUpRight
                        size={15}
                        aria-hidden
                        className="translate-y-0.5 text-line-strong transition-all duration-300 group-hover:-translate-y-0 group-hover:text-accent"
                      />
                    </a>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.2}>
                <p className="mt-8 max-w-prose-wide text-sm leading-[1.7] text-ink-subtle">
                  Based in {siteConfig.location}. Available for full-time roles
                  and selected freelance work.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
