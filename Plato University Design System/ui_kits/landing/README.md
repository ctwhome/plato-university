# Landing page UI kit

A pixel-faithful recreation of `platouniversity.org` — the one public surface Plato University has today.

**Source:** `ctwhome/plato-university` branch `claude/plato-university-critical-thinking-q52Pp`, file `index.html`.

**Stack (original):** Tailwind v4 + DaisyUI v5 via CDN, zero-build, Cormorant Garamond + Inter from Google Fonts, GSAP ScrollTrigger for the highlight sweep.

**Stack (this kit):** Plain HTML + the design system's `colors_and_type.css`. No build step, no framework. Every visual decision maps back to a token in that file. Good enough to drop a new section in or to use as the starting point for a production rebuild.

## What's included

- Nav (brand wordmark + ghost Apply button)
- Hero with italic hinge headline and dual CTAs
- **Featured "problem" card** — the only elevated white card in the system, 24px radius, wide shadow
- Long-form prose sections with **annotated historical figures** (hover → tooltip with bio)
- Roadmap timeline with colored dots (now → someday)
- Three-up trimester grid
- "Who it's for" dl block
- Lineage strip on sunk cream
- Founding-cohort big-type block with terracotta numerals
- **Inverted apply form** on `--ink` — radio group, inputs, terracotta submit
- FAQ accordion (native `<details>`)
- Footer

## Interactions

- Hover any dotted-underlined term → tooltip with bio appears, positioned above (or below if near top edge).
- Click any FAQ row → accordion toggles; plus sign rotates 45° to an × in terracotta.
- Submit the form → mock alert (wired to Formspree in production).

## Known gaps vs. production

- No GSAP scroll-highlight sweep animation (can be restored with GSAP + ScrollTrigger CDN).
- No dual trailing cursor (flourish; optional).
- Tooltip bios are a 4-figure subset; the real page has 13 annotated figures with Wikipedia-fetched thumbnails.
- Form action posts to nothing; wire to Formspree when shipping.
