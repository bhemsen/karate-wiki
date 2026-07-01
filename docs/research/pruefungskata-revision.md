# Research: DJKB/JKA Prüfungskata – Kyu-Progression

> Research-Issue #96 — erstellt 2026-07-01  
> Implementierungs-Issue: #97 (fix: pruefungskata-revision)  
> Dringend: Benutzer-Gelbgurt-Prüfung am 2026-07-03

## Kritischer Befund: Gurtfarben-System

Das DJKB verwendet ein **9-Kyu-System** (9. Kyu bis 1. Kyu + Shodan):

| Kyu | Gurtfarbe | Quelle |
|-----|-----------|--------|
| 9 | **Weiß** | DJKB Prüfungsordnung, Bushido Lubwart |
| 8 | **Gelb** | DJKB Prüfungsordnung, Bushido Lubwart |
| 7 | Orange | DJKB Prüfungsordnung |
| 6 | Grün | DJKB Prüfungsordnung |
| 5 | Blau | DJKB Prüfungsordnung |
| 4 | Violett | DJKB Prüfungsordnung |
| 3 | 1. Braun | DJKB Prüfungsordnung |
| 2 | 2. Braun | DJKB Prüfungsordnung |
| 1 | 3. Braun | DJKB Prüfungsordnung |
| 0 | Schwarz (Shodan) | DJKB Prüfungsordnung |

**Problem in gurtpruefungen.ts:** Die Datei weist 9. Kyu als "Gelb" und 8. Kyu als "Orange" aus — das ist um eine Stufe verschoben. 9. Kyu ist im DJKB Weißgurt, 8. Kyu ist Gelbgurt.

## Sources

