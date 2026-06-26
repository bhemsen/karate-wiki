# Vision

> Normative. What and why only — no implementation detail. Keep to ~1 page;
> this file is permanently loaded via CLAUDE.md. No status marker — foundation
> docs carry none.

## Problem

Karateka (beginners through Dan holders) in German-speaking countries lack a
structured, authoritative online reference for JKA Shotokan in German. Existing
resources are either English-only, extremely shallow (name + movement count
only), or fragmented dojo pages without pedagogical structure. Content errors in
the wiki directly undermine learning in a dojo context.

## Why now

The wiki is already actively used in dojo instruction — inaccurate content
corrupts learning. New features (Embusen diagrams, step-by-step sequences,
technique illustrations) are being built on top of the content layer, which
requires a verified, stable content base before the feature work can be trusted.

## Target users

**Primary:** Karateka of all Kyu levels in a dojo context — students using the
wiki to reinforce instruction.

**Secondary:** Self-directed practitioners and dojo instructors referencing
technique details, examination requirements, and terminology.

## Goal

A complete, German-language JKA Shotokan reference covering Kata (26), Kihon
(17 techniques), Stände (12 Dachi), Gurtprüfungen (9. Kyu–1. Dan), and Glossar
in pedagogically clear, factually correct form — deployed as a static website,
usable without login, sourced to the JKA standard (Nakayama's Best Karate
series).

## USP / differentiation

No other German-language digital resource combines structured data (TypeScript),
full five-area coverage, and dojo-pedagogical focus at this depth. See
`docs/prior-art.md` for the per-source differentiation evidence and the harvest
of what to adopt (kiai-point fields from risingsun.ie; Nakayama as the
correctness authority).

## Success criteria

- All 26 kata descriptions validated against Nakayama's Best Karate — zero
  factual errors
- All Kihon techniques correctly categorized (Tsuki / Uke / Geri / Uchi) and
  Kyu-assigned
- All 12 Dachi include correct weight distribution and execution detail
- Gurtprüfung requirements complete and accurate per JKA standard
- Glossar contains ≥ 50 entries with correct Japanese–German translations

## Scope

### In

- Kata: all 26 JKA Shotokan kata (descriptions, movement count, difficulty,
  group, first examination)
- Kihon: 17 fundamental techniques (Tsuki, Uke, Geri, Uchi)
- Stände: 12 Dachi with weight distribution and application context
- Gurtprüfungen: 9. Kyu through 1. Dan per JKA standard
- Glossar: Japanese terminology from technique, philosophy, and dojo etiquette
- Embusen diagrams: visual movement patterns per kata (optional enhancement)

### Out

- Video content
- Competition databases or tournament results
- Training trackers or progress logs
- Non-JKA Shotokan variants
- Other karate styles

## Non-goals

- CMS or user-editable content — complexity outweighs benefit for a reference site
- User accounts or login — the site is a public read-only reference
- Community contributions — editorial control is essential for correctness
