import { aboutParagraphs } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const highlights = [
  { label: 'Role', title: 'Software Engineer II', detail: 'Nagorik Technologies Ltd' },
  { label: 'Shipped', title: '10+ production apps', detail: '700K+ combined downloads' },
  { label: 'Education', title: 'BSc in CSE', detail: 'Daffodil International University' },
];

export default function About() {
  return (
    <section id="about" className="section-spacing" aria-labelledby="about-title">
      <div className="section-shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Building mobile products that hold up at scale"
          id="about-title"
        />

        {/* Body copy lines up under the heading column, leaving the left rail
            empty — the alignment is what makes the grid read as deliberate. */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <div aria-hidden className="hidden lg:block" />

          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div className="space-y-6">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p
                    className={
                      i === 0
                        ? 'text-xl leading-[1.55] text-ink sm:text-2xl sm:leading-[1.5]'
                        : 'leading-[1.7] text-ink-muted'
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <ul>
              {highlights.map(({ label, title, detail }, i) => (
                <Reveal as="li" key={title} delay={0.1 + i * 0.06}>
                  <div className="border-t border-line py-5">
                    <p className="meta">{label}</p>
                    <p className="mt-2 font-display text-lg font-medium tracking-[-0.02em] text-ink">
                      {title}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">{detail}</p>
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
