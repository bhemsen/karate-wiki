# Spec: Unstaged Integration

> Created: 2026-06-26

Commit and wire four untracked files — two SVG data modules
(`src/data/embusen.ts`, `src/data/technik-illustrationen.ts`) and two Astro
components (`src/components/EmbusenDiagramm.astro`,
`src/components/KihonIllustration.astro`) — into the kata and kihon detail
pages, replacing the current placeholder text with live SVG renderings.

## Outcome

- [ ] `src/data/embusen.ts` is committed with SVG floor-pattern paths for all
      26 kata; the unused `poly` helper function is removed
- [ ] `src/data/technik-illustrationen.ts` is committed with SVG stick-figure
      illustrations for all 17 Kihon techniques
- [ ] `src/components/EmbusenDiagramm.astro` is committed and imports
      `embusenSVG` from `../data/embusen`
- [ ] `src/components/KihonIllustration.astro` is committed and imports
      `technikIllustrationen` from `../data/technik-illustrationen`
- [ ] `src/pages/kata/[id].astro` imports `EmbusenDiagramm` and replaces the
      entire `<div class="illustration-box">` block (lines 66–75 in the
      current file) with `<EmbusenDiagramm kataId={eintrag.id} name={eintrag.name} />`
- [ ] `src/pages/kihon/[id].astro` imports `KihonIllustration` and replaces the
      entire `<div class="illustration-box">` block (lines 35–44 in the
      current file) with
      `<KihonIllustration technikId={technik.id} kategorie={technik.kategorie} nameJP={technik.nameJP} />`
      — no extra import from `techniken` needed in the page; `KihonIllustration.astro`
      already imports `kategoriefarben` and `Kategorie` internally
- [ ] `npm run verify` passes with 0 errors and 0 warnings after all changes
- [ ] `npm run build` produces 62 pages without errors

## Scope

### In scope

- Committing all four untracked files as-is
- Wiring `EmbusenDiagramm` into `src/pages/kata/[id].astro`: replace the full
  `<div class="illustration-box">` block with
  `<EmbusenDiagramm kataId={eintrag.id} name={eintrag.name} />`
- Wiring `KihonIllustration` into `src/pages/kihon/[id].astro`: replace the full
  `<div class="illustration-box">` block with
  `<KihonIllustration technikId={technik.id} kategorie={technik.kategorie} nameJP={technik.nameJP} />`
- Removing the unused `poly` function in `embusen.ts` to eliminate the TS
  warning (ts(6133))
- SVG content review: verify that all 26 embusen paths and all 17 technique
  illustrations are factually plausible per JKA standard; flag any that are
  clearly wrong or missing

### Out of scope

- Kata, Kihon, Dachi, Gurtprüfungen, Glossar data — covered in Phases 1–3
- Page layout changes beyond replacing the placeholder elements
- Adding new data entries or new SVG paths not already present

## Constraints

- The four files must be committed before any page changes that import them —
  `npm run verify` fails if a component import cannot be resolved.
- TypeScript strict: no `any`; the embusen and technik-illustrationen exports
  use `Record<string, string>`, which is correct.
- Content in German where applicable; SVG generation code (helpers, comments)
  may remain in English as it already is.
- JKA Shotokan only.
- After the final commit, `npm run verify` must report 0 warnings (not just 0
  errors) — the `poly` function removal addresses the one current warning.

## Prior art

- [Authoritative content sources](../prior-art.md#authoritative-content-sources-primary-references-not-competitors) —
  Nakayama's Best Karate and JKA Kata Series govern embusen correctness.
  Technique illustrations reference JKA standard body mechanics.

## Human prerequisites

none

## Prior decisions

| Decision | Rationale | Date |
|---|---|---|
| SVG content review is in scope | Accepted at gate: the embusen diagrams and technique illustrations are factual content fields; the same "no placeholder, must be accurate" rule applies as to text fields. Plausibility check is sufficient; pixel-perfect accuracy is not required — flag any that are clearly wrong. | 2026-06-26 |
| Remove unused `poly` helper | Constraint-determined: the TypeScript compiler flags it as ts(6133); clean code means 0 warnings. No file in the repo calls `poly` — safe to delete outright. | 2026-06-26 |
| One PR for all four files + page wiring | Atomic change: the components depend on the data files and the pages depend on the components — splitting into multiple PRs would require intermediate broken states. | 2026-06-26 |

## Tracking

- Milestone: Phase 4: Unstaged Integration
- Issues: created once this spec is merged

## Verification

- [ ] `npm run verify` passes with 0 errors and 0 warnings
- [ ] `npm run build` produces 62 pages without errors
- [ ] Human milestone-QA gate: open at least 3 kata detail pages and 3 kihon
      detail pages in the browser; confirm that the Embusen diagram and
      Kihon illustration render (not a fallback placeholder)
- [ ] All 26 kata IDs present in `embusenSVG` record
- [ ] All 17 technique IDs present in `technikIllustrationen` record
- [ ] No kata ID maps to an empty or whitespace-only string in `embusenSVG`;
      no technique ID maps to an empty string in `technikIllustrationen` —
      both components have fallback rendering, but the fallback must not appear
      in the final output

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Import path errors after wiring | Run `npm run verify` immediately after adding imports to each page; fix TypeScript errors before moving on |
| Embusen path visually incorrect for a kata | Flag uncertain paths in the PR description; human reviews at QA gate against JKA kata books |
| Component fallback renders if a kata ID is missing from the embusenSVG record | Verify ID coverage before wiring (all 26 kata confirmed present in embusen.ts) |

## Decision log

- 2026-06-26: Scope set to commit + wire + SVG content review; `poly` removal; one PR for all files.
