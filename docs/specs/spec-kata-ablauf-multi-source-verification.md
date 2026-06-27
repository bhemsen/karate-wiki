# Spec: Kata Ablauf Multi-Source Verification

> Created: 2026-06-27

Re-verify and correct the step-by-step `schritte` sequences for the 25
remaining kata in `src/data/kata-ablauf.ts` using the 5-independent-sources
method established by Heian Shodan (PR #38, merged 2026-06-27).

## Outcome

- [ ] Each of the 25 kata in scope has been independently verified against
      at least 5 sources spanning German Wikipedia, JKA-aligned dojo or
      federation references (DE/FR/UK/AU/JP), and Shotokan encyclopedia /
      tutorial references — never relying on a single source.
- [ ] Every `KataSchritt` carries the correct `technik` name per the
      cross-source consensus.
- [ ] Every `KataSchritt` carries the correct `seite` (`Links` / `Rechts` /
      `Beide`).
- [ ] Every `KataSchritt` carries the correct `stand` (Dachi).
- [ ] Every `KataSchritt` carries a correct `richtung` (turn angle or step
      direction).
- [ ] Each `kiai: true` flag sits on the technique that is the kiai-bearing
      move per consensus (not merely at the right step number).
- [ ] Each touched step's `beschreibung` text remains consistent with the
      corrected `technik`, `seite`, and `stand` — no orphaned descriptions
      referring to the old technique.
- [ ] `KataAblauf.vollstaendig` remains `true` for all 26 kata.
- [ ] `npm run verify` passes with 0 errors and 0 warnings.
- [ ] `npm run build` produces 62 pages without errors.

## Scope

### In scope

- `src/data/kata-ablauf.ts` — the sole file under review.
- The 25 kata listed in `Tracking` below.
- All `KataSchritt` fields: `technik`, `seite`, `richtung`, `stand`,
  `beschreibung`, `kiai`.

### Out of scope

- `src/data/kata.ts` — already reviewed in Phase 1; Phase 5 precedent kept it
  out of scope, this spec keeps the boundary.
- `src/data/embusen.ts` — Embusen diagrams (Phase 4).
- Structural changes to `KataSchritt` or `KataAblauf` interfaces.
- Adding new kata not already present in the file.
- UI / page layout changes.
- Heian Shodan — already corrected in PR #38; this spec does not re-do that
  work.

## Constraints

- Content authority: Nakayama's *Best Karate* series (Volumes 5–11) and the
  JKA Kata Series remain the primary canonical references; Wikipedia DE and
  JKA-aligned dojo or federation pages are acceptable secondary references.
  See `docs/constitution.md` for the authority rule.
- All 26 kata must remain `vollstaendig: true` — corrections complete the
  sequence, never reduce it.
- `KataSchritt.technik` uses standard JKA romanisation
  (e.g. `'Gedan-Barai'`, `'Tetsui-Uchi'`, `'Oi-Zuki Chudan'`).
- `KataSchritt.seite` values: `'Links'` | `'Rechts'` | `'Beide'` only.
- No `any` in TypeScript; no structural changes to the existing interfaces.
- All 25 kata live in one file, so the issues run **serially** (each depends
  on the previous) to avoid merge conflicts on `kata-ablauf.ts`.
- `kata-ablauf.ts` is ~1,300 lines, exceeding the constitution's 500-line
  limit; splitting by domain is explicitly deferred to a future phase.
- The pre-existing `emptyAblauf` helper at line ~1111 is an unused hint —
  leave it.

## Prior art

- [Authoritative content sources](../prior-art.md#authoritative-content-sources-primary-references-not-competitors) —
  Nakayama (Vol. 5–11) and JKA Kata Series govern correctness.
- [English-language Shotokan kata reference](../prior-art.md#english-language-shotokan-kata-reference) —
  risingsun.ie kiai-point data and similar dojo references are acceptable
  for kiai-position cross-checks.

## Human prerequisites

none — no secrets, no external provisioning, no accounts. The QA gate is a
human content review against Nakayama and personal dojo knowledge.

## Prior decisions

| Decision | Rationale | Date |
|---|---|---|
| Per-kata issues (25 issues), not per-group (5 issues like Phase 5) | User directive: *"Jede Kata einzeln und lege issue im board dafür an"*. Finer-grained PRs, clearer progress visibility, and per-PR research provenance | 2026-06-27 |
| Serial depends-on chain across 25 issues | All 25 kata live in one file; parallel work would cause merge conflicts on `kata-ablauf.ts`. Issue N+1 depends on Issue N | 2026-06-27 |
| Method: ≥5 independent sources per kata | Heian Shodan precedent: PR #31's narrow fix missed obvious errors because it relied on a single mental model. Multi-source consensus is the explicit countermeasure | 2026-06-27 |
| Kiai correctness = positioned on the kiai-bearing technique, not just at the right step number | PR #31 moved kiai flags to the correct step numbers but left wrong techniques at those positions. The user's complaint targeted this specifically | 2026-06-27 |
| Heian Shodan handled outside this milestone via PR #38 | Heian Shodan was corrected before this spec was drafted, as the precedent that established the 5-source method | 2026-06-27 |
| `kata.ts` changes out of scope | Phase 5 precedent. Content-description edits in `kata.ts` (e.g. "vier vs. fünf Grundtechniken") are a separate concern | 2026-06-27 |
| Outlier source threshold: 4-of-5 majority for technique consensus | Heian Shodan example: karate-notes.com put the 2nd Kiai on step 21 instead of 17; the other 4 sources agreed on step 17. Document the dissent in the PR | 2026-06-27 |
| `bewegungsanzahl` from `kata.ts` is the authoritative step count | Sources disagree on counting style (e.g. simultaneous techniques as one move or two). The last `nr` in `schritte` must equal `bewegungsanzahl` | 2026-06-27 |

No genuinely-open decisions remain at planning time.

## Tracking

- Milestone: Phase 6: Kata Ablauf Multi-Source Verification (created on merge)
- Issues: 25 issues, one per kata. Order (each `Depends on:` the previous):

  | # | Kata | Group |
  |---|---|---|
  | 1 | Heian Nidan | Heian |
  | 2 | Heian Sandan | Heian |
  | 3 | Heian Yondan | Heian |
  | 4 | Heian Godan | Heian |
  | 5 | Tekki Shodan | Tekki |
  | 6 | Tekki Nidan | Tekki |
  | 7 | Tekki Sandan | Tekki |
  | 8 | Bassai Dai | Shorin |
  | 9 | Bassai Sho | Shorin |
  | 10 | Kanku Dai | Shorin |
  | 11 | Kanku Sho | Shorin |
  | 12 | Empi | Shorin |
  | 13 | Hangetsu | Shorei |
  | 14 | Jion | Sonstige |
  | 15 | Jitte | Sonstige |
  | 16 | Jiin | Sonstige |
  | 17 | Gankaku | Shorin |
  | 18 | Nijushiho | Shorin |
  | 19 | Sochin | Shorei |
  | 20 | Meikyo | Sonstige |
  | 21 | Chinte | Sonstige |
  | 22 | Unsu | Shorin |
  | 23 | Wankan | Shorin |
  | 24 | Gojushiho Dai | Shorin |
  | 25 | Gojushiho Sho | Shorin |

Groups in the table mirror `kata.ts` `gruppe` (the canonical classification),
not common Shotokan literature groupings, so that the spec is the single
source of truth alongside the data file.

Each issue references this spec path in its body.

## Verification

- [ ] `npm run verify` passes 0 errors, 0 warnings (the pre-existing
      `emptyAblauf` hint is explicitly allowed).
- [ ] `npm run build` produces 62 pages without errors.
- [ ] For every kata in scope: PR description lists ≥5 source URLs and
      documents any deviation from consensus with rationale.
- [ ] No step in any kata has `technik: ''` or a placeholder name.
- [ ] For each kata in scope, `kiai: true` lands on the technique named in
      ≥4 of 5 consulted sources.
- [ ] Machine cross-check: for every kata, the `nr` values of all
      `kiai: true` entries in `kata-ablauf.ts` exactly match the `kiai:
      number[]` array in `kata.ts` (e.g. `kiai: [9, 17]` ↔ `kiai: true`
      on steps 9 and 17). This guards against the PR #31 failure mode
      where kiai-step numbers and kiai-bearing techniques drifted apart.
- [ ] Human milestone-QA gate: spot-check at least 4 kata (one from each
      major group — Heian, Tekki, Shorin/Shorei, Sonstige) against personal
      dojo knowledge or Wikipedia.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| AI's pattern-match shortcut produces copy-paste-style errors | Each PR documents the source-by-source consensus per changed step; uncertain steps flagged for human attention at the QA gate |
| 25 PRs is a heavy review load | Each PR is narrow (one kata) and small; the dojo-trained practitioner spot-checks per kata, not all together |
| Some kata (Wankan, Gojushiho, Chinte, Unsu, Meikyo) are rarely performed; sources may disagree more | Use `bewegungsanzahl` as authoritative step count; explicitly document dissent in the PR; defer to Wikipedia DE when the JKA reference is sparse |
| Outlier sources (e.g. karate-notes Heian Shodan kiai discrepancy) | 4-of-5 majority threshold for technique consensus; note dissenting source in the PR |
| Serial dependency makes the milestone long | Accepted trade-off — merge conflicts on `kata-ablauf.ts` would be worse; the loop processes one issue at a time |

## Decision log

- 2026-06-27: Spec drafted as Phase 6 following Heian Shodan correction
  (PR #38). The precedent that motivated it: PR #31's *"Heian 1–5 sequences"*
  fix moved kiai flags to the right step numbers but left wrong techniques
  at those positions and missed Tetsui-Uchi at step 4 entirely. Multi-source
  verification is the explicit countermeasure.
