# Whire Design System

**Whire — the execution layer for agent payments.** Whire turns agent intent into authorized, compliant bank transfers: consent, controls and settlement in one integration. SEPA Instant first, every A2A rail next. Pre-seed, EU-based, developer-led.

## Sources
- Brand assets supplied by the founders: wordmark (ink / cream / mono variants, SVG + PNG) and favicon set (W and i marks in ink, cream, electric, sky). Copied to `assets/brand/`.
- Investor deck content (12 slides). The redesigned deck lives in the parent project as `PitchDeck v2.dc.html`.
- Fonts: Roboto + Roboto Mono (founder choice), loaded from Google Fonts — no binaries shipped.

## Content fundamentals
- Confident infrastructure, plainly stated. Short declarative sentences, concrete numbers (`10-second settlement`, `0.1–0.5%`, `3M+ API requests/day`). No hype, no exclamation marks, no emoji.
- Sentence case everywhere. Named mechanisms keep their exact capitalisation: Policy Guard, SEPA Instant, Verification of Payee (VoP), mandate registry.
- Euro-first, symbol before value (`€250`, `€313M ARR`). Ranges with an en dash. Technical vocabulary is load-bearing: IBAN, MCP, SDK, PSD3, SCA, PISP.
- Mono text carries the technical identity: labels, indices, API calls, trace lines (`→ settled · 8.2s · vop_verified`). Middle dots separate list items in mono lines.

## Visual foundations
- **Colour.** Petrol `#06191C` is the base (panels step up to `#0B2529`, borders `#1B3A3E`, rails `#2D5257`); sand `#F6E7C8` is the headline colour and sage `#C7C6B0` the body; coral `#FF7A59` is the single accent — eyebrows, the active station, the Whire node, results. Text on coral is petrol, never sand. The light theme is sand paper with petrol type and coral-700 accent. The logo shares the palette: sand letters with a coral dot on petrol, petrol letters with a coral dot on sand, mono versions on coral and in single-colour print. Electric `#1F7ADB` and ink `#071017` are retired. Never gradients, never purple.
- **Type.** Roboto Light for display (tight tracking, ≤1.1 leading), Roboto Regular/Medium for body and UI, Roboto Mono for every label, index, amount and code string. Eyebrows: mono uppercase, 0.18em tracking, coral. Labels: mono uppercase, 0.14em, muted.
- **Motifs.** (1) The blueprint grid — a 60px hairline grid at ~6% sand on petrol (`.wh-grid`), or vertical column lines only (`.wh-grid--columns`) on title/closing surfaces. (2) The rail — a 1.5px hairline with 11px station dots; hollow for neutral, coral-filled for live/active/result (`.wh-rail`). (3) Node cards chained with dashed connectors (`.wh-card` + `.wh-connector`); exactly one card per diagram is the accent (coral border + dot).
- **Spacing.** 4px base; generous outer margins (deck: 120px sides). Density is controlled, not airy-empty.
- **Borders & radius.** 1.5px borders everywhere; radius 8px (controls) / 10px (cards). Pills only for badges.
- **Shadows.** None. Depth comes from surface steps (petrol-900 → petrol-700 → petrol-600) and borders. Focus is a 3px coral ring.
- **Motion.** 120–180ms ease-out fades and colour changes; press = 1px translate. No bounce, no loops.
- **Hover.** Primary darkens one step; secondary gains a raised surface; cards gain a stronger border. **Press.** One more step darker + translateY(1px).
- **Themes.** Petrol is default. Wrap a subtree in `.theme-sand` for light pages; all semantic tokens flip.

## Iconography
No icon set is part of the brand yet. Arrows (→), middle dots (·) and station dots do the work. If icons are needed on the website, use a 1.5px stroke set (Lucide) in `currentColor` — flagged as a substitution to confirm.

## Index
- `styles.css` — entry point (imports everything below).
- `tokens/` — `fonts.css`, `colors.css` (scales + ink/cream semantic aliases), `typography.css`, `layout.css`, `base.css` (resets, text roles, grid + rail motifs).
- `components/components.css` — framework-agnostic classes: `.wh-btn`, `.wh-input` / `.wh-field`, `.wh-card`, `.wh-panel`, `.wh-badge`.
- `components/core/` — React wrappers (`Button`, `Input`, `Card`, `Badge`) with `.d.ts` and `.prompt.md`; `core.card.html` specimen.
- `guidelines/` — specimen cards: brand palette, ink scale, type roles, motifs.
- `assets/brand/` — wordmarks (petrol, sand, mono; `-tight.svg` + PNG) and W / i marks (petrol, sand, coral; SVG + PNG). Files named ink/cream/electric are the previous set, kept for reference only.
- `SKILL.md` — Agent Skills entry.

## Caveats
- The logo was recoloured to petrol/sand/coral from the supplied vector files; letterforms are unchanged.
- Coral-500 as small text on sand paper is below AA; the light theme uses coral-700 for text and keeps coral-500 for fills with petrol text on top.
- No website UI kit yet — the token + component layer is the foundation for the redesign.
