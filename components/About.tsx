import { Briefcase, GraduationCap, Smartphone } from 'lucide-react';
import { aboutParagraphs } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const highlights = [
  {
    Icon: Briefcase,
    title: 'Software Engineer II',
    detail: 'Nagorik Technologies Ltd',
  },
  {
    Icon: Smartphone,
    title: '10+ production apps',
    detail: '700K+ combined downloads',
  },
  {
    Icon: GraduationCap,
    title: 'BSc in CSE',
    detail: 'Daffodil International University',
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing" aria-labelledby="about-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Building mobile products that hold up at scale"
          id="about-title"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="space-y-4">
            {highlights.map(({ Icon, title, detail }, i) => (
              <Reveal as="li" key={title} delay={0.1 + i * 0.06}>
                <div className="card card-interactive flex items-start gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={19} aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-0.5 text-sm text-ink-subtle">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
