import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shuffle,
  Eye,
  EyeOff,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  FileQuestion,
} from 'lucide-react';
import { ALL_CONCEPTS } from '../data';
import {
  DOMAIN_META,
  KIND_META,
  KIND_ORDER,
  type Concept,
  type ConceptKind,
} from '../types/concept';
import { KindBadge } from '../components/KindBadge';

export type RecallMaskMode = 'hide-name' | 'hide-description' | 'show-all';

interface RecallPageProps {
  bookmarkedIds: ReadonlySet<string>;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

const ACTIVE_KIND_PILL: Record<ConceptKind, string> = {
  fallacy: 'kind-pill-fallacy',
  bias: 'kind-pill-bias',
  law: 'kind-pill-law',
  razor: 'kind-pill-razor',
  'mental-model': 'kind-pill-mental-model',
};

/**
 * Redacts the concept's name and aliases from scenario text while the name is hidden.
 */
function redactConceptTerms(text: string, concept: Concept): string {
  const terms = [concept.name, ...concept.aliases]
    .map((t) => t.trim())
    .filter((t) => t.length >= 4)
    .sort((a, b) => b.length - a.length);

  let output = text;
  for (const term of terms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    output = output.replace(new RegExp(escaped, 'gi'), '[•••]');
  }
  return output;
}

export function RecallPage({
  bookmarkedIds,
  isBookmarked,
  onToggleBookmark,
}: RecallPageProps) {
  const [maskMode, setMaskMode] = useState<RecallMaskMode>('hide-name');
  const [revealed, setRevealed] = useState(false);
  const [selectedKinds, setSelectedKinds] = useState<ConceptKind[]>([]);
  const [onlyEssentials, setOnlyEssentials] = useState(false);
  const [onlySaved, setOnlySaved] = useState(false);
  const [seenIds, setSeenIds] = useState<string[]>([]);
  const [reviewedCount, setReviewedCount] = useState(0);

  const pool = useMemo(() => {
    return ALL_CONCEPTS.filter((c) => {
      if (selectedKinds.length > 0 && !selectedKinds.includes(c.kind)) {
        return false;
      }
      if (onlyEssentials && c.tier !== 'essential') {
        return false;
      }
      if (onlySaved && !bookmarkedIds.has(c.id)) {
        return false;
      }
      return true;
    });
  }, [selectedKinds, onlyEssentials, onlySaved, bookmarkedIds]);

  const [currentId, setCurrentId] = useState<string>(() => {
    const initial =
      ALL_CONCEPTS[Math.floor(Math.random() * ALL_CONCEPTS.length)];
    return initial.id;
  });

  const currentConcept = useMemo(() => {
    return (
      pool.find((c) => c.id === currentId) ??
      pool[0] ??
      ALL_CONCEPTS[0]
    );
  }, [pool, currentId]);

  const drawRandom = useCallback(() => {
    if (pool.length === 0) return;
    if (pool.length === 1) {
      setCurrentId(pool[0].id);
      setRevealed(maskMode === 'show-all');
      return;
    }

    const unseen = pool.filter(
      (c) => c.id !== currentConcept.id && !seenIds.includes(c.id)
    );
    const candidates =
      unseen.length > 0
        ? unseen
        : pool.filter((c) => c.id !== currentConcept.id);

    const next = candidates[Math.floor(Math.random() * candidates.length)];
    setCurrentId(next.id);
    setSeenIds((prev) =>
      unseen.length > 0 ? [...prev, next.id] : [next.id]
    );
    setRevealed(maskMode === 'show-all');
    setReviewedCount((n) => n + 1);
  }, [pool, currentConcept.id, seenIds, maskMode]);

  // Reset reveal state when switching mask modes
  const handleSelectMaskMode = (mode: RecallMaskMode) => {
    setMaskMode(mode);
    setRevealed(mode === 'show-all');
  };

  // Ensure currentId belongs to pool when filters change
  useEffect(() => {
    if (pool.length > 0 && !pool.some((c) => c.id === currentId)) {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      setCurrentId(pick.id);
      setRevealed(maskMode === 'show-all');
    }
  }, [pool, currentId, maskMode]);

  // Keyboard shortcuts: Space to reveal/hide, ArrowRight / N for next random
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.code === 'Space' && maskMode !== 'show-all') {
        e.preventDefault();
        setRevealed((r) => !r);
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
        e.preventDefault();
        drawRandom();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [maskMode, drawRandom]);

