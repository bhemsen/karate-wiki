# Spec: Kata Content Review

> Created: 2026-06-26

Review and correct all 26 Shotokan kata entries in `src/data/kata.ts` so that
every field is factually accurate per the JKA standard (Nakayama's Best Karate
series).

## Outcome

- [ ] All 26 kata `beschreibung` fields are factually correct and pedagogically
      clear, validated against the JKA standard
- [ ] All 26 kata `bewegungsanzahl` values match the JKA-standard movement count
- [ ] All 26 kata `erstePruefung` values match the JKA examination system
- [ ] All 26 kata `bedeutung` (name meaning) fields are correctly translated
- [ ] All 26 kata `schwierigkeit` levels reflect JKA convention
- [ ] All 26 kata `gruppe` assignments are correct per JKA classification
- [ ] `npm run verify` passes with no errors after all changes

## Scope

### In scope

- All fields in `src/data/kata.ts` for all 26 kata entries
- Factual accuracy per the JKA standard (Nakayama's Best Karate as canonical
  authority; Claude's trained JKA knowledge as the implementation reference)
- German-language descriptions (content language per constitution)

### Out of scope

- `src/data/kata-ablauf.ts` (step-by-step sequences) — covered in Phase 4:
  unstaged-integration
- `src/data/embusen.ts` (floor patterns) — covered in Phase 4
- Adding new fields to the `Kata` interface beyond what is listed above, unless
  the kiai-point field is accepted at the spec-acceptance gate (see Prior
  decisions: OPEN row)
- Changes to page templates or components
- Kihon, Dachi, Gurtprüfungen, or Glossar content — covered in Phases 2 and 3

## Constraints

- Content lives in `src/data/kata.ts` only — no changes to Astro pages or
  components (see constitution: "All content lives in `src/data/*.ts`").
- TypeScript strict: no `any`, interfaces must stay consistent — if the Kata
  interface is extended with a new field, it must be set on all 26 entries.
- Correctness authority: Nakayama's Best Karate series (Kodansha, 1977–1986).
  Deviations from this standard must be explicitly justified in the PR.
- Language: content fields (`beschreibung`, `bedeutung`) in German;
  identifiers in English (see constitution).
- JKA Shotokan only — no other styles or non-JKA variants.

## Prior art

- [Authoritative content sources](../prior-art.md#authoritative-content-sources-primary-references-not-competitors) —
  Nakayama's Best Karate and the JKA Kata Series are the correctness
  references for all corrections in this phase.
- [English-language Shotokan kata reference](../prior-art.md#english-language-shotokan-kata-reference) —
  risingsun.ie harvest note: kiai points per kata is a field worth adding
  (see OPEN row in Prior decisions).

## Human prerequisites

none — Claude's training knowledge of JKA Shotokan kata is the implementation
reference. The human confirms or denies at the acceptance gate whether physical
copies of Nakayama's Best Karate are available for cross-checking.

## Prior decisions

| Decision | Rationale | Date |
|---|---|---|
| Correctness authority is Nakayama's Best Karate (Kodansha 1977–1986) | Established in prior-art.md during inception; canonical JKA standard | 2026-06-26 |
| Implementation reference is Claude's trained JKA knowledge | No external API; Claude has extensive knowledge of JKA Shotokan kata from training; any genuinely uncertain items are flagged for human review | 2026-06-26 |
| All 6 existing Kata fields are in scope for review | Constitution requires "no field may be empty or placeholder"; the user confirmed all content areas need overhaul; accuracy across all fields is the acceptance criterion | 2026-06-26 |
| OPEN — should `kiai: number[]` be added to the Kata interface? | Prior art (risingsun.ie) identifies kiai points as a useful missing field. Adding it is a schema change affecting all 26 entries. Resolved at the spec-acceptance gate. | — |
| OPEN — PR granularity: one PR for all 26 kata, or one PR per kata group (Heian / Tekki / Shorin / Shorei / Sonstige)? | Affects issue decomposition and review scope per PR. Resolved at the spec-acceptance gate. | — |

## Tracking

- Milestone: Kata Content Review
- Issues: created once this spec is merged — one issue per kata group

## Verification

- [ ] `npm run verify` passes (`astro check`, ~7s)
- [ ] `npm run build` produces 62 pages without errors
- [ ] Human review: at least 5 kata from different groups sampled and
      cross-checked against JKA knowledge (Nakayama's Best Karate)
- [ ] No kata entry has an empty or placeholder field
- [ ] All `bewegungsanzahl` values are integers within known JKA ranges
      (20–67 for the 26 standard kata; Heian Sandan has 20 movements)

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Claude's knowledge has minor inaccuracies for some kata details | Flag uncertain items in PR description; human reviews at milestone QA gate |
| Movement count disagreements between sources (some counts differ by edition) | Use Nakayama's Best Karate count as canonical; note any discrepancy in the PR |
| Kiai-point field (if added) requires updating all 26 entries | If accepted, implement as part of this phase in a single atomic change; do not leave partial |
| `Gruppe` enum may need extension if review finds wrong groupings | `'Sonstige'` is a catch-all, not a JKA classification; if any kata needs reclassification, the TypeScript union type must be updated alongside all affected entries — treat as an atomic schema change |

## Decision log

- 2026-06-26: Scope set to all 6 existing Kata fields; two open decisions
  (kiai field, PR granularity) deferred to acceptance gate.
