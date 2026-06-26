# Constitution

> Normative and binding. Every principle must be verifiable and specific.
> Keep to ~1 page; this file is permanently loaded via CLAUDE.md. No status
> marker — foundation docs carry none.

## Tech stack

| Area | Choice | Rationale |
| ---- | ------ | --------- |
| Framework | Astro 6 | Zero-JS static output by default; ideal for read-only reference site |
| Language | TypeScript (strict) | Type-safe data structures prevent content shape errors |
| Content layer | `src/data/*.ts` TypeScript files | Machine-readable, version-controlled, no CMS dependency |
| Deployment | GitHub Pages via GitHub Actions | Free static hosting; matches the zero-backend constraint |
| Build tools | Node.js + npm | Astro's native toolchain |
| Type checking | @astrojs/check | Enforces strict TypeScript in Astro components |

## Architecture principles

- All content lives in `src/data/*.ts` — no inline content in Astro pages,
  no Markdown CMS, no external data fetch at build time.
- Astro pages and components contain layout and iteration only — zero
  business logic in `.astro` files.
- Each data file exports: one or more TypeScript interfaces, a union type per
  enum field, and a named `export const` array. No default exports.
- Maximum data file size: 500 lines. Split by domain if exceeded.
- No `any` in TypeScript — enforced by `@astrojs/check` in CI.
- No client-side JavaScript unless explicitly required for interactivity; Astro
  islands only if needed.

## Conventions

- File naming: kebab-case for all files and directories.
- Data file location: `src/data/` — one file per content domain
  (kata.ts, techniken.ts, dachi.ts, gurtpruefungen.ts, glossar.ts).
- Language split: code identifiers and comments in English; content fields
  (`beschreibung`, `nameDE`, display text) in German.
- Japanese terms: Kanji in `nameJP` field; Hepburn romanisation as the
  `id` field in kebab-case (e.g. `heian-shodan`).
- Content correctness authority: Nakayama's Best Karate series (Kodansha,
  1977–1986) is the canonical reference for all kata, technique, and
  terminology content. Deviations must be explicitly justified.
- Karate style: JKA Shotokan only — no other styles or non-JKA variants.

## Quality gates

- `npm run build` passes with zero TypeScript errors (includes `@astrojs/check`).
- No `any` type in any `.ts` or `.astro` file.
- Content review gate: before merging any content change, at least one fact-
  check pass against Nakayama's Best Karate or the JKA Kata Series is required
  (human gate — no automation).
- All kata entries include: id, name, bedeutung, bewegungsanzahl,
  schwierigkeit, gruppe, beschreibung, erstePruefung — no field may be empty
  or placeholder.

## Don'ts

- Do not add client-side frameworks (React, Vue, Svelte) — this is a static
  reference site; hydration is not justified.
- Do not fetch content from external APIs at build time — content must be
  version-controlled in the repo.
- Do not add user authentication, databases, or server-side rendering.
- Do not add content for non-JKA Shotokan kata or techniques.
- Do not use `any` in TypeScript.

## Tech debt (brownfield)

| Deviation | Where | Plan |
| --------- | ----- | ---- |
| Unstaged new files without spec or review | `src/data/embusen.ts`, `src/data/technik-illustrationen.ts`, `src/components/EmbusenDiagramm.astro`, `src/components/KihonIllustration.astro` | Review and commit as part of the first implementation milestone; or revert if not ready |
| Modified pages without commit | `src/pages/kata/[id].astro`, `src/pages/kihon/[id].astro` | Include in first milestone commit after content review |
