'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { siteConfig, stats } from '@/lib/data';

const socials = [
  { label: 'GitHub', href: siteConfig.github, Icon: Github },
  { label: 'LinkedIn', href: siteConfig.linkedin, Icon: Linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}`, Icon: Mail },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.07 },
    },
  };

  const item = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section
      id="hero"
      className="noise relative overflow-hidden pt-28 sm:pt-32 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Decorative gradient mesh. Three offset blobs read as one soft wash. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--color-accent)/0.16),transparent)] blur-2xl motion-safe:animate-drift" />
        <div className="absolute -top-24 right-[8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.14),transparent)] blur-2xl" />
        <div className="absolute top-32 left-[4%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgb(20_184_166/0.12),transparent)] blur-2xl" />
      </div>

      <div className="section-shell relative pb-20 sm:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16"
        >
          <div>
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-ink-muted shadow-card backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </motion.p>

            <motion.h1
              variants={item}
              id="hero-heading"
              className="mt-6 font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.25rem]"
            >
              <span className="text-gradient">Md Arif</span>
              <br />
              <span className="text-gradient">Hossain</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 font-display text-lg font-medium tracking-tight text-accent sm:text-xl"
            >
              {siteConfig.title}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-subtle"
            >
              <MapPin size={15} aria-hidden />
              {siteConfig.location}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href={siteConfig.cvPath} download className="btn-primary">
                <Download size={17} aria-hidden />
                Download CV
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
                <ArrowDown size={17} aria-hidden />
              </a>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-8 flex items-center gap-2"
              aria-label="Social links"
            >
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={label}
                    title={label}
                    className="icon-btn h-11 w-11"
                  >
                    <Icon size={19} aria-hidden />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={item} className="order-first lg:order-last">
            <div className="relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-[20rem]">
              {/* Rotating conic ring behind the portrait. */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-full bg-[conic-gradient(from_180deg,rgb(var(--color-accent)/0.35),transparent_35%,rgb(139_92_246/0.3),transparent_70%,rgb(var(--color-accent)/0.35))] blur-2xl motion-safe:animate-drift"
              />
              <div className="relative aspect-square overflow-hidden rounded-full border border-line bg-surface p-2 shadow-card-hover">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Md Arif Hossain"
                    fill
                    priority
                    sizes="(max-width: 1024px) 16rem, 20rem"
                    /* Bias the square crop upward so the face stays centred. */
                    className="object-cover object-[50%_30%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.dl
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card card-interactive p-5 sm:p-6"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-xs text-ink-subtle sm:text-sm">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
