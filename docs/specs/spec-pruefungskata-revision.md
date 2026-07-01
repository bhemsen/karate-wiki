# Spec: Prüfungskata-Revision

> Created: 2026-07-01

Verifikation der Kata-Anforderungen je Kyu-Stufe gegen mehrere autoritative
DJKB/JKA-Quellen; Korrektur aller betroffenen Einträge in
`src/data/gurtpruefungen.ts`. Hintergrund: In Phase 7 wurde für 9. Kyu
(Gelbgurt) `Taikyoku Shodan` eingetragen — der Benutzer gibt an, dass sein
Dojo `Heian Shodan` verlangt. Die gesamte Kata-Progression (9. Kyu – 1. Dan)
muss daher gegen Primärquellen neu geprüft werden.

## Outcome

- [ ] Kata-Anforderung für 9. Kyu (Gelbgurt) gegen ≥ 3 DJKB-Primärquellen verifiziert
- [ ] Gesamte Kata-Progression (9. Kyu – 1. Dan) gegen ≥ 3 DJKB/JKA-Quellen verifiziert
- [ ] `src/data/gurtpruefungen.ts` kata-Felder entsprechen DJKB-Standard
- [ ] `npm run verify` besteht (0 TypeScript-Fehler)
- [ ] `npm run build` erzeugt ≥ 62 Seiten

## Scope

### In scope
- kata-Felder in `src/data/gurtpruefungen.ts` für alle 10 Einträge (9. Kyu – 1. Dan)
- Intensivrecherche: mindestens 3 autoritative DJKB-Quellen je Kyu-Stufe

### Out of scope
- kihonAnforderungen, kumite, mindestTrainingszeit — deckt Phase 7 ab
- Glossar, Kihon, Dachi, Embusen — andere Phasen

## Constraints
- JKA Shotokan / DJKB-Standard — kein DKV oder andere Verbände
- Primärquelle: offizielle DJKB-Prüfungsordnung oder JKA-Kata-Syllabus
- Benutzer-Kontext: Gelbgurt-Prüfung am 2026-07-03, Heian Shodan erwartet — dringend

## Human prerequisites
- Benutzer kann eigene Dojo-Prüfungsordnung liefern als Primärquelle (optional)

## Prior decisions
| Decision | Rationale | Date |
|---|---|---|
| Intensive Recherche: research-intensive split | ≥3 WebSearch-Calls benötigt | 2026-07-01 |
| DJKB als primäre Autorität | Deutsches Dojo-Kontext | 2026-07-01 |

## Tracking
- Milestone: Phase 8: Prüfungskata-Revision
- Issues: research-issue + implementation-issue (zwei-Issue-Split per Workflow)

## Verification
- [ ] `npm run verify` besteht
- [ ] `npm run build` ≥ 62 Seiten
- [ ] Human milestone-QA gate: mindestens 3 Kyu-Stufen spot-checked gegen Primärquellen
- [ ] Kata für 9. Kyu ist korrekt (Primärquelle vorgelegt)

## Risks and mitigations
| Risk | Mitigation |
|---|---|
| DJKB vs. einzelne Dojos können variieren | Offizielle DJKB-Prüfungsordnung als Primärquelle |
| Taikyoku Shodan vs. Heian Shodan Diskrepanz | Mehrheitsentscheid aus ≥3 Quellen |
