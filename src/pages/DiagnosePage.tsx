import { useMemo, useState } from 'react';
import {
  Users,
  MessageSquareWarning,
  BarChart3,
  Clock,
  Compass,
  Search,
  Lightbulb,
  ArrowRight,
  X,
} from 'lucide-react';
import {
  DIAGNOSTIC_CATEGORIES,
  DIAGNOSTIC_SITUATIONS,
  getConceptById,
} from '../data';
import type { DiagnosticCategoryId } from '../types/concept';
import { KindBadge } from '../components/KindBadge';
import { ConceptDrawer } from '../components/ConceptDrawer';

interface DiagnosePageProps {
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

const CATEGORY_ICON: Record<DiagnosticCategoryId, typeof Users> = {
  'meetings-teams': Users,
  'arguments-media': MessageSquareWarning,
  'metrics-incentives': BarChart3,
  'estimating-planning': Clock,
  'personal-decisions': Compass,
};

export function DiagnosePage({
  isBookmarked,
  onToggleBookmark,
}: DiagnosePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    DiagnosticCategoryId | 'all'
  >('meetings-teams');
  const [filterText, setFilterText] = useState('');
  const [selectedSituationId, setSelectedSituationId] = useState<string>(
    DIAGNOSTIC_SITUATIONS[0].id
  );
  const [drawerConceptId, setDrawerConceptId] = useState<string | null>(null);

  const visibleSituations = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    return DIAGNOSTIC_SITUATIONS.filter((sit) => {
      if (!q && selectedCategory !== 'all' && sit.category !== selectedCategory) {
        return false;
      }
      if (q) {
        const hay = `${sit.symptom} ${sit.signal} ${sit.quickTip}`.toLowerCase();
        const conceptMatch = sit.conceptIds.some((id) => {
          const c = getConceptById(id);
          return (
            c &&
            (c.name.toLowerCase().includes(q) ||
              c.aliases.some((a) => a.toLowerCase().includes(q)))
          );
        });
        return hay.includes(q) || conceptMatch;
      }
      return true;
    });
  }, [selectedCategory, filterText]);

  const activeSituation =
    visibleSituations.find((s) => s.id === selectedSituationId) ??
    visibleSituations[0] ??
    null;

  const drawerConcept = drawerConceptId
    ? getConceptById(drawerConceptId) ?? null
    : null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-16">
      {/* Header */}
      <section className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Situation Diagnostic Finder
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
          “What’s happening here?”
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
          Recognize a frustrating pattern in real life but don’t know its name? Pick a context or describe the symptom to surface the exact fallacies, biases, laws, and antidotes at play.
        </p>

        {/* Symptom Search */}
        <div className="relative mt-5 max-w-xl">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Describe a symptom (e.g. trivial details, gamed metric, late project, sunk cost)..."
            aria-label="Filter diagnostic symptoms"
            className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] pl-10 pr-9 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]/15"
          />
          {filterText && (
            <button
              type="button"
              onClick={() => setFilterText('')}
              aria-label="Clear symptom search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>

      {/* Category Selector */}
      <section
        aria-label="Context categories"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-8"
      >
        {DIAGNOSTIC_CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICON[cat.id];
          const active = !filterText.trim() && selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setFilterText('');
                setSelectedCategory(cat.id);
                const first = DIAGNOSTIC_SITUATIONS.find(
                  (s) => s.category === cat.id
                );
                if (first) setSelectedSituationId(first.id);
              }}
              aria-pressed={active}
              className={`rounded-xl border p-4 text-left transition-all cursor-pointer ${
                active
                  ? 'border-[var(--text-primary)] bg-[var(--bg-surface)] shadow-sm ring-1 ring-[var(--text-primary)]/10'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]/65 hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon
                  className={`h-4.5 w-4.5 ${
                    active
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-muted)]'
                  }`}
                />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  {
                    DIAGNOSTIC_SITUATIONS.filter((s) => s.category === cat.id)
                      .length
                  }
                </span>
              </div>
              <div className="font-serif text-base font-semibold text-[var(--text-primary)]">
                {cat.title}
              </div>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)] line-clamp-2">
                {cat.subtitle}
              </p>
            </button>
          );
        })}
      </section>

      {/* Two-Column Diagnostic Workspace */}
      {visibleSituations.length === 0 ? (
        <div className="atlas-surface rounded-2xl p-12 text-center">
          <p className="font-serif text-xl font-semibold">
            No matching scenarios for “{filterText}”
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Try clearing the search box to browse all 24 real-world patterns by context.
          </p>
          <button
            type="button"
            onClick={() => setFilterText('')}
            className="mt-4 rounded-lg bg-[var(--text-primary)] px-4 py-2 text-xs font-medium text-[var(--bg-canvas)] cursor-pointer"
          >
            Show All Patterns
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Symptoms List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] px-1 mb-2">
              Select a matching symptom ({visibleSituations.length})
            </div>
            {visibleSituations.map((sit) => {
              const selected = activeSituation?.id === sit.id;
              return (
                <button
                  key={sit.id}
                  type="button"
                  onClick={() => setSelectedSituationId(sit.id)}
                  aria-pressed={selected}
                  className={`w-full rounded-xl border p-4 text-left transition-all cursor-pointer ${
                    selected
                      ? 'border-[var(--text-primary)] bg-[var(--bg-surface)] shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                    {sit.symptom}
                  </p>
                  <p className="mt-1.5 text-xs text-[var(--text-muted)] line-clamp-2">
                    {sit.signal}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Diagnosis & Matched Concepts */}
          {activeSituation && (
            <div className="lg:col-span-7 atlas-surface rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                Diagnostic Match
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] leading-snug">
                {activeSituation.symptom}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                <strong className="font-medium text-[var(--text-primary)]">
                  Telltale signal:{' '}
                </strong>
                {activeSituation.signal}
              </p>

              {/* Quick Tip */}
              <div className="mt-5 rounded-xl border border-[var(--kind-razor-border)] bg-[var(--kind-razor-bg)] p-4">
                <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--kind-razor)] mb-1">
                  <Lightbulb className="h-3.5 w-3.5" />
                  Immediate Move
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {activeSituation.quickTip}
                </p>
              </div>

              {/* Matching Concept Cards */}
              <div className="mt-6">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Likely Concepts & Antidotes ({activeSituation.conceptIds.length})
                </div>
                <div className="space-y-3">
                  {activeSituation.conceptIds.map((cid) => {
                    const concept = getConceptById(cid);
                    if (!concept) return null;
                    return (
                      <button
                        key={cid}
                        type="button"
                        onClick={() => setDrawerConceptId(cid)}
                        className="w-full group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-4 text-left transition-all hover:border-[var(--border-strong)] hover:shadow-xs cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:underline decoration-[var(--border-strong)] underline-offset-4">
                                {concept.name}
                              </span>
                              <KindBadge kind={concept.kind} short />
                            </div>
                            {concept.aliases.length > 0 && (
                              <p className="text-[11px] text-[var(--text-muted)] mb-1">
                                Also: {concept.aliases.slice(0, 2).join(' · ')}
                              </p>
                            )}
                            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                              {concept.oneLiner}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Slide-over Inspector */}
      <ConceptDrawer
        concept={drawerConcept}
        onClose={() => setDrawerConceptId(null)}
        onSelectConcept={(id) => setDrawerConceptId(id)}
        isBookmarked={isBookmarked}
        onToggleBookmark={onToggleBookmark}
      />
    </div>
  );
}