1. [DJKB Prüfungswesen – Offizielle Download-Seite](https://www.djkb.com/downloads/prufungswesen/) — Listet Verfahrensordnung Jan. 2024, DJKB-Prüfungsordnung 2013, Kata-Übersicht
2. [DJKB Kata-Übersicht PDF](https://www.djkb.com/files/Downloads/Pruefungswesen/djkb_pruefungsordnung_uebersicht_KATA.pdf) — Offizielle DJKB-Kata-Übersicht (binär nicht lesbar, aber Existenz bestätigt)
3. [DJKB Prüfungsordnung 2013 PDF](https://www.djkb.com/files/Downloads/Pruefungswesen/DJKB_Pruefungsordnung_2013-08-15.pdf) — Hauptdokument der Prüfungsordnung (9. Kyu: Taikyoku Shodan)
4. [Verfahrensordnung Jan. 2024](https://www.djkb.com/files/Verfahrensordnung_fuer_Kyu-_und_Dan-Pruefungen_4.1.24.pdf) — Aktuellste DJKB-Verfahrensordnung (binär nicht lesbar via WebFetch)
5. [Bushido Lubwart – 9. Kyu DJKB](http://www.bushido-lubwart.de/wordpress/karate-and-more/prufungen/prufungsordnung-djkb/9-kyu/) — DJKB-Mitgliedsverein: 9. Kyu = **"Kata entfällt"**, Weißgurt
6. [Bushido Lubwart – 8. Kyu DJKB](http://www.bushido-lubwart.de/wordpress/karate-and-more/prufungen/prufungsordnung-djkb/8-kyu/) — DJKB-Mitgliedsverein: 8. Kyu = **Heian Shodan**, Gelbgurt
7. [Bushido Lubwart – Prüfungsordnung Übersicht](http://www.bushido-lubwart.de/wordpress/karate-and-more/prufungen/prufungsordnung-djkb/) — Bestätigt 9-Kyu-System mit Gurtfarben-Hierarchie
8. [Shotokan Berlin – JKA Prüfungsordnung Kyu](https://www.shotokan-berlin.de/jka-pruefungsordnung-kyu/) — JKA-Mitgliedsverein: 8. Kyu = Taikyoku Shodan, 7. Kyu = Heian Shodan (abweichendes 10-Kyu-System)
9. [JKA International Grading Guideline](https://www.jka.or.jp/wp/wp-content/uploads/2017/06/b98c5e1514acc9fe91bbbc4b2fcb79f2.pdf) — JKA HQ: 10th Kyu = Taikyoku Shodan, 9th Kyu = noch Taikyoku Shodan
10. [JKA New Zealand Grading Syllabus](https://www.jkanz.org/jka-grading-syllabus) — JKA NZ: 9th Kyu = keine Kata; 8th Kyu = Taikyoku Shodan

## Consensus: Kata-Anforderungen per Kyu

| Kyu | Gurtfarbe (DJKB) | Kata DJKB | Kata JKA Int. | Konsens | Sicherheit |
|-----|-----------------|-----------|---------------|---------|------------|
| 9 (Weiß) | Weiß | Keine Kata / Taikyoku Shodan | Taikyoku Shodan | Taikyoku Shodan (oder keine) | mittel |
| 8 (Gelb) | Gelb | **Heian Shodan** | Taikyoku Shodan | **Heian Shodan** (DJKB-Standard) | hoch |
| 7 (Orange) | Orange | Heian Nidan | Heian Shodan | Heian Nidan (DJKB) | hoch |
| 6 (Grün) | Grün | Heian Sandan | Heian Nidan | Heian Sandan (DJKB) | hoch |
| 5 (Blau) | Blau | Heian Yondan | Heian Sandan | Heian Yondan (DJKB) | hoch |
| 4 (Violett/Lila) | Violett | Heian Godan | Heian Yondan | Heian Godan (DJKB) | hoch |
| 3 (1. Braun) | 1. Braun | Tekki Shodan | Heian Godan | Tekki Shodan (DJKB) | hoch |
| 2 (2. Braun) | 2. Braun | Sentei Kata | Tekki Shodan | Sentei Kata (DJKB) | hoch |
| 1 (3. Braun) | 3. Braun | Sentei Kata (Prüfervorgabe) | Sentei Kata | Sentei Kata (DJKB) | hoch |
| 0 (Shodan) | Schwarz | Sentei Kata (Prüfervorgabe) | Sentei Kata | Sentei Kata (DJKB) | hoch |

**Hinweis:** JKA International und DJKB nutzen unterschiedliche Kyu-Nummern für dieselben Kata, weil JKA int. ein 10-Kyu-System (10. Kyu = erstes Kyu) und DJKB ein 9-Kyu-System (9. Kyu = erstes Kyu) verwendet. Die Kata-Sequenz ist identisch.

## Disputes

### 9. Kyu: Taikyoku Shodan vs. Keine Kata

- **DJKB Prüfungsordnung 2013** (Primärquelle): Taikyoku Shodan für 9. Kyu
- **Bushido Lubwart DJKB** (DJKB-Mitgliedsverein, Sekundärquelle): "Kata entfällt" für 9. Kyu
- **JKA NZ** (internationale JKA-Filiale): Keine Kata für 9th Kyu
- **Mehrheitsentscheid:** Die DJKB-Primärquelle (Prüfungsordnung 2013) nennt explizit Taikyoku Shodan → **Taikyoku Shodan bleibt korrekt für 9. Kyu im DJKB**

### 9. Kyu Gurtfarbe: Das Kern-Missverständnis

- **Benutzer-Dojo** sagt: Gelbgurt = Heian Shodan
- **DJKB-Standard**: 9. Kyu = Weißgurt, 8. Kyu = Gelbgurt
- **Auflösung:** Der Benutzer macht seinen **8. Kyu (Gelbgurt)**, nicht den 9. Kyu. Die Kata Heian Shodan für den Gelbgurt ist DJKB-konform und in gurtpruefungen.ts unter `kyu: 8` bereits **korrekt** eingetragen!

### 8. Kyu Kata: Heian Shodan vs. Taikyoku Shodan

- **DJKB** (Bushido Lubwart, mehrere Quellen): Heian Shodan für 8. Kyu (Gelbgurt)
- **JKA International**: Taikyoku Shodan für 8th Kyu (in deren 10-Kyu-System)
- **Mehrheitsentscheid DJKB:** **Heian Shodan** für 8. Kyu (Gelbgurt) — bereits korrekt in gurtpruefungen.ts

## Correction Needed vs. Current Data

| Kyu | Aktuell in gurtpruefungen.ts | DJKB-Standard | Änderung nötig? |
|-----|------------------------------|---------------|-----------------|
| 9 | Gurtfarbe: "Gelb", Kata: Taikyoku Shodan | Gurtfarbe: **Weiß**, Kata: Taikyoku Shodan | **JA** — Gurtfarbe von "Gelb" → "Weiß" |
| 8 | Gurtfarbe: "Orange", Kata: Heian Shodan | Gurtfarbe: **Gelb**, Kata: Heian Shodan | **JA** — Gurtfarbe von "Orange" → "Gelb" |
| 7 | Gurtfarbe: "Grün", Kata: Heian Nidan | Gurtfarbe: Orange, Kata: Heian Nidan | **JA** — Gurtfarbe von "Grün" → "Orange" |
| 6 | Gurtfarbe: "Blau", Kata: Heian Sandan | Gurtfarbe: Grün, Kata: Heian Sandan | **JA** — Gurtfarbe von "Blau" → "Grün" |
| 5 | Gurtfarbe: "Lila", Kata: Heian Yondan | Gurtfarbe: Blau, Kata: Heian Yondan | **JA** — Gurtfarbe von "Lila" → "Blau" |
| 4 | Gurtfarbe: "Braun", Kata: Heian Godan | Gurtfarbe: Violett/Lila, Kata: Heian Godan | **JA** — Gurtfarbe von "Braun" → "Violett" |
| 3 | Gurtfarbe: "Braun (1. Stufe)", Kata: Tekki Shodan | Gurtfarbe: 1. Braun, Kata: Tekki Shodan | Gurtname-Anpassung |
| 2 | Gurtfarbe: "Braun (2. Stufe)", Kata: Sentei Kata | Gurtfarbe: 2. Braun, Kata: Sentei Kata | Gurtname-Anpassung |
| 1 | Gurtfarbe: "Braun (Schwarzgurt-Kandidat)", Kata: Sentei Kata | Gurtfarbe: 3. Braun, Kata: Sentei Kata | Gurtname-Anpassung |
| 0 | Gurtfarbe: "Schwarz (Shodan)", Kata: Sentei Kata | Gurtfarbe: Schwarz, Kata: Sentei Kata | korrekt |

**Kata-Zuordnungen sind alle korrekt.** Nur die Gurtfarben sind systemisch um eine Stufe verschoben.

## Empfehlung für Issue #97 (Implementierung)

Die Kata-Felder in gurtpruefungen.ts sind **bereits korrekt**. Nur die `gurtfarbe`-Felder und `gurtHex`-Werte müssen korrigiert werden:

```
kyu: 9 → gurtfarbe: 'Weiß', gurtHex: '#FFFFFF' (oder '#F5F5F5')
kyu: 8 → gurtfarbe: 'Gelb', gurtHex: '#F1C40F'
kyu: 7 → gurtfarbe: 'Orange', gurtHex: '#E67E22'
kyu: 6 → gurtfarbe: 'Grün', gurtHex: '#27AE60'
kyu: 5 → gurtfarbe: 'Blau', gurtHex: '#2980B9'
kyu: 4 → gurtfarbe: 'Violett', gurtHex: '#8E44AD'
kyu: 3 → gurtfarbe: '1. Braun', gurtHex: '#795548'
kyu: 2 → gurtfarbe: '2. Braun', gurtHex: '#6D4C41'
kyu: 1 → gurtfarbe: '3. Braun', gurtHex: '#5D4037'
```

Außerdem sollten die `pruefungsname`-Felder entsprechend angepasst werden (z.B. "9. Kyu – Weiß zu Gelb" → "9. Kyu – Weißgurt").

## Dojo-Variationen (nicht im DJKB-Standard)

Einige Dojos weichen vom DJKB-Standard ab:
- Manche Dojos verlangen Taikyoku Shodan für Gelbgurt (entspricht JKA International 10-Kyu-System)
- Manche Dojos lassen den 9. Kyu ohne Kata
- Der Benutzer-Dojo verlangt Heian Shodan für Gelbgurt — entspricht **DJKB 8. Kyu Standard**

**Fazit:** Der Benutzer macht seinen **8. Kyu (Gelbgurt)** mit Heian Shodan — das ist DJKB-konform. Er ist gut vorbereitet.
