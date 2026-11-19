import { Link } from 'react-router-dom';
import {
  Database,
  ExternalLink,
  Compass,
  Network,
  Stethoscope,
  Library,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import {
  ALL_CONCEPTS,
  DIAGNOSTIC_SITUATIONS,
  FALLACIES,
  buildConceptGraph,
  getCountsByKind,
} from '../data';
import {
  DOMAIN_META,
  DOMAIN_ORDER,
  KIND_META,
  KIND_ORDER,
  type ConceptKind,
} from '../types/concept';
import { KindBadge } from '../components/KindBadge';

interface DatabaseSourceGroup {
  id: string;
  title: string;
  subtitle: string;
  items: {
    site: string;
    domain: string;
    licenseOrAccess: string;
    description: string;
    url: string;
  }[];
}

const DATABASE_SOURCES: DatabaseSourceGroup[] = [
  {
    id: 'fallacy-databases',
    title: 'Logical Fallacy Websites & Databases',
    subtitle:
      'Every logical fallacy entry in Reason Atlas links directly to its corresponding entry in these online fallacy databases.',
    items: [
      {
        site: 'Your Logical Fallacy Is',
        domain: 'yourlogicalfallacyis.com',
        licenseOrAccess: 'Creative Commons (CC BY-NC 4.0)',
        description:
          'Interactive open reference database by The School of Thought cataloging core informal fallacies (Strawman, Ad Hominem, Black-or-White, Slippery Slope, Texas Sharpshooter, Tu Quoque, Burden of Proof, Gambler’s Fallacy, No True Scotsman, and more).',
        url: 'https://yourlogicalfallacyis.com/',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP) — Fallacies Database',
        domain: 'iep.utm.edu/fallacy',
        licenseOrAccess: 'Peer-Reviewed Open Access (ISSN 2161-0002)',
        description:
          'Comprehensive encyclopedic database maintained by Bradley Dowden indexing over 200 formal and informal fallacies with logical forms and counter-examples.',
        url: 'https://iep.utm.edu/fallacy/',
      },
      {
        site: 'The Fallacy Files',
        domain: 'fallacyfiles.org',
        licenseOrAccess: 'Open Web Taxonomy Database',
        description:
          'Gary N. Curtis’s structured online database of formal and informal fallacies, taxonomy trees, and real-world media examples.',
        url: 'https://www.fallacyfiles.org/',
      },
      {
        site: 'Logically Fallacious',
        domain: 'logicallyfallacious.com',
        licenseOrAccess: 'Online Reference Database',
        description:
          'Searchable web database of 300+ logical fallacies with formal logical templates (`X → Y`) and everyday dialogues.',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/search',
      },
      {
        site: 'Stanford Encyclopedia of Philosophy (SEP)',
        domain: 'plato.stanford.edu/entries/fallacies',
        licenseOrAccess: 'Stanford Open-Access Academic Database',
        description:
          'Peer-reviewed philosophical database covering classical Aristotelian fallacies, Lockean ad-arguments, and modern argumentation theory.',
        url: 'https://plato.stanford.edu/entries/fallacies/',
      },
      {
        site: 'Wikipedia — List of Fallacies Database',
        domain: 'en.wikipedia.org/wiki/List_of_fallacies',
        licenseOrAccess: 'CC BY-SA 4.0 Open Encyclopedia',
        description:
          'Structured index of formal propositional, syllogistic, statistical, and informal red-herring fallacies.',
        url: 'https://en.wikipedia.org/wiki/List_of_fallacies',
      },
    ],
  },
  {
    id: 'bias-databases',
    title: 'Cognitive Bias Websites & Indexes',
    subtitle:
      'Behavioral science databases and structured taxonomies used for cognitive bias entries.',
    items: [
      {
        site: 'The Decision Lab — Biases Index',
        domain: 'thedecisionlab.com/biases',
        licenseOrAccess: 'Behavioral Science Reference Database',
        description:
          'Online database of cognitive biases and behavioral heuristics (Anchoring, Availability Heuristic, Confirmation Bias, Dunning–Kruger, Framing Effect, Sunk Cost, IKEA Effect, Endowment Effect, Peak–End Rule, and more).',
        url: 'https://thedecisionlab.com/biases',
      },
      {
        site: 'Wikipedia — List of Cognitive Biases & Cognitive Bias Codex',
        domain: 'en.wikipedia.org/wiki/List_of_cognitive_biases',
        licenseOrAccess: 'CC BY-SA 4.0 Open Database',
        description:
          'Crowd-curated database and Buster Benson / John Manoogian III’s 4-quadrant Cognitive Bias Codex organizing 180+ biases by information overload, lack of meaning, need to act fast, and memory limits.',
        url: 'https://en.wikipedia.org/wiki/List_of_cognitive_biases',
      },
      {
        site: 'Your Bias Is',
        domain: 'yourbias.is',
        licenseOrAccess: 'Creative Commons (CC BY-NC 4.0)',
        description:
          'Companion database to Your Logical Fallacy Is covering everyday decision-making and social biases.',
        url: 'https://yourbias.is/',
      },
    ],
  },
  {
    id: 'laws-databases',
    title: 'Eponymous Laws & Systems Repositories',
    subtitle:
      'Open-source developer repositories and catalogs of organizational, systems, and statistical laws.',
    items: [
      {
        site: 'Hacker Laws Repository (dwmkerr/hacker-laws)',
        domain: 'github.com/dwmkerr/hacker-laws',
        licenseOrAccess: 'CC BY-SA 4.0 Open-Source GitHub Repo',
        description:
          'Community-maintained GitHub repository cataloging Laws, Theories, Principles, and Patterns in engineering and organizations (Law of Triviality / Bikeshedding, Parkinson’s Law, Peter Principle, Conway’s Law, Brooks’s Law, Goodhart’s Law, Gall’s Law, Postel’s Law, Linus’s Law, Amara’s Law, and more).',
        url: 'https://github.com/dwmkerr/hacker-laws',
      },
      {
        site: 'Wikipedia — List of Eponymous Laws',
        domain: 'en.wikipedia.org/wiki/List_of_eponymous_laws',
        licenseOrAccess: 'CC BY-SA 4.0 Open Database',
        description:
          'Index of named adages, statistical paradoxes (Simpson’s Paradox, Berkson’s Paradox, Jevons Paradox), and systems observations.',
        url: 'https://en.wikipedia.org/wiki/List_of_eponymous_laws',
      },
      {
        site: 'The Jargon File (Cathedral & Bazaar Archive)',
        domain: 'catb.org/jargon',
        licenseOrAccess: 'Public Domain Lexicon Database',
        description:
          'Historical hacker culture lexicon documenting software laws such as Zawinski’s Law, Brooks’s Law, and Sturgeon’s Revelation.',
        url: 'http://www.catb.org/jargon/',
      },
    ],
  },
  {
    id: 'models-razors-databases',
    title: 'Mental Models & Philosophical Razors Directories',
    subtitle:
      'Curated directories of decision-making frameworks, systems tools, and epistemological razors.',
    items: [
      {
        site: 'Farnam Street — Mental Models Directory',
        domain: 'fs.blog/mental-models',
        licenseOrAccess: 'Online Mental Models Directory',
        description:
          'Curated index of multidisciplinary mental models across general thinking, physics, systems, and numeracy (First Principles, Second-Order Thinking, Inversion, Map Is Not the Territory, Circle of Competence, Margin of Safety, Hanlon’s Razor, Occam’s Razor).',
        url: 'https://fs.blog/mental-models/',
      },
      {
        site: 'Untools — Tools for Better Thinking',
        domain: 'untools.co',
        licenseOrAccess: 'Interactive Thinking Frameworks Directory',
        description:
          'Structured guide to decision-making and systems models including the Cynefin Framework, OODA Loop, Second-Order Thinking, and Inversion.',
        url: 'https://untools.co/',
      },
      {
        site: 'LessWrong Rationality Wiki & Concepts Portal',
        domain: 'lesswrong.com/tags/all',
        licenseOrAccess: 'Open Rationality Wiki Database',
        description:
          'Community wiki documenting epistemic tools including Steel Manning, Motte-and-Bailey, Bayesian Updating, Pre-Mortems, and Chesterton’s Fence.',
        url: 'https://www.lesswrong.com/tags/all',
      },
      {
        site: 'Wikipedia — Philosophical Razor Index',
        domain: 'en.wikipedia.org/wiki/Philosophical_razor',
        licenseOrAccess: 'CC BY-SA 4.0 Open Database',
        description:
          'Reference index of Occam’s Razor, Hanlon’s Razor, Hitchens’s Razor, Sagan Standard, Popper’s Falsifiability, Alder’s Razor, Grice’s Razor, and Hume’s Razor.',
        url: 'https://en.wikipedia.org/wiki/Philosophical_razor',
      },
    ],
  },
];

