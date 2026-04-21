# Plato University — Design System

> A one-year academy for the AI era. Philosophy first. Portfolio last.
> **Tagline:** *Learn to think before you learn to work.*

This folder is the canonical design system for Plato University. It contains the brand's voice, visual foundations, tokens, fonts, icons, logos, and UI kit (a replica of the public landing page) — everything an agent needs to make on-brand slides, mocks, prototypes, and artifacts.

---

## 1. Company & product context

Plato University is a **one-year academy for the AI era** — a small, city-rooted alternative to the industrial university. Philosophy, not job-training, is the core. It graduates thinkers with a portfolio and a defended capstone project, not a diploma.

- **Founded:** 2026 (the *discovery month* is September 2026, Amsterdam).
- **Location:** Amsterdam is hub #1. Every city with five or more students becomes its own hub.
- **Model:** Online core (seminars, readings, writing) + weekly in-person sessions at your local city hub.
- **Shape:** Three trimesters of four months — *Foundations*, *The World as It Is*, *Ship Something*.
- **Tone:** literary, founder-voiced, unapologetic, pared-down. Cormorant Garamond in italics feels like the tagline.
- **Against:** credentialism, early specialization, debt, the Carnegie Unit, passive schooling.
- **For:** primary sources, the examined life, portfolios, all ages, AI as a tool (not a master).

### The single public surface (today)

There is one product right now: the **marketing landing page** at `platouniversity.org`. It's a long-form editorial page with annotated historical figures (tooltip cards with Wikipedia thumbnails on hover), a hero, the problem statement, a roadmap, a trimester grid, a founding-cohort section, a Formspree-wired form, and an FAQ. There is no app yet, no LMS, no dashboard. When those arrive they'll need to be built — but for now the UI kit recreates the landing page.

### Sources

- **GitHub repo:** `ctwhome/plato-university` — branch `claude/plato-university-critical-thinking-q52Pp`
  - `index.html` — the entire landing page as a zero-build static file (Tailwind v4 + DaisyUI v5 via CDN).
  - `docs/vision.md` — the founder's thesis, principles, and program shape.
  - `docs/research.md` — historical context, competitive landscape, pedagogical lineage.
  - `favicon.svg`, `og-image.jpg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` — brand marks & social card.
- **No Figma.** No separate design file exists. Every token here comes from the `@theme` block and DaisyUI overrides in `index.html`.

---

## 2. Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file. Read me first. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code / agents. |
| `colors_and_type.css` | All design tokens as CSS vars — colors, type scale, spacing, shadow, motion. |
| `assets/` | Logos, favicons, OG image, manifest. Copy from here into artifacts. |
| `fonts/` | Font substitution notes (we link Google Fonts directly; no `.woff2` are bundled). |
| `preview/` | Individual HTML cards that populate the Design System tab. |
| `ui_kits/landing/` | Pixel-faithful React+Tailwind recreation of the public landing page. |

---

## 3. Content fundamentals — how copy is written

Plato University writes like a founder's letter, not a brochure. The voice is specific, literary, declarative, and slightly contrarian. Every paragraph earns its place; filler is punished.

### Voice rules

- **Short sentences. Often. Stacked.** The tagline — *"Learn to think before you learn to work."* — is the pattern: two clauses, a verb at the hinge, no hedging.
- **Write in "we" to the reader's "you."** Never "our team" or "the organization." Always *we* (the school) and *you* (the reader/applicant).
- **Italicize for emphasis, not decoration.** The italic passages in the hero (*specialists*, *thinkers*) are doing real work — they're the hinge of the argument.
- **Put the honest answer first.** The FAQ section is titled *"The obvious questions, answered honestly."* When the answer is "no," say no and then say why. *"Is this accredited? No, and that is the point."*
- **Historical figures are characters, not citations.** Horace Mann, Rockefeller, Carnegie, Plato, Seneca, Montaigne, Freire, Illich, hooks, Gatto, the Bauhaus — they're name-checked by full name on first mention and hovered with a dotted underline for a tooltip card. They carry the argument.
- **Name the enemy.** "The Prussian bell." "The Carnegie Unit." "The factory floor." Industrial schooling is the antagonist; don't soften the frame.
- **Concrete nouns, not abstract nouns.** *Bells, rows, hours, stopwatch, bookstore, café.* Not *"pedagogy,"* *"paradigm,"* *"framework."*
- **Stop when done.** The page ends sections with a single sentence turned into a punchline — *"And that's the point."* Resist trailing platitudes.

