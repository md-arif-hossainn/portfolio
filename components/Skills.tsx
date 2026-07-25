import { skillGroups } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-spacing border-y border-line bg-surface-2/40"
      aria-labelledby="skills-title"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit"
          description="The languages, patterns and platforms I reach for when shipping production mobile software."
          id="skills-title"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <div className="card card-interactive group h-full p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="pill group-hover:border-accent/25 group-hover:text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
