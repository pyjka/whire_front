# Whire website — front-end handoff

Everything below matches `PitchDeck v2` (petrol · sand · coral). Source of truth for values: `tokens/*.css`. Visual reference: the brand book PDF.

## 1. Load
- Fonts: Roboto 300/400/500/700 + Roboto Mono 400/500/700 from Google Fonts (`tokens/fonts.css` has the import). No other typefaces.
- CSS: import `styles.css` (pulls tokens + `components/components.css`). Everything is plain CSS custom properties and classes; React wrappers in `components/core/*.jsx` are optional.
- Light sections: wrap in `.theme-sand` — all semantic tokens flip.

## 2. Colour (use the semantic vars, not raw hex)
| Role | Token | Hex |
|---|---|---|
| Page / dark surface | `--surface-app` (petrol-900) | #06191C |
| Card / panel | `--surface-panel` (petrol-700) | #0B2529 |
| Field / code | `--surface-field` (petrol-800) | #092023 |
| Border | `--border` (petrol-500) | #1B3A3E |
| Rail / divider | `--border-rail` (petrol-400) | #2D5257 |
| Headline text | `--text-strong` (sand-100) | #F6E7C8 |
| Body text | `--text-body` (sage-200) | #C7C6B0 |
| Muted label | `--text-muted` (petrol-300) | #7E9890 |
| Accent | `--accent` (coral-500) | #FF7A59 |
| Accent hover / press | coral-600 / coral-700 | #E0603F / #B0432A |
| Text on coral | `--text-on-accent` | #06191C (never sand) |
| Light theme paper | sand-50 | #FBF3E3 |
| Light theme accent text | coral-700 | #B0432A |
| Positive / negative / warning | | #3FAE7A / #E05252 / #E5A83A |

Rules: one coral element per composition. No gradients, glows, shadows, pure black or pure white. The logo now uses the same palette: sand letters + coral dot on petrol, petrol letters + coral dot on sand, mono versions on coral. Electric blue #1F7ADB and ink #071017 are retired.

## 3. Type
- Display: Roboto 300, 56–96px, line-height 1.0, letter-spacing −0.03em.
- Titles: Roboto 400, 24–40px, line-height 1.2, −0.015em.
- Body: Roboto 400, 16–18px, line-height 1.5. Never below 16px on screen.
- Eyebrow: Roboto Mono, 14px, uppercase, 0.18em tracking, coral.
- Label: Roboto Mono, 12px, uppercase, 0.14em tracking, muted.
- Technical strings (API calls, IBANs, amounts, results): Roboto Mono, no transform. Results in coral 500 weight: `→ settled · 8.2s · vop_verified`.
- Buttons/UI: Roboto 500.

## 4. Layout
- 4px spacing scale (`--space-*`); container 1200px, prose 720px.
- Borders 1.5px everywhere. Radius: 8px controls, 10px cards, 16px large surfaces, pill only for badges.
- No box-shadow. Depth = surface steps (900 → 700 → 600) + borders. Focus = 3px coral ring at 35%.
- Motion: 120–180ms ease-out colour/opacity; press = translateY(1px). No bounce, no loops.

## 5. Motifs
- Grid: `.wh-grid` — 60px hairline grid at 6% sand over petrol. `.wh-grid--columns` for hero/footer (vertical lines only, 240px apart). Content margins sit on grid lines.
- Rail: `.wh-rail` + `.wh-rail__stop` — 1.5px line, 11px stations, `--active` fills coral. Use for steps, timelines, roadmaps.
- Node: `.wh-card` + `.wh-connector` — chained cards with dashed connectors; exactly one `.wh-card--accent` (coral border + top dot) per diagram = Whire's role.

## 6. Components (classes in `components/components.css`)
- Buttons `.wh-btn` + `--primary | --secondary | --ghost | --inverse`, sizes `--sm` 36px / default 44px / `--lg` 52px, `--mono` for code-like actions.
- Inputs `.wh-field` > `.wh-field__label` + `.wh-input` (`--mono`, `--sm`, `--lg`), `.wh-input-group` for a mono prefix, `.wh-field--error`.
- Cards `.wh-card` with `__index`, `__title`, `__body`, `__footer`; variants `--accent`, `--filled`, `--compact`, `--interactive`.
- Code `.wh-panel` > `.wh-panel__bar` + `.wh-panel__code` (spans `.k .s .c .r`).
- Badges `.wh-badge` + `--accent | --outline-accent | --strong | --positive | --negative | --warning`, `.wh-badge__dot`.

## 7. Assets
`assets/brand/` — wordmark-petrol / -sand / -mono-petrol / -mono-sand (`-tight.svg` cropped to the letters, plus PNG) and marks mark-w-petrol / -sand / -coral, mark-i-petrol / -sand (SVG + 512/256px PNG). Use `mark-w-petrol` as favicon and app icon. Clear space = height of the W; min wordmark width 96px, below that use the W mark. The ink/cream/electric files are the old set; do not ship them.

## 8. Copy
Sentence case. Short declarative sentences, concrete numbers (€250, 0.1–0.5%, under 10 seconds). Keep named mechanisms exact: Policy Guard, SEPA Instant, Verification of Payee (VoP), mandate registry. No emoji, no exclamation marks.
