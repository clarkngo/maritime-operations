# Maritime Operations

A working reference to how a vessel and its cargo actually move through Washington State / Puget Sound maritime operations — companion to two other maritime sites:

- **[MOF-101 — Maritime Operations & Industry Fundamentals](https://clarkngo.github.io/maritime-fundamentals/)**
- **[MOT-101 — Maritime Operational Technology Security](https://clarkngo.github.io/maritime-ot/)**
- **[Maritime Atlas](https://clarkngo.github.io/maritime-atlas/)** — visual reference gallery for both courses

**Live site:** [clarkngo.github.io/maritime-operations](https://clarkngo.github.io/maritime-operations/)

## What this is

Maritime Operations is a **single-page reference**, not a course. It scopes the abstract maritime concepts from MOF-101/MOT-101 down to one concrete region — Puget Sound — across three sections:

1. **Process Flow** — the commercial/regulatory sequence a vessel follows (arrival → pilotage → berth assignment → CBP → cargo handling → departure), alongside the parallel OT/ICS flow (bridge/ECDIS → engine control → port terminal systems) that runs underneath it.
2. **Authority Structure** — how USCG Sector Puget Sound, the WA Board of Pilotage Commissioners, Puget Sound Pilots, Port of Seattle, Port of Tacoma, the Northwest Seaport Alliance (NWSA), and Washington State Ferries actually relate — regulatory vs. operational-bridge vs. commercial/public operator.
3. **Career Map** — deck/engine officers, marine pilots, port operations, OT/ICS security engineers, and logistics & customs brokers, each mapped back to where they sit in the process flow.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | The full single-page site (all three sections) |
| `css/style.css` | Dark-navy / cyan visual identity, off-white content cards |
| `js/script.js` | Scroll-spy highlighting for the section sub-nav |

## Author

Clark Ngo

## Deploy

GitHub Pages via `.github/workflows/static.yml` — pushes to `main` deploy the repo root.
