# DENOISE Website

A single-page marketing site for DENOISE, built with **Vite + React + Tailwind CSS v4**, with scroll-triggered animations via Framer Motion.

## Prerequisites

This project uses [pnpm](https://pnpm.io). The version is pinned in `package.json`
(`packageManager`), so the easiest way to get the right one is via Corepack:

```bash
corepack enable
```

## Run locally

```bash
pnpm install
pnpm dev
```

The dev server prints a local URL (default `http://localhost:5173`).

## Build for production

```bash
pnpm build      # outputs to dist/
pnpm preview    # serve the production build locally
```

## Deploying to Vercel

Vercel auto-detects the framework (Vite) and the package manager from the
committed `pnpm-lock.yaml`. No `vercel.json` is required. Defaults:

- **Install command:** `pnpm install` (uses `--frozen-lockfile` in CI)
- **Build command:** `pnpm build`
- **Output directory:** `dist`

> **Keep the lockfile in sync.** Because CI installs are frozen, a
> `pnpm-lock.yaml` that doesn't match `package.json` will fail the build. After
> changing dependencies, run `pnpm install` locally and commit the updated
> `pnpm-lock.yaml`. There is intentionally **no** `package-lock.json` — pnpm is
> the only supported package manager so Vercel's detection stays unambiguous.

## Project structure

```
src/
  main.jsx                  App entry
  App.jsx                   Page composition + form state
  index.css                 Tailwind import + @theme color/shadow tokens
  data.js                   Section content (copy, lists, pricing, icons)
  lib/
    animations.js           Shared Framer Motion variants
    text.js                 Form-prefill helper + self-tests
  components/
    Header.jsx, Footer.jsx
    ui/                     Reusable primitives (SectionLabel, GoldNote,
                            UnifiedCard, ImagePanel, CTAButton)
    sections/              One component per page section (Hero, Problem,
                            WhatWeDo, HowWeWork, Systems, Pricing,
                            WhyDenoise, Proof, Insights, Consultation)
```

## Notes for developers

- **Colors and shadows** are defined once in `src/index.css` under `@theme`
  (e.g. `--color-brand`, `--color-ink`, `--shadow-brand-cta`). Use the generated
  utilities (`bg-brand`, `text-ink`, `shadow-brand-cta`) rather than raw hex
  values. Gradients reference the tokens via `var(--color-*)`.
- **Scroll animations** use a shared `replayViewport` config in
  `lib/animations.js` (`once: false`), so reveals replay each time a section
  scrolls back into view.
- **Editable content** lives in `src/data.js` — update copy and lists there.
- **Images and logo** are loaded from Cloudinary URLs inside the section
  components.
- **The consultation form** simulates submission (loading spinner + disabled
  state) but does not yet send data anywhere. Connect it to an email, CRM,
  backend, or form service in the `handleSubmit` function in `src/App.jsx`
  before launch.
