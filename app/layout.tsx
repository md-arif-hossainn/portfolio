import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { siteConfig } from '@/lib/data';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Inter Tight carries the display sizes: same skeleton as the body face, but
// it holds together at the very large, tightly tracked headline sizes.
const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-display',
});

// Mono is reserved for micro-typography — section numbers, labels, metadata.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

const description =
  "Software Engineer II with 4+ years building high-performance Flutter and Android apps — including Bangladesh's leading vehicle tracking app, with 500K+ downloads.";

/**
 * Runs before first paint so the correct theme is applied with no flash of the
 * wrong colors. Kept tiny and dependency-free on purpose.
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Md Arif Hossain — Flutter & Android Developer',
    template: '%s | Md Arif Hossain',
  },
  description,
  keywords: [
    'Md Arif Hossain',
    'Flutter Developer',
    'Android Developer',
    'Mobile Engineer',
    'Dart',
    'Kotlin',
    'Riverpod',
    'Bloc',
    'Clean Architecture',
    'Bangladesh',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Md Arif Hossain — Flutter & Android Developer',
    description,
    siteName: 'Md Arif Hossain',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Arif Hossain — Flutter & Android Developer',
    description,
  },
  // Icons and social images come from app/icon.svg, app/apple-icon.tsx and
  // app/opengraph-image.tsx via Next's file conventions.
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#0E0E0D' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: 'Software Engineer II — Flutter & Android Developer',
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phoneHref,
  url: siteConfig.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Daffodil International University',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Nagorik Technologies Ltd',
  },
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // The theme script mutates <html> before React hydrates.
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent-solid focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-fg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
