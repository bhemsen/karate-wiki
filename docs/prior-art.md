# Prior Art

> Descriptive, living document. Indexed BY CONCERN, not by project. Add
> entries whenever new references surface; gaps are fine.

## German-language Karate reference

### karate-funakoshi.de / jka-shokukai.de / shotokan-berlin.de

- Path: public dojo websites (no repo)
- License: proprietary
- Verdict: reference-only — fragmented dojo pages, no structured data, incomplete coverage
- Date: 2026-06-26
- Notes:
  - ADOPT: confirms that a structured German-language reference is missing in the market
  - AVOID: unstructured HTML pages without machine-readable data; no version control; scope limited to individual dojos

## English-language Shotokan kata reference

### risingsun.ie/karate-wiki

- Path: https://www.risingsun.ie/karate-wiki/kata
- License: unknown
- Verdict: reference-only — provides name, movement count, kiai points per kata; no technique descriptions or pedagogical depth
- Date: 2026-06-26
- Notes:
  - ADOPT: kiai point data per kata is a useful field currently missing from this project; movement count per kata as a structural field
  - AVOID: static HTML with no structured data; English-only; no coverage of Kihon, Stände, Gurtprüfungen, or Glossar

### blackbeltwiki.com/jka-kata

- Path: https://blackbeltwiki.com/jka-kata
- License: unknown
- Verdict: avoid — HTTP 410 Gone; no longer available
- Date: 2026-06-26
- Notes:
  - ADOPT: nothing; resource is gone
  - AVOID: external dependency without versioning

## Authoritative content sources (primary references, not competitors)

### Nakayama — Best Karate series

- Path: Best Karate, Vol. 1–11, Masatoshi Nakayama, Kodansha International, 1977–1986
- License: proprietary (published book series)
- Verdict: reference-only — canonical JKA standard; photographic and textual documentation of all 26 kata
- Date: 2026-06-26
- Notes:
  - ADOPT: all kata descriptions, movement sequences, technique names, and application notes should be validated against this series; it is the authoritative correctness reference
  - AVOID: verbatim reproduction (copyright); use as a validation source, not as copy-paste content

### Japan Karate Association — JKA Kata Series (Vol. 1–5)

- Path: JKA Kata Series, Japan Karate Association, official English edition (5 volumes)
- License: proprietary (published book series)
- Verdict: reference-only — official JKA documentation; aligns with Nakayama's Best Karate
- Date: 2026-06-26
- Notes:
  - ADOPT: use as secondary validation source alongside Best Karate, particularly for Heian through Tekki (Vol. 1 covers Heian 1–5 + Tekki 1)
  - AVOID: verbatim reproduction (copyright)
