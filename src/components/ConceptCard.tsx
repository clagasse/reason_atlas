import { Link } from 'react-router-dom';
import { Bookmark, ArrowUpRight } from 'lucide-react';
import { DOMAIN_META, type Concept, type ConceptKind } from '../types/concept';
import { KindBadge } from './KindBadge';
import { ConceptVisual } from './ConceptVisual';

export type CatalogViewMode = 'illustrated' | 'grid' | 'list';

interface ConceptCardProps {
  concept: Concept;
  viewMode: CatalogViewMode;
  bookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

const TOP_BORDER_CLASS: Record<ConceptKind, string> = {
  fallacy: 'kind-border-fallacy',
  bias: 'kind-border-bias',
  law: 'kind-border-law',
  razor: 'kind-border-razor',
  'mental-model': 'kind-border-mental-model',
};

export function ConceptCard({
  concept,
  viewMode,
  bookmarked,
  onToggleBookmark,
}: ConceptCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="atlas-surface group relative flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-all hover:border-[var(--border-strong)]">
        <Link
          to={`/concept/${concept.slug}`}
          className="flex flex-1 min-w-0 flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 focus:outline-none"
        >
          <div className="shrink-0">
            <KindBadge kind={concept.kind} short />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:underline decoration-[var(--border-strong)] underline-offset-4">
                {concept.name}
              </h3>
              {concept.aliases[0] && (
                <span className="text-xs text-[var(--text-muted)] truncate">
                  · {concept.aliases[0]}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-[var(--text-secondary)] line-clamp-1">
              {concept.oneLiner}
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleBookmark(concept.id);
          }}
          aria-label={
            bookmarked
              ? `Remove ${concept.name} from saved`
              : `Save ${concept.name}`
          }
          aria-pressed={bookmarked}
          className={`rounded-lg p-1.5 transition-colors cursor-pointer shrink-0 ${
            bookmarked
              ? 'text-[var(--kind-bias)]'
              : 'text-[var(--text-muted)] opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-[var(--text-primary)]'
          }`}
        >
          <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>
    );
  }

  return (
    <article
      className={`atlas-surface ${TOP_BORDER_CLASS[concept.kind]} border-t-2 group relative flex flex-col justify-between rounded-xl overflow-hidden transition-all hover:border-x-[var(--border-strong)] hover:border-b-[var(--border-strong)] hover:-translate-y-0.5 hover:shadow-sm`}
    >
      <div>
        {viewMode === 'illustrated' && (
          <Link
            to={`/concept/${concept.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="block border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/50 px-3 py-1"
          >
            <ConceptVisual concept={concept} className="h-[74px] w-full" />
          </Link>
        )}

        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-3">
            <KindBadge kind={concept.kind} short />
            <button
              type="button"
              onClick={() => onToggleBookmark(concept.id)}
              aria-label={
                bookmarked
                  ? `Remove ${concept.name} from saved`
                  : `Save ${concept.name}`
              }
              aria-pressed={bookmarked}
              className={`rounded-lg p-1 transition-all cursor-pointer ${
                bookmarked
                  ? 'text-[var(--kind-bias)] opacity-100'
                  : 'text-[var(--text-muted)] opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-[var(--text-primary)]'
              }`}
            >
              <Bookmark
                className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`}
              />
            </button>
          </div>

          <Link
            to={`/concept/${concept.slug}`}
            className="block focus:outline-none group/link"
          >
            <h3 className="font-serif text-xl leading-snug font-semibold text-[var(--text-primary)] group-hover/link:underline decoration-[var(--border-strong)] underline-offset-4">
              {concept.name}
            </h3>
            {concept.aliases[0] && (
              <p className="mt-0.5 text-xs text-[var(--text-muted)] truncate">
                {concept.aliases[0]}
              </p>
            )}
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-3">
              {concept.oneLiner}
            </p>
          </Link>
        </div>
      </div>

      <div className="px-5 pb-4 flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>{DOMAIN_META[concept.domains[0]].label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-secondary)]" />
      </div>
    </article>
  );
}
