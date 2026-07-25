import { Award, GraduationCap } from 'lucide-react';
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
          eyebrow="Education & Awards"
          title="Foundations"
          id="education-title"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.06}>
                  <div className="card card-interactive flex items-start gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <GraduationCap size={20} aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-display font-bold tracking-tight text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-ink-muted">{item.org}</p>
                      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-subtle">
                        <span>{item.period}</span>
                        <span aria-hidden className="text-line">
                          •
                        </span>
                        <span className="font-medium text-accent">
                          {item.detail}
                        </span>
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              Awards & Certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {awards.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.06}>
                  <div className="card card-interactive flex items-start gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Award size={20} aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-display font-bold tracking-tight text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-ink-muted">{item.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
