'use client';

import { Moon, Sun } from 'lucide-react';

/**
 * Which icon shows is driven purely by the `dark` class on <html>, not React
 * state — so the server and client markup always match and there's nothing to
 * hydrate incorrectly.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.toggle('dark', next === 'dark');
    root.style.colorScheme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Private mode or storage disabled — the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={`icon-btn h-10 w-10 ${className}`}
    >
      <Sun size={17} aria-hidden className="dark:hidden" />
      <Moon size={17} aria-hidden className="hidden dark:block" />
    </button>
  );
}
