import { MapPin } from 'lucide-react';
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
          eyebrow="Experience"
          title="Where I've worked"
          description="Four years across vehicle tracking, fintech integrations and enterprise Android."
          id="experience-title"
        />

        <ol className="relative mt-14 space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.08}>
              <span
                aria-hidden
                className={`absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-canvas ${
                  job.current ? 'bg-accent shadow-glow' : 'bg-line'
                }`}
              />

              <div className="card card-interactive p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-medium text-accent">{job.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-medium text-ink-muted">
                      {job.period}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink-subtle">
                      <MapPin size={13} aria-hidden />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent/60"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
