'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { siteConfig, stats } from '@/lib/data';

const socials = [
  { label: 'GitHub', href: siteConfig.github },
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 },
    },
  };

  const item = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-44"
      aria-labelledby="hero-heading"
    >
      <div className="section-shell relative pb-16 sm:pb-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="meta flex flex-wrap items-center gap-x-2.5 gap-y-1 text-ink-muted"
          >
            <span className="flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Open to new opportunities
            </span>
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="text-line-strong">
                /
              </span>
              {siteConfig.location}
            </span>
          </motion.p>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              {/* The name is the single largest element on the page — it scales
                  with the viewport rather than stepping at breakpoints. */}
              <motion.h1
                variants={item}
                id="hero-heading"
                className="font-display text-[clamp(3.25rem,11vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.045em] text-ink"
              >
                Md Arif
                <br />
                Hossain
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-8 max-w-prose-wide text-lg leading-[1.6] text-ink-muted sm:text-xl"
              >
                {siteConfig.tagline}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-7 font-display text-xl font-medium tracking-[-0.02em] text-ink lg:hidden"
              >
                {siteConfig.title}
              </motion.p>
            </div>

            {/* Portrait is a tall rectangle rather than a circle, and sits
                desaturated until hovered. */}
            <motion.div
              variants={item}
              className="group mt-10 w-40 shrink-0 sm:w-48 lg:mt-0 lg:w-[17rem]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Md Arif Hossain"
                  fill
                  priority
                  sizes="(max-width: 640px) 10rem, (max-width: 1024px) 12rem, 17rem"
                  className="media-mute object-cover object-[50%_25%] group-hover:scale-[1.03]"
                />
              </div>
              <p className="meta mt-3 hidden lg:block">{siteConfig.title}</p>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4"
          >
            <a href={siteConfig.cvPath} download className="btn-primary">
              <Download size={16} aria-hidden />
              Download CV
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
              <ArrowDown size={16} aria-hidden />
            </a>

            <ul
              className="ml-auto flex flex-wrap items-center gap-x-6 gap-y-2"
              aria-label="Social links"
            >
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="link-wipe font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
                  >
                    {label}
                    <ArrowUpRight size={13} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Stats sit on a hairline grid — no boxes, the numbers carry it. */}
        <motion.dl
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-3 border-t border-line sm:mt-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`pt-5 sm:pt-7 ${
                i > 0 ? 'border-l border-line pl-4 sm:pl-8' : ''
              }`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                <span className="meta mt-3 block">{stat.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
