# DENOISE Website

This is a Vite + React + Tailwind CSS codebase for the DENOISE landing page.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Notes for developer

- Main page: `src/App.jsx`
- Styles: Tailwind utility classes plus `src/index.css`
- External libraries: React, Vite, Tailwind, Framer Motion, Lucide React
- Current images and logo are loaded from Cloudinary URLs inside `src/App.jsx`.
- The consultation form currently captures state visually only. Connect it to email, CRM, backend, or form service before launch.
