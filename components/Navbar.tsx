'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for whichever section currently owns the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open. Writing the property when
  // it is already correct would invalidate an in-flight smooth scroll, so only
  // touch it on a real change.
  useEffect(() => {
    const next = open ? 'hidden' : '';
    if (document.body.style.overflow !== next) {
      document.body.style.overflow = next;
    }
    return () => {
      if (document.body.style.overflow !== '') {
        document.body.style.overflow = '';
      }
    };
  }, [open]);

  // A native hash jump starts a smooth scroll, and the effect above then unlocks
  // the body mid-animation — which cancels it, so the tap appears to do nothing.
  // Unlock first, then scroll. Default `behavior` follows the CSS, so the
  // reduced-motion override still applies.
  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    document.body.style.overflow = '';
    setOpen(false);
    target.scrollIntoView();
    history.replaceState(null, '', href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-shell flex h-16 items-center justify-between sm:h-20"
      >
        <a
          href="#hero"
          className="font-display text-[0.95rem] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-accent"
        >
          Md Arif Hossain
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-subtle hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href={siteConfig.cvPath}
            download
            className="hidden rounded-full bg-accent-solid px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-fg transition-opacity duration-300 hover:opacity-85 md:inline-flex"
          >
            CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="icon-btn h-10 w-10 md:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <ul className="section-shell flex flex-col py-2">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleMobileNavClick(event, link.href)}
                    className="flex items-baseline gap-4 border-b border-line py-4 text-ink transition-colors hover:text-accent"
                  >
                    <span className="meta">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-xl font-medium tracking-[-0.02em]">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
              <li className="py-5">
                <a
                  href={siteConfig.cvPath}
                  download
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
