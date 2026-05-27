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
pnpm dev          # frontend only (Vite, http://localhost:5173)
pnpm dev:full     # frontend + API function (Vercel, http://localhost:3000)
```

Use **`pnpm dev`** for UI work — fast Vite HMR, but `/api/consultation` 404s.
Use **`pnpm dev:full`** when you need the form to actually submit to the Notion
API end-to-end. That command runs the real Vercel runtime locally on port 3000,
serving both the frontend and the serverless function from the same origin (so
the relative `fetch("/api/consultation")` call just works).

Requires the Notion env vars set in `.env` (or `.env.local`) — see
[docs/notion-form-setup.md](docs/notion-form-setup.md).

## Build for production

```bash
pnpm build      # outputs to dist/
pnpm preview    # serve the production build locally (frontend only)
```

## Deploying to Vercel

Vercel auto-detects the framework (Vite) and the package manager from the
committed `pnpm-lock.yaml`. The repo includes a minimal `vercel.json` so
`vercel dev` and CI use the same install/build commands:

- **Install command:** `pnpm install` (uses `--frozen-lockfile` in CI)
- **Build command:** `pnpm build`
- **Output directory:** `dist`

The consultation form requires two **environment variables** to be set in the
Vercel project settings (Production, Preview, **and** Development scopes):

- `NOTION_TOKEN` — Notion integration secret
- `NOTION_DATABASE_ID` — target CRM database id

Without these the API returns "Server is not configured". Setup details and
the required Notion DB schema are in
[docs/notion-form-setup.md](docs/notion-form-setup.md).

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
    validation.js           Client-side form validation (mirrors api/)
    styles.js               Shared Tailwind class strings
  components/
    Header.jsx, Footer.jsx
    ui/                     Reusable primitives (SectionLabel, SectionHeading,
                            GoldNote, UnifiedCard, ImagePanel, CTAButton,
                            FormField, Spinner)
    sections/               One component per page section (Hero, Problem,
                            WhatWeDo, HowWeWork, Systems, Pricing,
                            WhyDenoise, Proof, Insights, Consultation)

api/
  consultation.ts           Vercel serverless function: receives the form
                            submission and writes it to Notion.

shared/
  form-constants.js         Options + validation rules shared between the
                            React form and the API function.

public/
  favicon.*, site.webmanifest, apple-touch-icon.png
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
- **The consultation form** is wired to a Vercel serverless function
  (`api/consultation.ts`) that writes submissions to a Notion CRM database.
  See [docs/notion-form-setup.md](docs/notion-form-setup.md) for the database
  schema, integration setup, and the required environment variables. To test
  the form end-to-end locally, use `pnpm dev:full` (runs the function on
  `localhost:3000` against your `.env`).