### Casing & punctuation

- **Sentence case** for headings and most eyebrows. (*"Where it begins"*, not *"Where It Begins"*.)
- **UPPERCASE** only for the eyebrow/kicker labels above sections and buttons (`tracking-[0.2em]`). Examples: `THE PROBLEM`, `APPLY`, `FOUNDING COHORT · SEP 2026`.
- **En-dashes with spaces** for parenthetical ranges (*"one-year academy — accreditation optional"*). Em-dashes also used; both are welcome, set with surrounding spaces.
- **Smart quotes.** Always curly. Never straight.
- **No Oxford comma rule enforced** — sentences are short enough that it rarely matters.

### What to avoid

- **No corporate warmth.** No "passionate team," no "game-changing," no "empowering."
- **No emoji.** Zero. The landing page uses none.
- **No exclamation marks.** The voice is confident without shouting.
- **No bullet-dense copy.** Bullets are used for principle lists (6-ish items) and syllabus items, never for dense feature pitches.
- **No marketing-speak superlatives.** Not *"world-class,"* *"cutting-edge,"* *"revolutionary."* When the program is bold, the structure of the argument shows it — don't label it.

### Phrases to keep in your pocket

- *"Learn to think before you learn to work."* — the tagline.
- *"Philosophy first. Portfolio last."*
- *"No debt. No diploma. And that's the point."*
- *"Primary sources, not summaries."*
- *"All ages, all edges."*
- *"AI as a tool, not a master."*
- *"No managers, only mentors."*
- *"The obvious questions, answered honestly."*

---

## 4. Visual foundations

The visual vocabulary is **editorial print** — a well-set book cover crossed with a literary magazine. Not a SaaS dashboard. Not a Silicon Valley landing page.

### Colors

Four-color palette. Everything else is a `color-mix` of `--ink` against `--cream` to get soft grays.

| Token | Hex | Role |
|---|---|---|
| `--cream` | `#faf7f2` | Page background, text on dark |
| `--cream-2` | `#f2ede3` | Sunken surfaces, subtle cards |
| `--cream-3` | `#e8e0d0` | Dividers, pressed states |
| `--ink` | `#1a1a1a` | Primary text, dark hero/footer |
| `--olive` | `#6b7a4f` | Primary accent, italic marks, eyebrow labels, success/info |
| `--terracotta` | `#b8593a` | Secondary accent, *thinkers*, eyebrow when urgent, focus ring |

**Backgrounds.** Default is cream. A dark `--ink` section is used for the apply form (inverted). Section dividers use a 1px hairline at 18% ink opacity. **No gradients.** **No glassmorphism.** **No blur.** **No transparency beyond opacity stops derived from `--ink` or `--cream`.**

**Images.** Warm, restrained, photographic or hand-drawn. The OG image is a pure typographic card in cream. No stock-photo slop, no AI-generated-looking illustrations. When imagery is needed but not available, use a typographic placeholder card (cream background, serif hero line, small terracotta dot).

### Type

Two-family system. **Cormorant Garamond** (variable weight 400–700, italics enabled) does the emotional work: headings, hero display, blockquotes, elegant annotations. **Inter** (400–700) does the utility work: body copy, UI, labels, eyebrows, forms, lists.

