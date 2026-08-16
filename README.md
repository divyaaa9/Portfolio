# Divya Sree — Developer Portfolio

A premium, editorial-minimal developer portfolio built with Next.js 15 (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

This project was built in a sandbox without network access, so dependencies
were **not** installed and the build was **not** run. Before treating this as
final, do the following:

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Fix anything that surfaces during install or
`npm run typecheck` / `npm run lint` — the code was written carefully and
syntax-checked, but it has not been compiled end-to-end.

## Project structure

```
app/                   Root layout, home page, globals.css, SEO routes
components/
  ui/                  Design-system primitives (Button, Card)
  sections/            One file per page section (Hero, About, Projects, ...)
  navbar.tsx           Sticky nav with scroll-spy active indicator
  footer.tsx
  background-fx.tsx    Grid + noise + spotlight ambient background
  section-heading.tsx  Shared eyebrow/title/description heading
hooks/
  use-active-section.ts  IntersectionObserver-based scroll-spy
lib/
  site-config.ts       Name, role, contact details, nav links, socials
  data.ts              Education, skills, projects, achievements, certs, gallery
  utils.ts             `cn()` classname helper
public/
  images/              Placeholder imagery (see below)
  resume.pdf           Placeholder resume
scripts/               One-off scripts used to generate the placeholders
```

## Replacing placeholder content

Everything content-related lives in **`lib/site-config.ts`** and
**`lib/data.ts`** — edit those two files rather than hunting through
components.

### Images to replace

All placeholders were generated locally (no stock photos used) and are
intentionally rough — swap them for real assets at the same paths:

- `public/images/profile/hero.jpg` — your portrait (recommended ~1000×1250, portrait orientation)
- `public/images/gallery/01.jpg` … `15.jpg` — gallery reel (recommended ~1200×800)
- `public/images/projects/*.png` — one screenshot per project, filenames match `lib/data.ts`
- `public/images/education/*.png` — small square logos/badges, filenames match `lib/data.ts`
- `public/resume.pdf` — your actual resume
- `app/favicon.ico` — your favicon

Add or remove gallery images by adding/removing files and updating the count
in `galleryImages` (`lib/data.ts`) — the marquee is generated from that list,
not hardcoded per file.

## Design system

Design tokens (colors, type scale, spacing, radii, easing) are defined once in
`tailwind.config.ts` under `theme.extend`, sourced from the brief's
monochrome palette:

| Token | Hex |
|---|---|
| Background | `#0B0D10` |
| Alt section | `#101317` |
| Card | `#171B20` |
| Border | `#2A2F36` |
| Text primary | `#F5F5F2` |
| Text secondary | `#B4B8BF` |
| Text muted | `#80858F` |
| Hover surface | `#1D2229` |

Typography: **Space Grotesk** (display/headings), **Inter** (body), **JetBrains
Mono** (numerals/technical accents) — loaded via `next/font/google` in
`app/layout.tsx`.

## Notable implementation details

- **Projects carousel** is a `framer-motion` drag surface, not `overflow-x` +
  native scroll, so it feels intentional rather than like an unstyled
  scrollbar. Click vs. drag is disambiguated by pointer-move distance so
  dragging never triggers a false navigation.
- **Gallery marquee** is a CSS keyframe animation (duplicated track,
  `translateX(-50%)`) — no JS scroll loop, no controls, not pausable on
  hover, matching the brief exactly. It slows down (rather than stopping) for
  users with `prefers-reduced-motion`, since the reel is core content here,
  not decoration.
- **Active nav indicator** uses `IntersectionObserver` (`useActiveSection`)
  and a `layoutId`-animated underline, rather than scroll-offset math.
- All interactive elements have visible focus states and there are no nested
  interactive elements (e.g. the project card's GitHub link stops
  propagation rather than nesting a `<button>` inside an `<a>`).
