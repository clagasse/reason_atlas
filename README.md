# Reason Atlas

**An interactive field guide and visual constellation to logical fallacies, cognitive biases, eponymous laws, philosophical razors, and mental models.**

🔗 **Live App:** [https://clagasse.github.io/reason_atlas/](https://clagasse.github.io/reason_atlas/)

---

## Overview

**Reason Atlas** unifies five closely connected reasoning traditions into a single searchable, cross-linked reference. Instead of treating logical errors and decision principles as isolated trivia, every entry includes plain-English explanations, formal structure (where applicable), real-world scenarios with toggleable self-test breakdowns, practical antidotes, upstream database links, and typed connections to related concepts.

### Taxonomy (120 Curated Concepts)

| Kind | Count | Focus | Examples |
| :--- | :---: | :--- | :--- |
| **Logical Fallacies** | 32 | Structural or rhetorical flaws that undermine an argument's validity | *Straw Man, Ad Hominem, Motte-and-Bailey, Moving the Goalposts, Texas Sharpshooter, Nirvana Fallacy* |
| **Cognitive Biases** | 28 | Systematic mental shortcuts and blind spots in judgment | *Survivorship Bias, Confirmation Bias, Dunning–Kruger Effect, Loss Aversion, IKEA Effect, Curse of Knowledge* |
| **Laws & Effects** | 28 | Eponymous observations about teams, incentives, and systems | *Law of Triviality (Bikeshedding), The Peter Principle, Goodhart's Law, Cobra Effect, Conway's Law, Simpson's Paradox* |
| **Philosophical Razors** | 12 | Rules of thumb that shave away unlikely explanations or wasted effort | *Occam's Razor, Hanlon's Razor, Hitchens's Razor, The Sagan Standard, Popper's Falsifiability, Einstein's Razor* |
| **Mental Models** | 20 | Reusable frameworks for clear reasoning and decision-making | *Steel Manning, First Principles, Second-Order Thinking, Inversion, Pre-Mortem, OODA Loop, Cynefin Framework* |

---

## Key Features

- **Explorer & Instant Fuzzy Search (`/`)**
  - Client-side `Fuse.js` search matching primary names, colloquial nicknames (e.g., searching `"bikeshedding"` surfaces *Law of Triviality*; `"linda problem"` surfaces *Conjunction Fallacy*), explanations, and scenario text.
  - Filter by **Kind**, **Domain** (*Debate, Organizations, Decision-Making, Statistics, Systems, Everyday*), **Essentials**, and **Saved Bookmarks** (`localStorage`).
  - Switch between **Clean Grid**, **Illustrated Grid** (with custom SVG mechanism schematics), and **Compact List** views.
  - Global **`Ctrl/Cmd + K`** Quick Jump command palette from anywhere in the app.
- **Interactive Constellation Graph (`/graph`)**
  - Zoomable, pannable `d3-force` network connecting all 120 concepts across 272 typed relationship edges (*Psychological Root*, *Counterpart / Antidote*, *Often Confused With*, *Related Concept*).
  - Hover any node to spotlight its 1-hop neighborhood, hover any edge to view the relationship tooltip, filter edges by relation type, or click a node to open its slide-over inspector drawer.
- **Situation Diagnostic Finder (`/diagnose`)**
  - *"What's happening here?"* symptom explorer across 29 real-world scenarios in 5 contexts (*Meetings & Teams*, *Arguments & Media*, *Metrics & Incentives*, *Estimating & Planning*, *Personal Decisions*).
- **Concept Deep-Dive & Self-Test Mode (`/concept/:id`)**
  - Toggle **Self-Test Mode** on real-world examples to hide the analysis and practice diagnosing scenarios yourself first.
  - Direct links to upstream reference databases on every entry.
- **About & Source Databases (`/about`)**
  - Visual taxonomy and domain coverage charts plus direct links to all 16 reference databases and open repositories.

---

## Source Databases & Repositories

Entries and taxonomies are cross-referenced with:
- **Logical Fallacies:** [Your Logical Fallacy Is](https://yourlogicalfallacyis.com/), [Internet Encyclopedia of Philosophy — Fallacies](https://iep.utm.edu/fallacy/), [The Fallacy Files](https://www.fallacyfiles.org/), [Logically Fallacious](https://www.logicallyfallacious.com/), [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/fallacies/)
- **Cognitive Biases:** [The Decision Lab — Biases Index](https://thedecisionlab.com/biases), [Wikipedia — List of Cognitive Biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases), [Your Bias Is](https://yourbias.is/)
- **Laws & Systems:** [dwmkerr/hacker-laws](https://github.com/dwmkerr/hacker-laws), [Wikipedia — List of Eponymous Laws](https://en.wikipedia.org/wiki/List_of_eponymous_laws), [The Jargon File](http://www.catb.org/jargon/)
- **Mental Models & Razors:** [Farnam Street Mental Models](https://fs.blog/mental-models/), [Untools](https://untools.co/), [LessWrong Rationality Wiki](https://www.lesswrong.com/tags/all), [Wikipedia — Philosophical Razor](https://en.wikipedia.org/wiki/Philosophical_razor)

---

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite 6
- **Routing:** `react-router-dom` v7 (with route-based code splitting)
- **Styling:** Tailwind CSS v4 + custom Warm Graphite design tokens
- **Search:** `fuse.js`
- **Graph Layout:** `d3-force` rendered declaratively in SVG
- **Icons:** `lucide-react`
- **Testing & Data Integrity:** `vitest` + `tsx scripts/validate-data.ts`

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server at http://localhost:5173
npm run dev

# Validate dataset integrity (IDs, relation targets, examples, fallacy sources)
npm run validate:data

# Run unit tests
npm test

# Build production bundle
npm run build
```

---

## Project Structure

```text
reason_atlas/
├── .github/workflows/deploy.yml  # Automated GitHub Pages CI/CD pipeline
├── public/                       # PWA manifest, service worker, SPA fallback
├── scripts/
│   └── validate-data.ts          # Dataset schema, graph link & source validator
└── src/
    ├── types/concept.ts          # Unified Concept, Relation, Source & Situation types
    ├── data/
    │   ├── fallacies.ts          # 32 logical fallacies with database citations
    │   ├── biases.ts             # 28 cognitive biases
    │   ├── laws.ts               # 28 eponymous laws, effects & paradoxes
    │   ├── razors.ts             # 12 philosophical razors
    │   ├── mentalModels.ts       # 20 mental models & frameworks
    │   ├── situations.ts         # 29 diagnostic symptom scenarios
    │   └── index.ts              # Lookup maps, relation resolver & graph builder
    ├── lib/
    │   ├── search.ts             # Fuse.js index & multi-facet filter logic
    │   └── __tests__/            # Vitest suite
    ├── components/               # Layout, CommandPalette, ConceptCard, ConceptVisual, ConceptDrawer
    └── pages/                    # ExplorerPage, ConceptPage, GraphPage, DiagnosePage, AboutPage
```
