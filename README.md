# Plato University

> Learn to think before you learn to work.

A one-year academy for the AI era. Philosophy first, portfolio last, city-rooted, community-owned.

This repo hosts the public landing page + the living research & vision documents.

## Stack

- **Zero build.** Static `index.html` served directly.
- **Tailwind CSS v4** via browser CDN.
- **DaisyUI v5** via CDN.
- **Bun** as dev server + TypeScript runtime.
- **Vercel** for hosting.
- **Formspree** for the contact form.

## Local dev

```bash
bun install   # nothing to install yet, but safe to run
bun run dev
```

Open <http://localhost:3000>. Edit `index.html` — hot reload is on.

## Deploy

This is a static site. Vercel auto-detects and serves `index.html` from the repo root. No build step.

```bash
vercel        # first time
vercel --prod # ship
```

Custom domain: `platouniversity.org`.

## Configuring the form

The inquiry form posts to [Formspree](https://formspree.io).

1. Create a free Formspree account.
2. Create a new form and grab its form ID (looks like `mblqwxyz`).
3. Open `index.html` and replace `YOUR_FORMSPREE_ID` with your ID in the `<form>` action URL.

Submissions land in your Formspree inbox and the email you registered with.

## Repository

```
.
├── index.html          # the landing page (edit me)
├── server.ts           # Bun dev server
├── package.json
├── docs/
│   ├── research.md     # competitive landscape, historical context, lineage
│   └── vision.md       # founding thesis, principles, program shape
└── README.md
```

## Philosophy

See [`docs/vision.md`](./docs/vision.md) for the founder's thesis and [`docs/research.md`](./docs/research.md) for the competitive and historical research.

Both are living documents. Update them as the project evolves.
