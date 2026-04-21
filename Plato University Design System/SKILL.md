---
name: plato-university-design
description: Use this skill to generate well-branded interfaces and assets for Plato University, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `fonts/`, `preview/`, `ui_kits/landing/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, landing-page variants), copy assets out and create static HTML files for the user to view. Always include `<link rel="stylesheet" href="colors_and_type.css">` and consume the tokens — don't hardcode hex values or font families.

If working on production code, read the rules in `README.md` (especially §3 Content Fundamentals and §4 Visual Foundations) to become an expert in designing with this brand. The UI kit at `ui_kits/landing/` is a pixel-faithful recreation of the live landing page and is the canonical reference for component patterns.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a landing-page section? a syllabus page? a certificate? a deck?), ask 3–5 clarifying questions, and then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

### Hard rules (non-negotiable)

- **No emoji.** Anywhere. Ever.
- **No gradients. No blur. No glassmorphism.** The brand is editorial print.
- **No icon font.** Use `→` as a bullet, filled dots for timeline stops. If an app surface truly needs icons, use Lucide at `stroke-width="1.5"` and flag the substitution.
- **Two fonts only.** Cormorant Garamond for display/prose, Inter for UI/body. Both from Google Fonts CDN.
- **Four brand colors** (`--cream`, `--ink`, `--olive`, `--terracotta`). Greys are always `color-mix`es of ink against cream.
- **Sentence case.** UPPERCASE tracked 0.2em only for eyebrow labels and button ghost/nav items.
- Every clause earns its place. No filler, no marketing fluff, no exclamation marks.
