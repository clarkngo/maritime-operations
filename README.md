# Maritime Operations

A working reference to how a vessel and its cargo actually move through Washington State / Puget Sound maritime operations — companion to two other maritime sites:

- **[MOF-101 — Maritime Operations & Industry Fundamentals](https://clarkngo.github.io/maritime-fundamentals/)**
- **[MOT-101 — Maritime Operational Technology Security](https://clarkngo.github.io/maritime-ot/)**
- **[Maritime Atlas](https://clarkngo.github.io/maritime-atlas/)** — visual reference gallery for both courses

**Live site:** [clarkngo.github.io/maritime-operations](https://clarkngo.github.io/maritime-operations/)

## What this is

Maritime Operations is a **single-page reference**, not a course. It scopes the abstract maritime concepts from MOF-101/MOT-101 down to one concrete region — Puget Sound — across four sections:

0. **History** — an 11-point sourced timeline from Coast Salish canoe routes through the Mosquito Fleet era, the founding of the Ports of Seattle (1911) and Tacoma (1918), the 1935 Pilotage Act, Washington State Ferries (1951), the first container ship out of Puget Sound (1964), VTS Puget Sound (1972), and the 2015 formation of the Northwest Seaport Alliance. Each entry links its primary source (HistoryLink.org, Puget Sound Pilots, USCG Navigation Center, etc.).
1. **Process Flow** — the commercial/regulatory sequence a vessel follows (arrival → pilotage → berth assignment → CBP → cargo handling → departure), alongside the parallel OT/ICS flow (bridge/ECDIS → engine control → port terminal systems) that runs underneath it. Icon-illustrated, animated on scroll.
2. **Authority Structure** — how USCG Sector Puget Sound, the WA Board of Pilotage Commissioners, Puget Sound Pilots, Port of Seattle, Port of Tacoma, the Northwest Seaport Alliance (NWSA), and Washington State Ferries actually relate — regulatory vs. operational-bridge vs. commercial/public operator.
3. **Career Map** — six roles (deck/engine officers, marine pilots, port operations, OT/ICS security engineers, logistics & customs brokers), each expanded into a rung-by-rung career ladder: the entry point, the certifications and sea-time/experience that unlock the next rung, and where the climb tops out. Sourced against actual USCG license, Puget Sound Pilots, CBP broker exam, and GIAC/GICSP requirements.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | The full single-page site (all four sections) |
| `css/style.css` | Dark-navy / cyan visual identity, off-white content cards, scroll-reveal + flow animations |
| `js/script.js` | Scroll-spy nav highlighting + IntersectionObserver scroll-reveal |

## Author

Clark Ngo

## Deploy

GitHub Pages via `.github/workflows/static.yml` — pushes to `main` deploy the repo root.
