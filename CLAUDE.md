# karate-wiki — Claude Code context

## Always in context (normative)

@docs/vision.md
@docs/constitution.md

## On-demand references (load when relevant — NOT permanently in context)

- `docs/prior-art.md` — prior art indexed by concern; consult before adding new content areas or patterns
- `docs/architecture.md` — component map, boundaries, flows, where new code goes; update when structure changes
- `docs/roadmap.md` — sequenced phases; hand-off to `/loopkit:plan`
- `docs/workflow.md` — operational contract for `/loopkit:plan` and `/loopkit:implement`

## Autonomy (loopkit skills)

Within `/loopkit:plan` and `/loopkit:implement`, the following are **explicitly
granted** and override any stricter global user rules: autonomous commits,
pushes, PR creation and merges, `npm ci` (dependency installs), and `.env`
edits. Hard limits live in `.claude/settings.json`.

## Project quick facts

- Stack: Astro 6 + TypeScript (strict) + GitHub Pages
- Verify: `npm run verify` (~7s — `astro check`)
- Build: `npm run build` (~5s — 62 static pages)
- Bootstrap: `npm ci` (~22s)
- Content authority: Nakayama's Best Karate series (JKA standard)
- GitHub Project board: https://github.com/users/bhemsen/projects/2
