# Spec: Gurtprüfungen and Glossar Content Review

> Created: 2026-06-26

Review and correct all 10 Gurtprüfung entries in `src/data/gurtpruefungen.ts`
and all 55 Glossar entries in `src/data/glossar.ts` for factual accuracy per the
JKA standard (Nakayama's Best Karate series and JKA examination system).

## Outcome

- [ ] All 10 Gurtprüfung `kihonAnforderungen` arrays are factually correct per
      JKA standard for each Kyu level
- [ ] All 10 Gurtprüfung `kata` arrays list the correct required kata per level
- [ ] All 10 Gurtprüfung `kumite` strings correctly describe the Kumite
      requirements for each level
- [ ] All 10 Gurtprüfung `sonstigeAnforderungen` strings are accurate
- [ ] All 10 Gurtprüfung `mindestTrainingszeit` values (months) are correct per
      JKA/DJKB standard
- [ ] All 10 Gurtprüfung `gurtfarbe` and `gurtHex` values match the correct
      belt colors for each Kyu level
- [ ] All 55 Glossar `begriffJP` (kanji) fields are correct
- [ ] All 55 Glossar `aussprache` (romanized pronunciation) fields are accurate
- [ ] All 55 Glossar `uebersetzungDE` (German translations) are correct
- [ ] All 55 Glossar `erklaerung` descriptions are factually accurate
- [ ] All 55 Glossar `kategorie` assignments are correct
      (Zählen / Körper / Technik / Dojo-Etikette / Philosophie)
- [ ] `npm run verify` passes with no errors after all changes

## Scope

### In scope

- All content fields in `src/data/gurtpruefungen.ts`: kyu, gurtfarbe, gurtHex,
  pruefungsname, kihonAnforderungen, kata, kumite, sonstigeAnforderungen,
  mindestTrainingszeit
- All content fields in `src/data/glossar.ts`: begriffJP, aussprache,
  uebersetzungDE, erklaerung, kategorie
- Adding new Glossar entries (if accepted at gate)
- Factual accuracy per JKA/DJKB standard; German-language content fields

### Out of scope

- Page templates, components, or layout changes
- Kata, Kihon, Dachi data — covered in Phases 1 and 2
- `src/data/embusen.ts` / `technik-illustrationen.ts` — Phase 4

## Constraints

- Content lives in `src/data/gurtpruefungen.ts` and `src/data/glossar.ts` only
  (see constitution: "All content lives in `src/data/*.ts`").
- TypeScript strict: no `any`; existing interfaces must remain consistent.
  If the `GlossarKategorie` union is extended, all affected entries must be
  updated atomically.
- Content fields in German; identifiers in English (see constitution).
- JKA Shotokan only — DJKB examination standard is used where it differs from
  JKA international (see Prior decisions).

## Prior art

- [Authoritative content sources](../prior-art.md#authoritative-content-sources-primary-references-not-competitors) —
  Nakayama's Best Karate and JKA Kata Series are the correctness references;
  JKA/DJKB examination guidelines govern the Gurtprüfungen content.

## Human prerequisites

none

## Prior decisions

| Decision | Rationale | Date |
|---|---|---|
| Correctness authority: JKA international + DJKB for Gurtprüfungen | The wiki targets German-speaking dojos using the DJKB (Deutscher JKA Karate-Bund) examination system, which follows JKA but has German-specific adaptations for minimum training times and belt colors; both are used | 2026-06-26 |
| Correctness authority: Nakayama + Claude's trained knowledge for Glossar | Standard JKA terminology; no German-specific variation | 2026-06-26 |
| `gurtfarbe` / `gurtHex` are content fields, not UI fields | Belt color is factual content (the actual belt color at each rank), unlike `kategoriefarben` which is purely UI choice; both fields are in scope for correctness review | 2026-06-26 |
| OPEN — should more Glossar entries be added beyond the current 55? | Vision requires ≥ 50 (already met); adding more is a scope expansion. Resolved at the spec-acceptance gate. | — |
| OPEN — PR granularity: one PR for both files, or separate PRs? | Resolved at the spec-acceptance gate. | — |

## Tracking

- Milestone: Phase 3: Gurtprüfungen and Glossar Review
- Issues: created once this spec is merged — one issue per data file
  (or single issue if one-PR decision is made at gate)

## Verification

- [ ] `npm run verify` passes (`astro check`, ~7s)
- [ ] `npm run build` produces ≥ 62 pages without errors
- [ ] Human milestone-QA gate: at least 2 Gurtprüfung levels and 5 Glossar
      entries sampled and cross-checked; uncertain items flagged in the PR
      description are resolved by the human at this gate
- [ ] No string field is empty or placeholder in either file
- [ ] All `kyu` values in Gurtprüfungen are integers in range 0–9 (0 = Shodan)
- [ ] All `mindestTrainingszeit` values are positive integers (months)

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| DJKB vs. JKA international requirements may differ | Use DJKB as primary; note any JKA international deviation in the PR description |
| Belt color hex values may be approximate | Use standard hex codes for each JKA belt color; flag any uncertain ones for human review at QA gate |
| Glossar kanji may have subtle errors | Cross-check against Claude's training knowledge; flag uncertain entries |
| New Glossar entries (if added) must follow existing interface shape exactly | Implement atomically; run verify immediately after adding entries |

## Decision log

- 2026-06-26: Scope set to all content fields in both files; DJKB + JKA as
  dual authority for Gurtprüfungen; two open decisions (new Glossar entries,
  PR granularity) deferred to acceptance gate.
