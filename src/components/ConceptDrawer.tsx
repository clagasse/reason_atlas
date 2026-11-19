import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import {
  DOMAIN_META,
  RELATION_META,
  type Concept,
} from '../types/concept';
import { getConceptSources, getResolvedRelations } from '../data';
import { KindBadge } from './KindBadge';

interface ConceptDrawerProps {
  concept: Concept | null;
  onClose: () => void;
  onSelectConcept: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

export function ConceptDrawer({
  concept,
  onClose,
  onSelectConcept,
  isBookmarked,
  onToggleBookmark,
}: ConceptDrawerProps) {
  useEffect(() => {
    if (!concept) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [concept, onClose]);

  if (!concept) return null;

  const bookmarked = isBookmarked(concept.id);
  const relations = getResolvedRelations(concept.id);
  const sources = getConceptSources(concept);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={`${concept.name} details`}
    >
      <div
        className="fixed inset-0 bg-black/35 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="relative z-10 flex h-full w-full max-w-lg flex-col bg-[var(--bg-surface)] border-l border-[var(--border-subtle)] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-[var(--border-subtle)] px-6 py-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <KindBadge kind={concept.kind} size="md" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                {concept.tier}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)] leading-tight">
              {concept.name}
            </h2>
            {concept.aliases.length > 0 && (
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Also known as: {concept.aliases.join(' · ')}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => onToggleBookmark(concept.id)}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark concept'}
              aria-pressed={bookmarked}
              className={`rounded-lg p-2 transition-colors cursor-pointer ${
                bookmarked
                  ? 'text-[var(--kind-bias)] bg-[var(--kind-bias-bg)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)]'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close inspector"
              className="rounded-lg p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          <p className="text-[15px] leading-relaxed font-medium text-[var(--text-primary)]">
            {concept.oneLiner}
          </p>

          {concept.logicalForm && (
            <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-4 py-3">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Logical Form
              </div>
              <code className="font-mono text-xs leading-relaxed text-[var(--text-primary)]">
                {concept.logicalForm}
              </code>
            </div>
          )}

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
              How It Works
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {concept.explanation}
            </p>
          </div>

          <div className="rounded-xl border border-[var(--kind-razor-border)] bg-[var(--kind-razor-bg)] p-4">
            <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--kind-razor)] mb-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Practical Antidote
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-primary)]">
              {concept.antidote}
            </p>
          </div>

          {concept.examples[0] && (
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-4">
              <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                In Practice · {concept.examples[0].context}
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                {concept.examples[0].scenario}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                {concept.examples[0].breakdown}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {concept.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-md bg-[var(--bg-surface-muted)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
              >
                {DOMAIN_META[domain].label}
              </span>
            ))}
          </div>

          {sources.length > 0 && (
            <div>
              <h3 className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                Source Websites & Databases ({sources.length})
              </h3>
              <ul className="space-y-1.5">
                {sources.map((src, idx) => (
                  <li key={`${concept.id}-drawer-src-${idx}`}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-2 text-xs hover:border-[var(--border-strong)] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-medium text-[var(--text-secondary)] truncate">
                          {src.site}
                        </span>
                        <ExternalLink className="h-3 w-3 text-[var(--text-muted)] shrink-0" />
                      </div>
                      <div className="mt-0.5 font-medium text-[var(--text-primary)] truncate">
                        {src.title}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relations.length > 0 && (
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                Connected Concepts ({relations.length})
              </h3>
              <div className="space-y-2">
                {relations.map((rel) => (
                  <button
                    key={`${rel.target.id}-${rel.type}`}
                    type="button"
                    onClick={() => onSelectConcept(rel.target.id)}
                    className="w-full flex items-center justify-between gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3.5 py-2.5 text-left hover:border-[var(--border-strong)] transition-colors cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm font-semibold text-[var(--text-primary)] truncate">
                          {rel.target.name}
                        </span>
                        <KindBadge kind={rel.target.kind} short />
                      </div>
                      <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                        {rel.direction === 'incoming'
                          ? RELATION_META[rel.type].incomingLabel
                          : RELATION_META[rel.type].label}
                      </p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-[var(--text-muted)] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--border-subtle)] px-6 py-4 bg-[var(--bg-surface-muted)]/50 flex items-center justify-between gap-3">
          <span className="text-xs text-[var(--text-muted)] truncate">
            {concept.origin}
          </span>
          <Link
            to={`/concept/${concept.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--text-primary)] px-3.5 py-2 text-xs font-medium text-[var(--bg-canvas)] hover:opacity-90 transition-opacity shrink-0"
          >
            Full Entry
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