- **Hero display:** 5xl → 8xl serif, `leading-[1.02]`, tight tracking, with italic clauses mid-sentence.
- **Section H2:** 4xl–5xl serif, `leading-tight`.
- **Lead paragraphs:** serif, `text-xl md:text-2xl`, `text-ink/80`, `leading-snug`. These do the real reading work.
- **Body:** Inter, base size, `leading-relaxed`, `text-ink/75`–`/85`. Used inside cards, FAQs, lists, forms.
- **Eyebrows:** Inter, `text-xs`, `uppercase`, `tracking-[0.2em]`. Olive by default, terracotta when urgent ("THE PROBLEM"). Always ~24px above the H2 they precede.
- **Italic marks:** serif italic in olive or terracotta is used sparingly to deliver the hinge word of a sentence (*specialists*, *thinkers*, *University*).
- **Font features:** `ss01, cv11` are enabled on Inter body; `liga, dlig` on serif.

### Spacing & layout

- **Max widths.** Reading columns are `max-w-3xl` (48rem). Wider layouts cap at `max-w-5xl` (for rules) or `max-w-6xl` (trimester grid). The hero allows `max-w-4xl`.
- **Section rhythm.** Vertical padding is `py-20 md:py-32` — generous, airy. Every section is separated by a full-width hairline `rule` set inside `max-w-5xl`.
- **Horizontal padding.** `px-6` everywhere; the apply form goes a touch tighter.
- **Hover states.** Buttons dim by opacity (90%) on hover; inline links fade to full `text-ink`. No color shifts from primary to secondary on hover.
- **Press states.** No shrink. Outline ring on focus — terracotta, 2px, 3px offset, 2px radius.
- **Transparency.** Only via `text-ink/XX` stops (opacity 0.08 / 0.10 / 0.15 / 0.35 / 0.55 / 0.70 / 0.80 / 0.85). Never via `backdrop-filter`.

### Cards, borders, shadow

- **Default card.** `bg-base-200/60` (sunk cream), `border-ink/10`, no shadow, `rounded-box` (0.5rem). Trimester cards use this exactly.
- **Featured card ("the problem"):** white fill, `rounded-2xl` (1.5rem), border at 6% ink, a wide-soft shadow `0 4px 40px rgba(26,26,26,0.08)` + `0 1px 4px rgba(26,26,26,0.04)`. Used once per page maximum.
- **Tooltip card:** cream fill, 6px radius, tighter shadow `0 4px 20px rgba(26,26,26,0.13), 0 1px 4px rgba(26,26,26,0.08)`.
- **Radii scale.** `0.25rem` for inputs/buttons, `0.5rem` for default cards, `1rem` for buttons-on-inverted-bg, `1.5rem` for the featured card. **No fully-rounded-square cards.** Pill (`9999px`) is used only for radio and avatar dots.
- **No inner shadows.** No neumorphism.

### Motion

Restrained. Nothing bouncy, nothing loud.

- **Smooth scroll** on the document.
- **Scroll-triggered highlighter sweep** across annotated terms (GSAP ScrollTrigger) — terms dotted-underlined, with a yellow (`rgba(255,210,80,0.48)`) sweep painting in as they enter view. The one signature motion; keep it.
- **Tooltip card** fades in `opacity 180ms ease-out, transform 180ms ease-out`, rising 6px → 0. Re-positions on scroll/resize.
- **Dual-trailing cursor** on desktop only — a 6px terracotta dot + a 26px ring at lower opacity. The ring grows to 46px with a soft terracotta background wash when hovering interactive elements. Disabled on touch via `(hover: none), (pointer: coarse)`. Optional; treat as flourish.
- **No bounces, no springs, no big scale animations.**

### Signature patterns

- **Dotted terracotta underline** for annotated historical figures, with a hover tooltip that asynchronously fetches a Wikipedia thumbnail.
- **Timeline** uses a 1px left rule at `ink/15` with 2.5px circular stops — terracotta for "now," olive for "next," olive-40% for "after," ink-15% for "someday."
- **Inverse block** (the apply form) uses `bg-ink`, `text-cream`, terracotta submit button, cream text at 50–70% opacity for helper copy.
- **Inline serif italic word** at the kicker of a visual block (*"Four months each."*, *"One** month. **Four** sessions."*) — the italic carries punchy scale contrast.
- **Punchy number display.** The "Where it begins" block: serif, 5xl→7xl, terracotta numerals inline (*One* month, *Four* sessions). This is a layout primitive worth reusing.

---

## 5. Iconography

