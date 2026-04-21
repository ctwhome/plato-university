# Fonts

Plato University uses two typefaces, loaded from **Google Fonts CDN** — exactly as the source repo does:

- **Cormorant Garamond** (serif, editorial display + long-form prose) — 400 / 500 / 600 / 700 with italics.
- **Inter** (sans, UI + functional body) — 400 / 500 / 600 / 700.

Both are **SIL Open Font License 1.1**, so self-hosting is allowed if you need offline rendering.

## Why no `.woff2` in this folder?

The landing page at `platouniversity.org` doesn't bundle webfonts either — it fetches from `fonts.googleapis.com`. To stay 1:1 with the source, this system does the same. The `@import` at the top of `colors_and_type.css` handles it.

## If you need local files

1. Visit https://fonts.google.com/specimen/Cormorant+Garamond and https://fonts.google.com/specimen/Inter.
2. Download the family, extract the `.woff2` files you want (the four weights listed above is enough), and drop them in this folder.
3. Replace the `@import` in `colors_and_type.css` with `@font-face` rules pointing at the local files.

## Substitution

**None.** These are the brand's real faces. If a client, printer, or production pipeline can't use them, flag it to the user — don't quietly swap to something else.
