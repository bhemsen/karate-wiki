# Spec: Kata Technique Sequence Review

> Created: 2026-06-26

Review and correct the step-by-step technique sequences (`schritte`) for all 26
JKA Shotokan kata in `src/data/kata-ablauf.ts` against the JKA standard, fixing
incorrect technique names, sides, stances, and kiai positions.

## Outcome

- [ ] All 26 kata sequences in `kataAblaufMap` have been reviewed against the JKA
      standard (Nakayama's Best Karate / JKA Kata Series / Wikipedia JKA kata articles)
- [ ] Each `KataSchritt` has the correct `technik` name for that position in the kata
- [ ] Each `KataSchritt` has the correct `seite` (Links/Rechts/Beide) for that technique
- [ ] Each `KataSchritt` has the correct `stand` (Dachi) for that position
- [ ] Each `KataSchritt` has the correct `richtung` (turn direction or movement description)
- [ ] Kiai positions (`kiai: true`) are at the correct step numbers for each kata
- [ ] All 26 kata remain marked `vollstaendig: true`
- [ ] `npm run verify` passes with 0 errors and 0 warnings after all changes
- [ ] `npm run build` produces 62 pages without errors

## Scope

### In scope

- `src/data/kata-ablauf.ts` — the sole file under review
- All six kata groups: Heian 1–5, Tekki 1–3, Bassai Dai/Sho + Kanku Dai/Sho,
  Jion/Jitte/Jiin/Empi/Hangetsu, Gankaku/Nijushiho/Sochin/Meikyo,
  Chinte/Unsu/Wankan/Gojushiho Dai/Gojushiho Sho
- Heian Shodan is the known-incorrect starting point; specifically, technique
  names at certain steps are wrong (confirmed by the human at planning time)
- All fields of `KataSchritt`: `technik`, `seite`, `richtung`, `stand`,
  `beschreibung`, `kiai`

### Out of scope

- `src/data/kata.ts` — already reviewed in Phase 1
- `src/data/kata-ablauf.ts` structural changes (adding new fields to `KataSchritt`)
- Adding entirely new kata sequences not already present
- Embusen diagrams (covered in Phase 4)
- UI/page layout changes

## Constraints

- Content authority: Nakayama's Best Karate series (Volumes 5–11 cover the kata)
  and the JKA Kata Series. Wikipedia's "Heian kata" and individual JKA kata
  articles are an acceptable supplementary reference for implementers lacking
  the books.
- All 26 kata must remain `vollstaendig: true` — the corrections must complete
  the sequence, not reduce it.
- `KataSchritt.technik` must use standard JKA romanisation of the technique name
  (e.g. `'Gedan-Barai'`, `'Age-Uke'`, `'Oi-Zuki Chudan'`). Technique names
  that combine moves (e.g. `'Nami-Gaeshi + Kagi-Zuki'`) are allowed when the
  kata explicitly performs them simultaneously.
- `KataSchritt.seite` values: `'Links'` | `'Rechts'` | `'Beide'` only — no new values.
- No `any` in TypeScript; no structural changes to `KataSchritt` or `KataAblauf`.
- The `emptyAblauf` helper at line ~1111 is a pre-existing unused hint — leave it.
- All 26 kata are in one file; issues are serialised (each depends on the previous)
  to avoid merge conflicts on the same file.

## Prior art

- [Authoritative content sources](../prior-art.md#authoritative-content-sources-primary-references-not-competitors) —
  Nakayama's Best Karate (Volumes 5–11) and JKA Kata Series govern correctness.
  Wikipedia JKA kata articles are an acceptable implementer reference.

## Human prerequisites

none — the user confirms corrections by sight (3×/week practitioner of Heian Shodan;
Wikipedia available for other kata).

## Prior decisions

| Decision | Rationale | Date |
|---|---|---|
| Technique names are the primary error category | Confirmed by human at planning gate: Heian Shodan has wrong technique names at certain steps, not merely wrong directions or kiai positions. Other kata likely have the same class of error. | 2026-06-26 |
| Wikipedia is an accepted supplementary reference | The human has no access to Nakayama's Best Karate books but practices Heian Shodan 3×/week and confirmed Wikipedia as a reliable reference. Implementers may use Wikipedia JKA kata articles alongside their JKA training knowledge. | 2026-06-26 |
| Six sequential issues, one per kata group | All 26 kata live in one file (`kata-ablauf.ts`). Parallel subagents editing the same file cause merge conflicts. Sequential dependency (issue N+1 depends on issue N) ensures one subagent works on the file at a time. Groups: Heian 1–5 · Tekki 1–3 · Bassai/Kanku · Jion/Jitte/Jiin/Empi/Hangetsu · Gankaku/Nijushiho/Sochin/Meikyo · Chinte/Unsu/Wankan/Gojushiho. | 2026-06-26 |
| Implementer applies confident corrections; flags uncertain steps in PR | The human QA gate is the final check. Subagents do not park an issue over uncertainty — they apply their best JKA knowledge and clearly document which steps they changed and why in the PR description. Uncertain corrections are highlighted for human attention at the QA gate. | 2026-06-26 |
| `vollstaendig: true` stays on all 26 kata | The sequences were already marked complete; the task is to correct errors, not to add missing sequences. | 2026-06-26 |

## Tracking

- Milestone: Phase 5: Kata Sequence Review
- Issues: created from this spec once it is merged (six sequential issues, one per kata group)

Each issue references this spec path in its body.

## Verification

- [ ] `npm run verify` passes with 0 errors and 0 warnings
- [ ] `npm run build` produces 62 pages without errors
- [ ] Human milestone-QA gate: the practitioner verifies Heian Shodan's technique
      sequence step-by-step (21 moves) — all technique names match what is
      performed in training
- [ ] Human milestone-QA gate: spot-check 5 other kata (at least one from each
      remaining group) against Wikipedia or personal knowledge
- [ ] No step in any kata has `technik: ''` or an obviously placeholder name
- [ ] Kiai positions for all 26 kata match the kata count field in `src/data/kata.ts`
      (`kata.kiai` array introduced in Phase 1)

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| AI's knowledge of step-by-step sequences is itself imperfect | Implementer documents every change in the PR description with a reason; human QA gate is the safety net |
| Some kata sequences are rarely performed and hard to verify from memory | Flag uncertain kata in the PR description; Wikipedia and JKA kata reference sites provide secondary confirmation |
| Single-file serialisation makes this milestone sequential and slow | Six issues is the minimum granularity for reviewable batches; accept the sequential dependency |
| Step count discrepancies (some sources count differently) | Use the `bewegungsanzahl` field in `src/data/kata.ts` as the authoritative count for each kata — the `nr` field on the last `KataSchritt` must equal this value |

## Decision log

- 2026-06-26: Scope set at planning gate. Known error: Heian Shodan has wrong technique names. Six sequential issues per kata group. Wikipedia accepted as implementer reference.
