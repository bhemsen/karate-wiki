# Spec: Kihon and Dachi Content Review

> Created: 2026-06-26

Review and correct all 17 Kihon technique entries in `src/data/techniken.ts`
and all 12 Dachi entries in `src/data/dachi.ts` for factual accuracy per the
JKA standard (Nakayama's Best Karate series).

## Outcome

- [ ] All 17 Kihon `beschreibung` fields are factually correct and
      pedagogically clear per JKA standard
- [ ] All 17 Kihon `nameJP` (kanji) fields are correct
- [ ] All 17 Kihon `nameDE` fields are accurate German translations
- [ ] All 17 Kihon `kategorie` assignments are correct (Tsuki / Uke / Geri / Uchi)
- [ ] All 17 Kihon `schwierigkeit` levels reflect JKA convention
- [ ] All 17 Kihon `kyu` assignments match the JKA examination system
- [ ] All 12 Dachi `beschreibung` fields are factually correct (weight
      distribution, foot position, angles, application context)
- [ ] All 12 Dachi `nameJP` (kanji) fields are correct
- [ ] All 12 Dachi `nameDE` fields are accurate German translations
- [ ] All 12 Dachi `schwierigkeit` levels reflect JKA convention
- [ ] `npm run verify` passes with no errors after all changes

## Scope

### In scope

- All content fields in `src/data/techniken.ts`: id, nameJP, nameDE,
  kategorie, beschreibung, schwierigkeit, kyu
- All content fields in `src/data/dachi.ts`: id, nameJP, nameDE,
  beschreibung, schwierigkeit
- Factual accuracy per JKA standard; German-language content fields
- New fields to either interface, if accepted at the spec-acceptance gate
  (see Prior decisions: OPEN rows)

### Out of scope

- `kategoriefarben` record in `techniken.ts` — UI concern, not content
- Page templates, components, or layout changes
- Kata, Gurtprüfungen, Glossar — covered in Phases 1 and 3
- `src/data/technik-illustrationen.ts` — covered in Phase 4: unstaged-integration

## Constraints

- Content lives in `src/data/techniken.ts` and `src/data/dachi.ts` only
  (see constitution: "All content lives in `src/data/*.ts`").
- TypeScript strict: if either interface is extended with a new field,
  all entries in that file must be populated in the same atomic change.
- Correctness authority: Nakayama's Best Karate series (JKA standard).
- Content fields in German; identifiers in English (see constitution).
- JKA Shotokan only.

## Prior art

- [Authoritative content sources](../prior-art.md#authoritative-content-sources-primary-references-not-competitors) —
  Nakayama's Best Karate and JKA Kata Series are the correctness references
  for technique and stance descriptions.

## Human prerequisites

none

## Prior decisions

| Decision | Rationale | Date |
|---|---|---|
| Correctness authority is Nakayama's Best Karate | Established in prior-art.md; canonical JKA standard | 2026-06-26 |
| Implementation reference is Claude's trained JKA knowledge | Extensive training knowledge of JKA Shotokan techniques and stances; uncertain items flagged for human review | 2026-06-26 |
| `kategoriefarben` record is out of scope | UI color mapping, not content; no factual correctness concern | 2026-06-26 |
| OPEN — should new fields be added to `Technik`? E.g. `ziel: 'Jodan' \| 'Chudan' \| 'Gedan'` (target level) or `trefferfläche: string` (attacking surface) | These fields would enrich the reference but are schema changes requiring all 17 entries to be populated. Resolved at the spec-acceptance gate. | — |
| No new `Dachi` fields in this phase | Weight distribution information is correctly present in `beschreibung` for all 12 entries; extracting it into a dedicated field is a feature enhancement beyond the "review & correct" scope. Deferred to a future roadmap phase if needed. | 2026-06-26 |
| OPEN — PR granularity: one PR for all (Kihon + Dachi), or separate PRs? | Affects how the implement loop dispatches work. Resolved at spec-acceptance gate. | — |

## Tracking

- Milestone: Phase 2: Kihon and Dachi Review
- Issues: created once this spec is merged — one issue per data file
  (or single issue if one-PR decision is made at gate)

## Verification

- [ ] `npm run verify` passes (`astro check`, ~7s)
- [ ] `npm run build` produces ≥ 62 pages without errors (hardcoding exact count is fragile)
- [ ] Human milestone-QA gate: at least 3 Kihon techniques and 3 Dachi
      sampled and cross-checked; any items flagged as uncertain in the PR
      description are resolved by the human at this gate
- [ ] No entry has an empty or placeholder field
- [ ] All `kyu` values are integers in the range 1–9 (9 = 9. Kyu / lowest beginner; 1 = 1. Kyu / highest pre-black-belt; no Dan value of 0 is used in this data set)
- [ ] No string field (`beschreibung`, `nameJP`, `nameDE`) is empty or a placeholder in either data file

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Claude's knowledge has minor inaccuracies for edge-case techniques | Flag uncertain items in PR description; human reviews at milestone QA gate |
| New fields (if accepted) must be added to all entries atomically | Implement as single commit; do not leave partial |
| Kanji in `nameJP` may have subtle errors | Cross-check against Claude's training knowledge; flag any uncertain entries |

## Decision log

- 2026-06-26: Scope set to all content fields in both data files; three open
  decisions (new Technik fields, new Dachi fields, PR granularity) deferred to
  acceptance gate.
