import type { Config } from 'tailwindcss';

/**
 * Every color is an `R G B` triple exposed as a CSS variable in globals.css, so
 * light and dark themes swap by toggling one class on <html> — no duplicated
 * `dark:` color utilities scattered through the components.
 */
const withVar = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: withVar('canvas'),
        surface: withVar('surface'),
        'surface-2': withVar('surface-2'),
        line: withVar('line'),
        ink: {
          DEFAULT: withVar('ink'),
          muted: withVar('ink-muted'),
          subtle: withVar('ink-subtle'),
        },
        accent: {
          DEFAULT: withVar('accent'),
          hover: withVar('accent-hover'),
          solid: withVar('accent-solid'),
          fg: withVar('accent-fg'),
          soft: withVar('accent-soft'),
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: [
          'var(--font-display)',
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgb(var(--shadow) / 0.04), 0 1px 3px rgb(var(--shadow) / 0.06)',
        'card-hover':
          '0 12px 32px rgb(var(--shadow) / 0.10), 0 4px 10px rgb(var(--shadow) / 0.05)',
        nav: '0 1px 0 rgb(var(--color-line) / 1), 0 4px 24px rgb(var(--shadow) / 0.05)',
        glow: '0 0 0 1px rgb(var(--color-accent) / 0.25), 0 8px 32px rgb(var(--color-accent) / 0.18)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-3%,0) scale(1.06)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        drift: 'drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