  const toggleKind = (kind: ConceptKind) => {
    setSelectedKinds((prev) =>
      prev.includes(kind) ? prev.filter((k) => k !== kind) : [...prev, kind]
    );
  };

  const nameHidden = maskMode === 'hide-name' && !revealed;
  const descriptionHidden = maskMode === 'hide-description' && !revealed;
  const bookmarked = isBookmarked(currentConcept.id);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 pb-16">
      {/* Header & Recall Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Random Recall
          </h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Draw a random concept and hide either its name or its description to test active recall.
          </p>
        </div>

        {/* 3-Mode Mask Selector */}
        <div
          className="inline-flex rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1 self-start sm:self-auto"
          role="group"
          aria-label="Recall test mode"
        >
          <button
            type="button"
            onClick={() => handleSelectMaskMode('hide-name')}
            aria-pressed={maskMode === 'hide-name'}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              maskMode === 'hide-name'
                ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Hide Name
          </button>
          <button
            type="button"
            onClick={() => handleSelectMaskMode('hide-description')}
            aria-pressed={maskMode === 'hide-description'}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              maskMode === 'hide-description'
                ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <FileQuestion className="h-3.5 w-3.5" />
            Hide Description
          </button>
          <button
            type="button"
            onClick={() => handleSelectMaskMode('show-all')}
            aria-pressed={maskMode === 'show-all'}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              maskMode === 'show-all'
                ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            Show All
          </button>
        </div>
      </div>

