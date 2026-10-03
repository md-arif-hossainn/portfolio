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
        line: {
          DEFAULT: withVar('line'),
          strong: withVar('line-strong'),
        },
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
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      maxWidth: {
        content: '78rem',
        /* A comfortable measure for running text — roughly 70 characters. */
        'prose-wide': '38rem',
      },
      /* No elevation scale: hairlines carry the structure, not shadows. */
    },
  },
  plugins: [],
};

export default config;
