import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * An indexed catalogue rather than a bento grid: every project gets the same
 * ruled 12-column row, so the work is compared on its content instead of on
 * how big a tile it was given. `featured` only enlarges the first entry.
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
      aria-labelledby="projects-title"
    >
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          description="Production apps and personal builds — the ones that taught me the most, most impressive first."
          id="projects-title"
        />

        <ul className="mt-16">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.name} delay={Math.min(i, 3) * 0.05}>
              <ProjectRow project={project} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { featured } = project;

  return (
    <article className="group grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
      <div className="flex items-center gap-4 lg:col-span-2 lg:block">
        <p className="meta">{String(index).padStart(2, '0')}</p>
        {project.badge ? (
          <p className="meta mt-0 text-accent lg:mt-3">{project.badge}</p>
        ) : null}
      </div>

      <div className="lg:col-span-5 lg:order-last">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.subtitle}`}
            fill
            priority={featured}
            loading={featured ? undefined : 'lazy'}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="media-mute object-cover group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="lg:col-span-5">
        <h3
          className={`font-display font-medium leading-tight tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-accent ${
            featured ? 'text-3xl sm:text-[2.5rem]' : 'text-2xl sm:text-3xl'
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-2 text-ink-subtle">{project.subtitle}</p>

        <p className="mt-5 max-w-prose-wide leading-[1.65] text-ink-muted">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap items-baseline">
          {project.tech.map((item) => (
            <li
              key={item}
              className="font-mono text-xs text-ink-subtle after:mx-2.5 after:text-line-strong after:content-['/'] last:after:content-none"
            >
              {item}
            </li>
          ))}
        </ul>

        {project.links?.length ? (
          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            {project.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on ${link.label} (opens in a new tab)`}
                  className="link-wipe font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight size={13} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