Plato University has **almost no iconography**. The landing page uses type, color, and empty space — not icons — to carry meaning. This is intentional and must be preserved. When in doubt: don't add an icon.

### What the landing page actually uses

- **`→` (rightwards arrow, U+2192)** as a bullet in the "what we're building" principle list. Rendered in **olive**, inline before the line. That's the only repeated glyph.
- **Circular dots** for the roadmap timeline — 10px filled circles in terracotta (current) / olive (next) / olive-40 (after) / ink-15 (later). These are pure CSS, not icons.
- **Annotation dot** in the favicon — a single terracotta circle on the bottom-right of the letter "P." It's the only piece of branded iconography.
- **Wikipedia thumbnails** inside tooltip cards — fetched at runtime from `en.wikipedia.org/api/rest_v1/page/summary/…`. They are real, external, and per-figure; treat them as content, not icon assets.
- **DaisyUI radio / checkbox** for the form. The plus-icon inside `collapse collapse-plus` accordions is drawn by DaisyUI; no asset needed.

### No icon font is bundled

There is no Font Awesome, Lucide, Heroicons, Remix Icons, or similar referenced anywhere in the landing page or repo. There is also no SVG sprite or icon component. **Don't invent one.**

### If you absolutely need icons

If a future surface (an app dashboard, a student portal) needs icons:

- **First choice:** Keep using arrows, bullets, dots, and typographic marks. That is the house style.
- **Second choice:** Use **Lucide** via CDN (`https://unpkg.com/lucide-static`) with `stroke-width="1.5"`, `--ink` stroke on cream or `--cream` stroke on ink. This matches the restrained line-weight of Cormorant. **Flag** that Lucide is a substitution, not an approved asset from the brand — ask the user to confirm.
- **Do not** use filled icon sets, multicolor icons, 3D illustrations, or emoji. No emoji anywhere in the product. No exceptions.

### Unicode glyphs in use

- `→` olive arrow as list bullet
- `·` middle dot as separator in eyebrow labels (`SEP 2026 · AMSTERDAM`)
- `—` em dash (set with spaces) for editorial dashes
- `©` copyright in footer

---

## 6. Typography — font substitution note

**Fonts are loaded from Google Fonts via CDN**, exactly as in the source repo — there are no `.woff2` files bundled in `fonts/`. If you need offline use, download these weights and drop them into `fonts/` then re-declare `@font-face`:

- **Cormorant Garamond** — 400, 500, 600, 700 + italics 400, 500, 600
- **Inter** — 400, 500, 600, 700

Both fonts are open-licensed (SIL Open Font License 1.1). No substitution is in play — these are the real house faces.

---

## 7. Usage — how to build with this system

From any HTML artifact in this project or a descendant:

```html
<link rel="stylesheet" href="/colors_and_type.css" />
```

Then use the tokens directly:

```html
<section style="background: var(--bg); color: var(--fg-1);">
  <p class="eyebrow eyebrow--terracotta">The problem</p>
  <h2>In the age of AI, we are still running a school built for the factory floor.</h2>
  <p class="prose-serif">In 1843, Horace Mann brought the Prussian bell home…</p>
</section>
```

For pixel-faithful recreations, see `ui_kits/landing/` — it shows component usage for the nav, hero, problem card, roadmap timeline, trimester grid, inverse apply form, and FAQ accordion.

---

## 8. Open questions for iteration

- **Logo lockups.** The only mark is the favicon-sized "P + dot." A full wordmark lockup (`Plato University`, with *University* italicized in olive) is set in HTML on the landing page but isn't delivered as an SVG. Consider adding `assets/logo-wordmark.svg` if you want a single-file lockup.
- **Patterns & textures.** There are none on the landing page. If a future surface needs decoration (a syllabus cover, a certificate-of-completion), we'd need to design one — this is a gap.
- **Icon system.** The brand has successfully avoided one so far. The moment an app surface arrives, a decision will be needed. See §5.
- **Photography direction.** No photography exists yet. Warm, muted, daylit, human, film-grain-friendly would fit — but this needs to be established by a real art-direction session, not invented here.
