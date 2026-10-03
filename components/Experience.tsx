import { experience } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing"
      aria-labelledby="experience-title"
    >
      <div className="section-shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've worked"
          description="Four years across vehicle tracking, fintech integrations and enterprise Android."
          id="experience-title"
        />

        {/* A ruled ledger: dates in the rail, the role set large beside them. */}
        <ol className="mt-16">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.06}>
              <div className="grid gap-5 border-t border-line py-10 lg:grid-cols-[12rem_1fr] lg:gap-12 lg:py-14">
                <div className="lg:pt-2">
                  <p className="meta">{job.period}</p>
                  {job.current ? (
                    <p className="mt-3 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                      />
                      Current
                    </p>
                  ) : null}
                </div>

                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.025em] text-ink sm:text-[2rem]">
                    {job.role}
                  </h3>
                  <p className="mt-2 text-ink-muted">
                    {job.company}
                    <span aria-hidden className="mx-2.5 text-line-strong">
                      /
                    </span>
                    <span className="text-ink-subtle">{job.location}</span>
                  </p>

                  <ul className="mt-7 max-w-3xl space-y-3.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="grid grid-cols-[1.75rem_1fr] text-[0.95rem] leading-[1.65] text-ink-muted"
                      >
                        <span aria-hidden className="text-line-strong">
                          —
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
