import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Search,
  Shuffle,
  LayoutGrid,
  List,
  Image as ImageIcon,
  Bookmark,
  RotateCcw,
  Stethoscope,
  X,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import {
  ALL_CONCEPTS,
  getCountsByKind,
} from '../data';
import {
  DOMAIN_META,
  DOMAIN_ORDER,
  KIND_META,
  KIND_ORDER,
  type ConceptKind,
} from '../types/concept';
import { useSearch } from '../hooks/useSearch';
import { ConceptCard, type CatalogViewMode } from '../components/ConceptCard';

interface ExplorerPageProps {
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

export function ExplorerPage({
  bookmarkedIds,
  isBookmarked,
  onToggleBookmark,
}: ExplorerPageProps) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<CatalogViewMode>('grid');
  const [showDomains, setShowDomains] = useState(false);

  const {
    query,
    setQuery,
    kinds,
    toggleKind,
    domains,
    toggleDomain,
    tier,
    setTier,
    onlyBookmarked,
    setOnlyBookmarked,
    hasActiveFilters,
    resetFilters,
    results,
    totalCount,
  } = useSearch(bookmarkedIds);

  useEffect(() => {
    if (searchParams.get('saved') === '1') {
      setOnlyBookmarked(true);
      const next = new URLSearchParams(searchParams);
      next.delete('saved');
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setOnlyBookmarked, setSearchParams]);

  const countsByKind = useMemo(() => getCountsByKind(), []);

  const handleSurpriseMe = () => {
    const pool = results.length > 0 ? results : ALL_CONCEPTS;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    navigate(`/concept/${pick.slug}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-14">
      {/* Clean, Uncluttered Editorial Header */}
      <section className="max-w-3xl mb-9">
        <h1 className="font-serif text-3xl sm:text-[44px] font-semibold tracking-tight text-[var(--text-primary)] leading-[1.14]">
          An interactive atlas of reasoning traps, laws, and mental models.
        </h1>
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
          Spot logical fallacies, cognitive biases, eponymous laws, philosophical razors, and clear-thinking frameworks.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 120 concepts, nicknames, or scenarios..."
              aria-label="Search concepts"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] pl-10 pr-9 py-2.5 text-sm sm:text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]/15 transition-shadow"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleSurpriseMe}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer shrink-0"
          >
            <Shuffle className="h-4 w-4" />
            Surprise Me
          </button>
        </div>
      </section>

      {/* Streamlined Filter Toolbar */}
      <section aria-label="Catalog filters" className="space-y-3 mb-7">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3.5">
          {/* Kind Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                if (kinds.length > 0) {
                  for (const k of [...kinds]) toggleKind(k);
                }
              }}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                kinds.length === 0
                  ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
              }`}
            >
              All
              <span className="font-mono text-[11px] opacity-75">{totalCount}</span>
            </button>

            {KIND_ORDER.map((kind) => {
              const meta = KIND_META[kind];
              const active = kinds.includes(kind);
              return (
                <button
                  key={kind}
                  type="button"
                  onClick={() => toggleKind(kind)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? ACTIVE_KIND_PILL[kind]
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: meta.accentVar }}
                    aria-hidden="true"
                  />
                  {meta.plural}
                  <span className="font-mono text-[11px] opacity-65">
                    {countsByKind[kind]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Essential, Domains, Saved, View Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setTier(tier === 'essential' ? 'all' : 'essential')
              }
              aria-pressed={tier === 'essential'}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                tier === 'essential'
                  ? 'border-[var(--border-strong)] bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Essentials
            </button>

            <button
              type="button"
              onClick={() => setShowDomains((s) => !s)}
              aria-expanded={showDomains}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                showDomains || domains.length > 0
                  ? 'border-[var(--border-strong)] bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Domains
              {domains.length > 0 && (
                <span className="font-mono text-[10px]">({domains.length})</span>
              )}
            </button>

            {(bookmarkedIds.size > 0 || onlyBookmarked) && (
              <button
                type="button"
                onClick={() => setOnlyBookmarked((b) => !b)}
                aria-pressed={onlyBookmarked}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  onlyBookmarked
                    ? 'border-[var(--kind-bias-border)] bg-[var(--kind-bias-bg)] text-[var(--kind-bias)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <Bookmark
                  className={`h-3.5 w-3.5 ${onlyBookmarked ? 'fill-current' : ''}`}
                />
                Saved ({bookmarkedIds.size})
              </button>
            )}

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            )}

            {/* Compact Icon-Only Layout Switcher */}
            <div
              className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-0.5 ml-1"
              role="group"
              aria-label="Catalog layout density"
            >
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Clean grid view"
                aria-pressed={viewMode === 'grid'}
                title="Clean Grid"
                className={`rounded-md p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('illustrated')}
                aria-label="Illustrated cards view"
                aria-pressed={viewMode === 'illustrated'}
                title="Illustrated Grid (with diagrams)"
                className={`rounded-md p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'illustrated'
                    ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-label="Compact list view"
                aria-pressed={viewMode === 'list'}
                title="Compact List"
                className={`rounded-md p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Domain Pills */}
        {(showDomains || domains.length > 0) && (
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mr-1">
              Domain:
            </span>
            {DOMAIN_ORDER.map((domain) => {
              const active = domains.includes(domain);
              return (
                <button
                  key={domain}
                  type="button"
                  onClick={() => toggleDomain(domain)}
                  aria-pressed={active}
                  className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {DOMAIN_META[domain].label}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Catalog Results */}
      {results.length === 0 ? (
        <div className="atlas-surface rounded-2xl px-6 py-16 text-center">
          <p className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
            No matching concepts found
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            {onlyBookmarked && bookmarkedIds.size === 0
              ? 'You haven’t saved any concepts to your toolkit yet. Click the bookmark icon on any card to pin it here.'
              : 'Try broadening your search terms, removing a filter, or describing the real-world scenario in the Situation Finder.'}
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--text-primary)] px-4 py-2 text-xs font-medium text-[var(--bg-canvas)] hover:opacity-90 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset All Filters
            </button>
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-canvas)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)]"
            >
              <Stethoscope className="h-3.5 w-3.5" />
              Try Situation Finder
            </Link>
          </div>
        </div>
      ) : viewMode !== 'list' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              viewMode={viewMode}
              bookmarked={isBookmarked(concept.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {results.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              viewMode="list"
              bookmarked={isBookmarked(concept.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
}
