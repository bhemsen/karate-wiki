# Workflow contract

> Operational contract for the loopkit skills (`/loopkit:plan`,
> `/loopkit:implement`) — the single source for the branch model, commands,
> gates, and loop behavior of this project. Filled during inception; the skills
> read it instead of hardcoding specifics.

## Environment prerequisites

- `git` and `gh` must be installed and on PATH.
- `gh` must be authenticated (`gh auth status`) with the `repo`
  (issues/milestones/PRs) and `project` (the ProjectV2 board) scopes.
- Landmine: `gh auth login` does NOT grant `project` by default. Remedy: missing
  `project` scope -> `gh auth refresh -s project` (OAuth login; for a PAT or
  `GH_TOKEN`, `gh auth refresh` does not apply — re-create the token with the
  `project` scope instead).

## Repository

- GitHub repo: `bhemsen/karate-wiki`
- Base / integration branch: `main`
- GitHub Project board: `https://github.com/users/bhemsen/projects/2` (number 2)
  — mandatory; the loops' queue and status display. Status values: `Todo`,
  `In Progress`, `Done` — a status display, **not** a claim or lock
  (see Orchestration).

`/loopkit:plan` requires a GitHub repo; specs are the local single source of
truth, milestones and issues are created on GitHub from them.

## Worktrees

- All implementation and docs work happens in a worktree — never in the main
  checkout. The loops run from the main checkout and never modify it except
  fast-forward pulls.
- Path convention: `../karate-wiki-worktrees/<branch-with-slashes-as-dashes>`.
- Operate via `git -C <worktree>`, never `cd` into it (a `git -C ... push`
  does not start with `git push`, so it bypasses any push-guard on the main
  checkout).
- After creating a worktree, run the Bootstrap command in it before anything
  else — verification cannot run in an un-bootstrapped worktree.

## Commands

- Bootstrap: `npm ci`
  (measured duration: ~22s — installs from lockfile; no env files needed for
  this static site)
- Verify: `npm run verify`
  (= `astro check`; measured duration: ~7s — TypeScript check across all .astro
  and .ts files; runs green on a clean checkout)
- Test: `none yet` — every acceptance item not covered by machine checks is
  verified at the human milestone-QA gate instead.
- Build: `npm run build`
  (measured duration: ~5s — full Astro static build, 62 pages)

Verify is the per-iteration gate: run it after every change set and fix until
green. Run Build additionally before opening an app-affecting PR. While Test is
`none yet`, every acceptance item no machine check covers is verified at the
human milestone-QA gate instead.

## Branch and spec naming

- Branches: `feat/<scope>`, `fix/<scope>`, `chore/<scope>`, `docs/<scope>`, `refactor/<scope>`.
- Specs: `docs/specs/spec-<scope>.md` — the single source of truth for design.
- Completed specs: moved to `docs/specs/archive/` with the same name.

## Proportional tracks

Planning weight scales with change size. Every change runs on exactly **one**
of three tracks:

- **full-spec** — a feature. A spec under `docs/specs/`, a milestone, and
  dependency-ordered issues. The full chain (spec -> milestone -> issues -> PR)
  applies. The spec is archived and the milestone closes when the work is done.
- **living-spec milestone** — an ongoing theme that never finishes. A spec plus
  a milestone that **stays open** and accretes issues over time (not
  one-spec-per-closed-phase). Human-initiated. The milestone is marked with a
  `Track: living-spec` line in its description (the discriminator the QA gate
  reads to tell it from a full-spec milestone). The spec is **not** archived and
  the milestone is **not** closed at the QA gate — a merged spec with an open
  milestone signals the theme is active.
- **`track:adhoc` fast-lane** — a bug or QoL change. A single GitHub issue,
  labeled `track:adhoc`, with **no spec and no milestone** — it holds its whole
  state on the board and skips ceremony entirely (no dependency graph either).
  Created by the **human**, not by `/loopkit:plan`.

The `feat`/`fix`-must-trace-to-a-spec rule is relaxed for `track:adhoc` only;
full-spec and living-spec changes always reference a spec.

## Issue conventions

Per track:

- **full-spec** — Body format: a `Goal:` line, an `Acceptance:` checklist, an
  optional `Depends on: #N[, #M]` line, and a `Spec:` path pointing at the
  feature spec. The issue belongs to the feature's milestone.
- **living-spec** — same body format; the `Spec:` path points at the living
  spec, and the issue belongs to the always-open living-spec milestone. Closing
  the issue does not archive the spec or close the milestone.
- **`track:adhoc`** — created by the human as a single issue carrying the
  `track:adhoc` label, with **no `Spec:` path and no milestone**. A `Goal:` line
  and `Acceptance:` checklist still describe it; `Depends on:` is allowed but
  rarely needed. Its full state lives on the board.