      {/* Deck Filters */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[var(--border-subtle)]">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedKinds([])}
            className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
              selectedKinds.length === 0
                ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
            }`}
          >
            All ({ALL_CONCEPTS.length})
          </button>
          {KIND_ORDER.map((kind) => {
            const meta = KIND_META[kind];
            const active = selectedKinds.includes(kind);
            return (
              <button
                key={kind}
                type="button"
                onClick={() => toggleKind(kind)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  active
                    ? ACTIVE_KIND_PILL[kind]
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: meta.accentVar }}
                />
                {meta.shortLabel}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOnlyEssentials((e) => !e)}
            aria-pressed={onlyEssentials}
            className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
              onlyEssentials
                ? 'border-[var(--border-strong)] bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            Essentials
          </button>

          {bookmarkedIds.size > 0 && (
            <button
              type="button"
              onClick={() => setOnlySaved((s) => !s)}
              aria-pressed={onlySaved}
              className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                onlySaved
                  ? 'border-[var(--kind-bias-border)] bg-[var(--kind-bias-bg)] text-[var(--kind-bias)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
              }`}
            >
              <Bookmark className="h-3 w-3 fill-current" />
              Saved ({bookmarkedIds.size})
            </button>
          )}
        </div>
      </div>

      {pool.length === 0 ? (
        <div className="atlas-surface rounded-2xl p-12 text-center">
          <p className="font-serif text-xl font-semibold">
            No concepts match the active deck filters
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedKinds([]);
              setOnlyEssentials(false);
              setOnlySaved(false);
            }}
            className="mt-4 rounded-lg bg-[var(--text-primary)] px-4 py-2 text-xs font-medium text-[var(--bg-canvas)] cursor-pointer"
          >
            Reset Deck Filters
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Main Recall Card */}
          <article className="atlas-surface rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* Top Meta Row */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <KindBadge kind={currentConcept.kind} size="md" />
                {currentConcept.domains.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
                  >
                    {DOMAIN_META[d].label}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onToggleBookmark(currentConcept.id)}
                  aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark concept'}
                  aria-pressed={bookmarked}
                  className={`rounded-lg p-2 transition-colors cursor-pointer ${
                    bookmarked
                      ? 'text-[var(--kind-bias)] bg-[var(--kind-bias-bg)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)]'
                  }`}
                >
                  <Bookmark
                    className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`}
                  />
                </button>
                {!nameHidden && (
                  <Link
                    to={`/concept/${currentConcept.slug}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    Full Entry
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>

            {/* Concept Name Section (Hidden or Visible) */}
            <div className="mb-6">
              {nameHidden ? (
                <button
                  type="button"
                  onClick={() => setRevealed(true)}
                  className="w-full rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-canvas)]/70 px-5 py-6 text-left hover:border-[var(--text-secondary)] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                        Recall Prompt · Guess the Concept
                      </div>
                      <div className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                        What is the name of this {KIND_META[currentConcept.kind].label.toLowerCase()}?
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] shrink-0">
                      <Eye className="h-3.5 w-3.5" />
                      Reveal Name
                    </span>
                  </div>
                </button>
              ) : (
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
                    {currentConcept.name}
                  </h2>
                  {currentConcept.aliases.length > 0 && (
                    <p className="mt-1.5 text-xs text-[var(--text-muted)]">
                      Also known as: {currentConcept.aliases.join(' · ')}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Concept Description Section (Hidden or Visible) */}
            {descriptionHidden ? (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="w-full rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-canvas)]/70 px-5 py-10 text-left hover:border-[var(--text-secondary)] transition-colors cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      Recall Prompt · Define & Explain
                    </div>
                    <div className="mt-1.5 font-serif text-lg sm:text-xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                      In your own words, what does{' '}
                      <strong className="text-[var(--text-primary)]">
                        {currentConcept.name}
                      </strong>{' '}
                      mean, and how do you counter or apply it?
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-surface-muted)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] shrink-0 self-start sm:self-center">
                    <Eye className="h-3.5 w-3.5" />
                    Reveal Description
                  </span>
                </div>
              </button>
            ) : (
              <div className="space-y-5">
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-[var(--text-primary)]">
                  {nameHidden
                    ? redactConceptTerms(currentConcept.oneLiner, currentConcept)
                    : currentConcept.oneLiner}
                </p>

                {currentConcept.logicalForm && (
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 py-3">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">
                      Formal Structure
                    </div>
                    <code className="block font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                      {currentConcept.logicalForm}
                    </code>
                  </div>
                )}

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Mechanism
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                    {nameHidden
                      ? redactConceptTerms(
                          currentConcept.explanation,
                          currentConcept
                        )
                      : currentConcept.explanation}
                  </p>
                </div>

                {/* Example Scenario Clue */}
                {currentConcept.examples[0] && (
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                      Scenario · {currentConcept.examples[0].context}
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                      {nameHidden
                        ? redactConceptTerms(
                            currentConcept.examples[0].scenario,
                            currentConcept
                          )
                        : currentConcept.examples[0].scenario}
                    </p>
                  </div>
                )}

                {/* Antidote (shown when revealed or when in Hide Name mode after reveal) */}
                {(!nameHidden || revealed) && (
                  <div className="rounded-xl border border-[var(--kind-razor-border)] bg-[var(--kind-razor-bg)] p-4">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--kind-razor)] mb-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Practical Antidote
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                      {currentConcept.antidote}
                    </p>
                  </div>
                )}
              </div>
            )}
          </article>

          {/* Bottom Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
              <span>Pool: {pool.length} concepts</span>
              {reviewedCount > 0 && <span>· {reviewedCount} drawn</span>}
            </div>

            <div className="flex items-center gap-2.5">
              {maskMode !== 'show-all' && (
                <button
                  type="button"
                  onClick={() => setRevealed((r) => !r)}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] transition-colors cursor-pointer"
                >
                  {revealed ? (
                    <>
                      <EyeOff className="h-4 w-4" />
                      Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4" />
                      Reveal Answer
                    </>
                  )}
                  <kbd className="hidden sm:inline-block rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                    Space
                  </kbd>
                </button>
              )}

              <button
                type="button"
                onClick={drawRandom}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--text-primary)] px-5 py-2.5 text-sm font-medium text-[var(--bg-canvas)] hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Shuffle className="h-4 w-4" />
                Next Random
                <kbd className="hidden sm:inline-block rounded bg-[var(--bg-canvas)]/20 px-1.5 py-0.5 font-mono text-[10px]">
                  →
                </kbd>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
