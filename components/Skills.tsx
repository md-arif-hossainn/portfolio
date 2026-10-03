import { skillGroups } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-spacing" aria-labelledby="skills-title">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The toolkit"
          description="The languages, patterns and platforms I reach for when shipping production mobile software."
          id="skills-title"
        />

        {/* Each group is a ruled row rather than a card: label in the rail,
            skills set as running text so the list reads instead of rattles. */}
        <ul className="mt-16">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.title} delay={Math.min(i, 4) * 0.05}>
              <div className="grid gap-3 border-t border-line py-7 lg:grid-cols-[12rem_1fr] lg:gap-12">
                <h3 className="meta pt-1.5">{group.title}</h3>

                <ul className="flex flex-wrap items-baseline">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-base text-ink-muted after:mx-3 after:text-line-strong after:content-['/'] last:after:content-none sm:text-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
