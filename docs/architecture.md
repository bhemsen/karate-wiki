# Architecture

> Structural, living document — the most volatile artifact. Update whenever a
> change alters components, boundaries, or flows.

## Component map

| Component | Responsibility |
| --------- | -------------- |
| `src/data/kata.ts` | 26 Shotokan kata definitions: id, name, bedeutung, bewegungsanzahl, schwierigkeit, gruppe, beschreibung, erstePruefung |
| `src/data/techniken.ts` | 17 Kihon technique definitions: id, nameJP, nameDE, kategorie, beschreibung, schwierigkeit, kyu |
| `src/data/dachi.ts` | 12 stance definitions: id, nameJP, nameDE, beschreibung, schwierigkeit |
| `src/data/gurtpruefungen.ts` | Examination requirements per Kyu level (9. Kyu through 1. Dan) |
| `src/data/glossar.ts` | Japanese terminology entries with translations and explanations |
| `src/data/kata-ablauf.ts` | Step-by-step technique sequences per kata (newer, unstaged work) |
| `src/data/embusen.ts` | Movement pattern / floor diagram data per kata (newer, unstaged work) |
| `src/data/technik-illustrationen.ts` | Illustration metadata for Kihon techniques (newer, unstaged work) |
| `src/layouts/Layout.astro` | Shared page shell: head, nav, footer, CSS custom properties |
| `src/components/EmbusenDiagramm.astro` | SVG/canvas component rendering kata floor patterns |
| `src/components/KihonIllustration.astro` | Illustration component for technique visuals |
| `src/pages/index.astro` | Homepage: area navigation cards + stats |
| `src/pages/kata/index.astro` | Kata overview list with filtering |
| `src/pages/kata/[id].astro` | Kata detail page: full entry + technique sequence |
| `src/pages/kihon/index.astro` | Kihon technique list with category filter |
| `src/pages/kihon/[id].astro` | Technique detail page with illustration |
| `src/pages/staende/index.astro` | Stance overview list |
| `src/pages/staende/[id].astro` | Stance detail page |
| `src/pages/glossar/index.astro` | Full glossary view |
| `src/pages/gurtpruefungen/index.astro` | Examination requirements per Kyu |
| `src/pages/404.astro` | 404 error page |

## Boundaries

- **Data → Pages:** Pages import from `src/data/` and may import from
  `src/components/`. Data files have zero dependencies on pages or components.
- **Components → Data:** Components receive data as Astro props — they do not
  import from `src/data/` directly. Data is injected by the page that uses them.
- **No cross-domain data coupling:** e.g. `glossar.ts` does not import from
  `kata.ts`. Pages assemble multi-domain views if needed.
- **No external runtime dependencies:** no API calls, no databases, no auth.
  Everything is resolved at build time.

## Key flows

1. **Static build:** `npm run build` → Astro reads all `src/data/*.ts` files,
   calls `getStaticPaths()` on each `[id].astro` page to generate one HTML file
   per data entry, writes to `dist/`.
2. **Detail page generation:** `[id].astro` imports the relevant data array,
   exports `getStaticPaths()` (returns `{ params: { id }, props: { entry } }`
   for each item), renders the entry as static HTML.
3. **Deployment:** GitHub Actions runs `npm run build` on push to `main`,
   publishes `dist/` to the `gh-pages` branch → served at
   `https://bhemsen.github.io/karate-wiki/`.

## Where new code goes

- **New content entry** (e.g. a missing kata or glossary term): add to the
  relevant `src/data/*.ts` file — the page auto-generates from it.
- **New content domain** (e.g. Bunkai descriptions): create `src/data/<domain>.ts`
  with interface + export const array; add a new page under `src/pages/<domain>/`.
- **New reusable visual component**: `src/components/` — props-only, no direct
  data imports.
- **Layout change** (nav, footer, global CSS): `src/layouts/Layout.astro`.
- **New page type** (index vs. detail): follow the existing pattern —
  `index.astro` for lists, `[id].astro` for detail views with `getStaticPaths`.