Milestone-level depends-on:

- A milestone that depends on another carries a `Depends on milestone: #<n>`
  line in its **description** — a fixed, parseable token `/loopkit:plan` writes
  and humans/`/loopkit:implement` read. Two milestones with no `Depends on
  milestone` edge between them are **independent** and may run as parallel
  orchestrators (see Orchestration); a milestone is workable once its
  depended-on milestones are closed.

Across all tracks:

- An issue is **unblocked** when every `Depends on` issue is closed and it
  carries neither a `blocked:human` nor a `needs:planning` label.
- **Park, don't stop:** a blocker only a human can clear gets the
  `blocked:human` label plus a comment naming exactly what is needed and where
  to deliver it; the loop moves on to the next unblocked issue.
  `gh issue list --label blocked:human` is the human's delivery queue.

## Status

- Specs carry no lifecycle state. "Accepted" = merged on the default branch
  with a milestone and issues. A completed full-spec moves to
  `docs/specs/archive/` and its closed milestone is the "done" signal; a
  living-spec milestone is the exception — it stays open (see Gates).
- Live work state is the board: `Todo` (ready), `In Progress` (an orchestrator's
  subagent is on it), `Done` (merged). These are a **status display only — not a
  claim or lock**.
- Everything else — blocked, deferred — lives on the GitHub issues and
  milestones, the single source of truth for progress.

## The chain: spec -> milestone -> issues -> PR

| Layer | Owns |
| ----- | ---- |
| `docs/specs/spec-*.md` | The design: why, what, done-criteria |
| GitHub milestone | The phase / grouping |
| GitHub issues | The steps — one issue per implementable step |
| Project board | The live work state: Todo / In Progress / Done |

A PR closes an issue (`Closes #N`); the issue references its spec path. The
spec never lists steps; the issues never restate the design. The spec's
`Outcome` list is done-criteria, not a progress mirror.

## Orchestration

`/loopkit:implement` is a **milestone orchestrator**, not a flat issue-consumer.
Pointed at **one** milestone, it owns that milestone end-to-end:

- **Build the graph.** Read the milestone's open issues and build the dependency
  DAG from their `Depends on: #N` lines. The **unblocked frontier** is every open
  issue whose `Depends on` issues are all closed and that carries neither a
  `blocked:human` nor a `needs:planning` label.
- **Fan out in waves.** Dispatch the current frontier as a **parallel batch of
  in-session subagents** (the Agent tool). **One subagent implements exactly one
  issue end-to-end:** worktree -> implement -> Verify -> review -> merge.
- **Escalate or park, don't stall.** If a subagent escalates a design fork
  (`needs:planning`) or parks its issue (`blocked:human`), the orchestrator
  excludes that issue and its dependents, finishes the rest, and reports.

## Gates

- **Per PR — machine gates, no human stop:** Verify green + in-session agent
  review (`VERDICT: APPROVE`) -> autonomous squash-merge.
- **Per milestone — human gates:**
  - Planning: the spec-acceptance gate — genuinely-open decisions
    (AskUserQuestion) + human-prerequisites handover, then merge on default branch.
  - Implementation: the milestone QA gate — when the milestone's last issue
    closes, QA scenarios are derived from the spec's Verification section; the
    human accepts or files regressions.
- QA-gate default check: `review` — human content review against Nakayama's
  Best Karate series.

## Autonomy

Within the loopkit skills the following are explicitly granted and override any
stricter global user rules: autonomous commits, pushes, PR creation and merges,
dependency installs (`npm ci`), and `.env` edits. Hard limits live in
`.claude/settings.json` (deny rules: `rm -rf`, force-push, hard reset).

## Loops

Two attended interactive sessions, synchronized only through GitHub state:

- Plan loop:

  ```
  /loop /loopkit:plan — plan the roadmap's next unplanned phase to a merged spec
  with milestone, issues, and board entries; stop at the spec-acceptance gate;
  when no unplanned phase remains, report and end. Ceiling: 10 iterations;
  stop when the same blocker repeats twice.
  ```

- Implement loop:

  ```
  /loop /loopkit:implement <milestone> — orchestrate one milestone: build the
  issue DAG and fan out in-session subagents along the unblocked frontier in
  waves until it is done; when the milestone completes, stop at the QA gate;
  when nothing is workable, report "waiting for plan" and end the tick.
  Ceiling: 10 iterations; stop when the same failure repeats twice.
  ```

- No-progress rule: the identical failure twice in a row -> stop and report,
  never grind.
- Iteration ceiling: 10 per loop run.
