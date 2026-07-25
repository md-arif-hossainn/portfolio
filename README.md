# Md Arif Hossain — Portfolio

A single-page personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. Light, minimal, fully responsive, and ready to deploy to Vercel with no extra configuration.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see "Contact form" below)
npm run dev
```

Open <http://localhost:3000>.

| Script          | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Dev server with hot reload         |
| `npm run build` | Production build                   |
| `npm start`     | Serve the production build locally |
| `npm run lint`  | ESLint (next/core-web-vitals)      |

---

## Where to put your files

Both of these are **already in place** — replace them any time you have a newer version.

| File                              | Path                              | Notes                                                                                    |
| --------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| Profile photo                     | `public/profile.jpg`              | Square-ish or portrait JPG, at least 800×800. Currently 1200×1500, cropped to a circle.    |
| CV / résumé                       | `public/Md_Arif_Hossain_CV.pdf`   | Linked from the "Download CV" buttons in the hero and navbar. **Keep the exact filename.** |
| Project screenshots (placeholders) | `public/projects/*.svg`           | See below.                                                                                 |

### Replacing the project images

`public/projects/` currently holds eight generated gradient placeholders. To swap in real screenshots:

1. Drop your image into `public/projects/` (e.g. `gp-vts.png`).
2. Update the matching `image` field in [`lib/data.ts`](lib/data.ts) — e.g. `image: '/projects/gp-vts.png'`.

Cards render at a 16:10 aspect ratio, so **1600×1000** is the sweet spot.

---

## Contact form

The form posts to `app/api/contact/route.ts`, which delivers mail through [Resend](https://resend.com). It handles validation on both the client and the server, shows success/error states, includes a honeypot field for bots, and applies a light per-instance rate limit.

**Setup (about two minutes):**

1. Create a free account at [resend.com](https://resend.com) and generate an API key.
2. Add it to `.env.local`:

   ```bash
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=arif.dev24@gmail.com
   CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
   ```

3. Add the same three variables in Vercel under **Project → Settings → Environment Variables**, then redeploy.

> **About the `from` address:** Resend's shared `onboarding@resend.dev` sender works immediately but can only deliver to the address you signed up with. Once you verify your own domain in Resend, change `CONTACT_FROM_EMAIL` to something like `Portfolio <hello@yourdomain.com>` and it will deliver anywhere.

If `RESEND_API_KEY` is missing, the form fails gracefully and tells visitors to email you directly — nothing crashes.

---

## Deploying to Vercel

**Via the dashboard:**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave every build setting at its default — Vercel detects Next.js automatically.
4. Add the environment variables from `.env.example`.
5. Deploy.

**Via the CLI:**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

**After your first deploy,** update `siteConfig.url` in [`lib/data.ts`](lib/data.ts) to your real domain. That single value feeds the canonical URL, Open Graph tags, `sitemap.xml` and `robots.txt`.

---

## Editing content

Almost all copy lives in one file: **[`lib/data.ts`](lib/data.ts)**. Skills, jobs, projects, education, awards and contact details are plain arrays — edit them and the UI updates. You should rarely need to touch a component to change text.

## Project structure

```
app/
  layout.tsx            Fonts, SEO metadata, JSON-LD structured data
  page.tsx              Composes every section
  globals.css           Tailwind layers + design tokens
  icon.svg              Favicon
  apple-icon.tsx        Generated 180×180 touch icon
  opengraph-image.tsx   Generated 1200×630 social preview
  robots.ts / sitemap.ts
  api/contact/route.ts  Contact form handler (Resend)
components/
  Navbar.tsx            Frosted nav, active-section underline, mobile sheet, theme toggle
  ThemeToggle.tsx       Light/dark switch (no hydration mismatch by design)
  Hero.tsx              Photo, headline, CTAs, socials, stats, gradient mesh
  About.tsx  Skills.tsx  Experience.tsx  Projects.tsx  Education.tsx
  Contact.tsx  ContactForm.tsx  Footer.tsx
  Reveal.tsx            Scroll fade-in-up wrapper
  SectionHeading.tsx    Shared eyebrow + title + description
lib/
  data.ts               ← all site content
  validate.ts           Validation shared by client and server
public/
  profile.jpg  Md_Arif_Hossain_CV.pdf  projects/*.svg
```

## Theming & design tokens

The site ships **light and dark themes**. On a visitor's first load it follows their OS preference; the navbar toggle overrides that and the choice is saved to `localStorage`. A tiny inline script in `app/layout.tsx` applies the theme before first paint, so there's no flash of the wrong colors.

Every color is a CSS variable defined once per theme in `app/globals.css` (as `R G B` triples so Tailwind opacity modifiers like `bg-accent/20` still work). `tailwind.config.ts` just points at those variables. **To recolor the site, edit `globals.css` only** — components never hardcode a color.

| Token         | Light     | Dark      | Use                        |
| ------------- | --------- | --------- | -------------------------- |
| `canvas`      | `#FAFAFA` | `#0A0A0C` | Page background            |
| `surface`     | `#FFFFFF` | `#131317` | Cards, raised UI           |
| `surface-2`   | `#F4F4F5` | `#1A1A1F` | Inputs, tags, banded rows  |
| `ink`         | `#111114` | `#F4F4F5` | Headings                   |
| `ink-muted`   | `#52525B` | `#A3A3AD` | Body text                  |
| `ink-subtle`  | `#71717A` | `#8C8C98` | Meta text                  |
| `accent`      | `#2563EB` | `#60A5FA` | Links, icons, active state |
| `accent-solid`| `#2563EB` | `#2563EB` | Filled button backgrounds  |
| `line`        | `#E4E4E7` | `#27272E` | Borders                    |

`accent` and `accent-solid` are separate on purpose: dark mode needs a *lighter* blue for text to stay readable, but a *darker* blue behind white button labels. Every text/background pair in the table clears WCAG AA (4.5:1) in both themes — verified, not assumed.

### Reusable classes

Defined in `globals.css` so restyling stays in one place: `.card`, `.card-interactive` (lift + accent border on hover), `.btn-primary`, `.btn-secondary`, `.icon-btn`, `.pill`, `.glass` (frosted navbar), `.noise` (film grain), `.section-shell`, `.section-spacing`.

### Typography

Headings use **Space Grotesk** (`font-display`), body uses **Inter** (`font-sans`). Both are self-hosted via `next/font` — no external requests, no layout shift.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) with labelled sections
- Skip-to-content link, visible focus rings, keyboard-navigable nav and form
- All text/background pairs clear WCAG AA (4.5:1) in **both** light and dark themes
- All animation is disabled under `prefers-reduced-motion`
- Form errors are announced via `aria-live` and wired with `aria-describedby`
- Every section below the hero is a Server Component, so it ships zero client JS of its own
- Only the hero portrait is `priority`; all project imagery lazy-loads
- Fonts self-hosted via `next/font` (no layout shift, no external request)
