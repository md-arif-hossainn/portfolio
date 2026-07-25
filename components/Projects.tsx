import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * Bento grid. `featured` is wide from the `sm` breakpoint up; `wide` widens
 * only at `lg`. Those flags are positioned in lib/data.ts so both the 2-column
 * and 3-column layouts fill completely with no orphaned cell.
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing relative border-y border-line bg-surface-2/40"
      aria-labelledby="projects-title"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Production apps and personal builds — the ones that taught me the most, most impressive first."
          id="projects-title"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.name}
              delay={(i % 3) * 0.06}
              className={
                project.featured
                  ? 'sm:col-span-2'
                  : project.wide
                    ? 'lg:col-span-2'
                    : undefined
              }
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { featured, wide } = project;

  // Wide cards lay the image beside the copy; standard cards stack them.
  const shell = featured ? 'sm:flex-row' : wide ? 'lg:flex-row' : '';
  const media = featured
    ? 'aspect-[16/10] sm:aspect-auto sm:w-1/2'
    : wide
      ? 'aspect-[16/10] lg:aspect-auto lg:w-1/2'
      : 'aspect-[16/10]';
  const sizes =
    featured || wide
      ? '(max-width: 640px) 100vw, 45vw'
      : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <article
      className={`card card-interactive group flex h-full flex-col overflow-hidden ${shell}`}
    >
      <div className={`relative overflow-hidden bg-surface-2 ${media}`}>
        <Image
          src={project.image}
          alt={`${project.name} — ${project.subtitle}`}
          fill
          priority={featured}
          loading={featured ? undefined : 'lazy'}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {project.badge ? (
          <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-md">
            {project.badge}
          </span>
        ) : null}
      </div>

      <div
        className={`flex flex-1 flex-col p-5 ${
          featured
            ? 'justify-center sm:p-8'
            : wide
              ? 'lg:justify-center lg:p-8'
              : ''
        }`}
      >
        {featured ? <p className="eyebrow !text-[0.65rem]">Featured</p> : null}

        <h3
          className={`font-display font-bold tracking-tight text-ink ${
            featured ? 'mt-3 text-2xl' : 'text-lg'
          }`}
        >
          {project.name}
        </h3>

        <p className="mt-0.5 text-sm font-medium text-accent">
          {project.subtitle}
        </p>
        <p
          className={`mt-3 leading-relaxed text-ink-muted ${
            featured ? 'text-[0.95rem]' : 'flex-1 text-sm'
          }`}
        >
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-md bg-surface-2 px-2 py-1 text-[0.7rem] font-medium text-ink-subtle ring-1 ring-inset ring-line"
            >
              {item}
            </li>
          ))}
        </ul>

        {project.links?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on ${link.label} (opens in a new tab)`}
                  className="inline-flex items-center gap-1 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[0.72rem] font-semibold text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
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