export function AboutPage() {
  const counts = getCountsByKind();
  const { edges } = buildConceptGraph();
  const sourcedFallaciesCount = FALLACIES.filter(
    (f) => f.sources && f.sources.length > 0
  ).length;

  const domainBreakdown = DOMAIN_ORDER.map((domain) => {
    const matching = ALL_CONCEPTS.filter((c) => c.domains.includes(domain));
    const byKind = KIND_ORDER.reduce(
      (acc, k) => {
        acc[k] = matching.filter((c) => c.kind === k).length;
        return acc;
      },
      {} as Record<ConceptKind, number>
    );
    return {
      domain,
      label: DOMAIN_META[domain].label,
      total: matching.length,
      byKind,
    };
  }).sort((a, b) => b.total - a.total);
  const maxDomainTotal = Math.max(...domainBreakdown.map((d) => d.total), 1);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8 pb-16">
      {/* Editorial Intro */}
      <header className="atlas-surface rounded-2xl p-6 sm:p-10 mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-4">
          <Library className="h-3.5 w-3.5" />
          About & Source Databases
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12]">
          Where Reason Atlas pulls its concepts, definitions, and taxonomies.
        </h1>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-3xl">
          <strong>Reason Atlas</strong> synthesizes entries from open-access logic encyclopedias, fallacy & cognitive bias databases, open-source engineering law repositories, and mental-model directories into a single cross-linked graph. Every concept page—and every logical fallacy card—links directly back to the exact reference websites and online databases where it is indexed.
        </p>

        {/* Live Stats Strip */}
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--border-subtle)]">
          <div className="rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-3.5">
            <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              {ALL_CONCEPTS.length}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">
              Curated concepts
            </div>
          </div>
          <div className="rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-3.5">
            <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              {edges.length}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">
              Typed graph links
            </div>
          </div>
          <div className="rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-3.5">
            <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              {sourcedFallaciesCount}/{FALLACIES.length}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">
              Fallacies linked to databases
            </div>
          </div>
          <div className="rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-3.5">
            <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              {DIAGNOSTIC_SITUATIONS.length}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">
              Diagnostic scenarios
            </div>
          </div>
        </div>
      </header>

      {/* Per-Fallacy Database Links Callout */}
      <section className="mb-10 rounded-2xl border border-[var(--kind-razor-border)] bg-[var(--kind-razor-bg)] p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-[var(--kind-razor)] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
              Direct Database Links on Every Logical Fallacy
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
              All {FALLACIES.length} logical fallacies include direct entry links to the specific online databases they were pulled from—such as <strong>Your Logical Fallacy Is</strong> (<code>yourlogicalfallacyis.com</code>), the <strong>Internet Encyclopedia of Philosophy Fallacies Database</strong> (<code>iep.utm.edu/fallacy</code>), <strong>The Fallacy Files</strong> (<code>fallacyfiles.org</code>), <strong>Logically Fallacious</strong> (<code>logicallyfallacious.com</code>), and <strong>The Decision Lab</strong> (<code>thedecisionlab.com</code>). You can inspect these links on any concept detail page or in the slide-over graph drawer.
            </p>
          </div>
        </div>
      </section>

      {/* Reference Websites & Databases Directory */}
      <section className="space-y-9 mb-12">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
            Source Websites, Databases & Open Repositories
          </h2>
          <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
            Click any database below to browse the upstream catalog or open-source repository:
          </p>
        </div>

        {DATABASE_SOURCES.map((group) => (
          <div key={group.id} className="space-y-3.5">
            <div className="border-b border-[var(--border-subtle)] pb-2">
              <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
                {group.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                {group.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {group.items.map((item) => (
                <a
                  key={item.site}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atlas-surface group rounded-xl p-4 transition-all hover:border-[var(--border-strong)] hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 min-w-0">
                        <Database className="h-4 w-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
                        <span className="font-serif text-base font-semibold text-[var(--text-primary)] group-hover:underline decoration-[var(--border-strong)] underline-offset-4 leading-snug">
                          {item.site}
                        </span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0 mt-1" />
                    </div>

                    <div className="mt-2 pl-6 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]">
                        <Globe className="h-2.5 w-2.5" />
                        {item.domain}
                      </span>
                      <span className="rounded-md bg-[var(--bg-canvas)] border border-[var(--border-subtle)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                        {item.licenseOrAccess}
                      </span>
                    </div>

                    <p className="mt-2.5 pl-6 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 5-Kind Taxonomy & Visual Domain Breakdown */}
      <section className="mb-12 space-y-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mb-2">
            Visual Taxonomy & Domain Breakdown
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            How the {ALL_CONCEPTS.length} concepts are distributed across the five reasoning taxonomies and six real-world domains:
          </p>
        </div>

        {/* Stacked Taxonomy Proportion Bar */}
        <div className="atlas-surface rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Composition by Concept Kind ({ALL_CONCEPTS.length} Total)
            </span>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              100% Indexed
            </span>
          </div>

          <div
            className="flex h-4 w-full overflow-hidden rounded-full bg-[var(--bg-surface-muted)] p-0.5 gap-0.5"
            role="img"
            aria-label="Stacked proportion bar of concept kinds"
          >
            {KIND_ORDER.map((kind) => {
              const count = counts[kind];
              const pct = (count / ALL_CONCEPTS.length) * 100;
              return (
                <div
                  key={kind}
                  style={{
                    width: `${pct}%`,
                    backgroundColor: KIND_META[kind].accentVar,
                  }}
                  title={`${KIND_META[kind].plural}: ${count} (${Math.round(pct)}%)`}
                  className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                />
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {KIND_ORDER.map((kind) => {
              const meta = KIND_META[kind];
              const count = counts[kind];
              const pct = Math.round((count / ALL_CONCEPTS.length) * 100);
              return (
                <div
                  key={kind}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-2.5"
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: meta.accentVar }}
                    />
                    <span className="font-mono text-[11px] font-semibold text-[var(--text-primary)] truncate">
                      {meta.shortLabel}
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="font-serif text-lg font-bold text-[var(--text-primary)]">
                      {count}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      {pct}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Domain Coverage Segmented Bar Chart */}
        <div className="atlas-surface rounded-2xl p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Coverage Across Real-World Domains (Multi-Tag Distribution)
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              Segmented by concept kind
            </span>
          </div>

          <div className="space-y-3.5">
            {domainBreakdown.map((row) => {
              const widthPct = (row.total / maxDomainTotal) * 100;
              return (
                <div key={row.domain}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-[var(--text-primary)]">
                      {row.label}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      {row.total} concepts
                    </span>
                  </div>
                  <div className="w-full rounded-full bg-[var(--bg-surface-muted)] h-3 overflow-hidden p-0.5">
                    <div
                      className="flex h-full rounded-full overflow-hidden gap-[1px]"
                      style={{ width: `${widthPct}%` }}
                    >
                      {KIND_ORDER.map((kind) => {
                        const kCount = row.byKind[kind];
                        if (kCount === 0) return null;
                        const segPct = (kCount / row.total) * 100;
                        return (
                          <div
                            key={kind}
                            style={{
                              width: `${segPct}%`,
                              backgroundColor: KIND_META[kind].accentVar,
                            }}
                            title={`${row.label} · ${KIND_META[kind].plural}: ${kCount}`}
                            className="h-full"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {KIND_ORDER.map((kind) => {
            const meta = KIND_META[kind];
            return (
              <div
                key={kind}
                className="atlas-surface rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <KindBadge kind={kind} size="md" />
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {counts[kind]} entries
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {meta.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Navigation Footer CTA */}
      <section className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">
          Ready to explore? Jump back into the catalog, graph, or situation finder.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--text-primary)] px-3.5 py-2 text-xs font-medium text-[var(--bg-canvas)] hover:opacity-90"
          >
            <Compass className="h-3.5 w-3.5" />
            Explorer
          </Link>
          <Link
            to="/graph"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)]"
          >
            <Network className="h-3.5 w-3.5" />
            Constellation Graph
          </Link>
          <Link
            to="/diagnose"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)]"
          >
            <Stethoscope className="h-3.5 w-3.5" />
            Situation Finder
          </Link>
        </div>
      </section>
    </div>
  );
}
