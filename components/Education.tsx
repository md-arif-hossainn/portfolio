import { awards, education } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section
      id="education"
      className="section-spacing"
      aria-labelledby="education-title"
    >
      <div className="section-shell">
        <SectionHeading
          index="05"
          eyebrow="Education & Awards"
          title="Foundations"
          id="education-title"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <div aria-hidden className="hidden lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:gap-16">
            <div>
              <h3 className="meta">Education</h3>
              <ul className="mt-5">
                {education.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={i * 0.06}>
                    <div className="border-t border-line py-6">
                      <h4 className="font-display text-lg font-medium leading-snug tracking-[-0.02em] text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-ink-muted">{item.org}</p>
                      <p className="mt-3 flex flex-wrap items-center gap-x-3 font-mono text-xs text-ink-subtle">
                        <span>{item.period}</span>
                        <span aria-hidden className="text-line-strong">
                          /
                        </span>
                        <span className="text-accent">{item.detail}</span>
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="meta">Awards &amp; Certifications</h3>
              <ul className="mt-5">
                {awards.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={i * 0.06}>
                    <div className="border-t border-line py-6">
                      <h4 className="font-display text-lg font-medium leading-snug tracking-[-0.02em] text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-ink-muted">{item.org}</p>
                      <p className="mt-3 text-sm leading-[1.65] text-ink-subtle">
                        {item.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
