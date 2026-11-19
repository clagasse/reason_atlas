import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Bookmark,
  Check,
  Share2,
  ShieldCheck,
  Scale,
  History,
  Network,
  EyeOff,
  Eye,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
} from 'lucide-react';
import {
  getConceptById,
  getConceptSources,
  getResolvedRelations,
} from '../data';
import {
  DOMAIN_META,
  RELATION_META,
  TIER_META,
  type RelationType,
  type ResolvedRelation,
} from '../types/concept';
import { KindBadge } from '../components/KindBadge';
import { ExampleCard } from '../components/ExampleCard';

interface ConceptPageProps {
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

const RELATION_ORDER: RelationType[] = [
  'psychological_root',
  'counterpart_to',
  'often_confused_with',
  'related_to',
];

export function ConceptPage({
  isBookmarked,
  onToggleBookmark,
}: ConceptPageProps) {
  const { id } = useParams<{ id: string }>();
  const [selfTestMode, setSelfTestMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const concept = id ? getConceptById(id) : undefined;
  const relations = useMemo(
    () => (concept ? getResolvedRelations(concept.id) : []),
    [concept]
  );

  const groupedRelations = useMemo(() => {
    const groups = new Map<RelationType, ResolvedRelation[]>();
    for (const rel of relations) {
      const list = groups.get(rel.type) ?? [];
      list.push(rel);
      groups.set(rel.type, list);
    }
    return groups;
  }, [relations]);

  if (!concept) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <h1 className="font-serif text-3xl font-semibold">Concept not found</h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          We couldn’t find an entry matching “{id}”.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--bg-canvas)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Explorer
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(concept.id);
  const sources = getConceptSources(concept);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 pb-16">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Explorer
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to={`/graph?focus=${concept.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
          >
            <Network className="h-3.5 w-3.5" />
            View in Graph
          </Link>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[var(--kind-razor)]" />
                Copied
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" />
                Share
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => onToggleBookmark(concept.id)}
            aria-pressed={bookmarked}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              bookmarked
                ? 'border-[var(--kind-bias-border)] bg-[var(--kind-bias-bg)] text-[var(--kind-bias)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
            }`}
          >
            <Bookmark
              className={`h-3.5 w-3.5 ${bookmarked ? 'fill-current' : ''}`}
            />
            {bookmarked ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>

      {/* Editorial Header */}
      <header className="atlas-surface rounded-2xl p-6 sm:p-9 mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <KindBadge kind={concept.kind} size="md" />
          <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
            {TIER_META[concept.tier].label}
          </span>
          {concept.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full bg-[var(--bg-canvas)] border border-[var(--border-subtle)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
            >
              {DOMAIN_META[domain].label}
            </span>
          ))}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12]">
          {concept.name}
        </h1>

        {concept.aliases.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <span className="font-mono uppercase tracking-wider text-[10px]">
              Also known as:
            </span>
            {concept.aliases.map((alias) => (
              <span
                key={alias}
                className="rounded-md bg-[var(--bg-surface-muted)] px-2 py-0.5 text-[var(--text-secondary)]"
              >
                {alias}
              </span>
            ))}
          </div>
        )}

        <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[var(--text-primary)] font-serif">
          {concept.oneLiner}
        </p>

        {concept.logicalForm && (
          <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 py-3.5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">
              Formal Structure
            </div>
            <code className="block font-mono text-xs sm:text-sm leading-relaxed text-[var(--text-primary)]">
              {concept.logicalForm}
            </code>
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-muted)]">
          <History className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            <strong className="font-medium text-[var(--text-secondary)]">
              Origin:{' '}
            </strong>
            {concept.origin}
          </span>
        </div>
      </header>

      {/* Main Editorial Content */}
      <div className="space-y-8">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)] mb-3">
            Why It Happens & How It Works
          </h2>
          <p className="text-base leading-[1.8] text-[var(--text-secondary)]">
            {concept.explanation}
          </p>
        </section>

        {/* Antidote + Valid Counterpart */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`rounded-2xl border border-[var(--kind-razor-border)] bg-[var(--kind-razor-bg)] p-6 ${
              !concept.validCounterpart ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--kind-razor)] font-medium mb-2.5">
              <ShieldCheck className="h-4 w-4" />
              Practical Antidote
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--text-primary)]">
              {concept.antidote}
            </p>
          </div>

          {concept.validCounterpart && (
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium mb-2.5">
                <Scale className="h-4 w-4" />
                Nuance & Valid Counterpart
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {concept.validCounterpart}
              </p>
            </div>
          )}
        </section>

        {/* Interactive Examples */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                Real-World Examples
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Toggle Self-Test Mode to hide explanations and diagnose each scenario yourself first.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelfTestMode((m) => !m)}
              aria-pressed={selfTestMode}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                selfTestMode
                  ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
              }`}
            >
              {selfTestMode ? (
                <>
                  <EyeOff className="h-3.5 w-3.5" />
                  Self-Test Mode: On
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5" />
                  Self-Test Mode: Off
                </>
              )}
            </button>
          </div>

          <div className="space-y-4">
            {concept.examples.map((example, idx) => (
              <ExampleCard
                key={`${concept.id}-ex-${idx}`}
                example={example}
                index={idx}
                selfTestMode={selfTestMode}
              />
            ))}
          </div>
        </section>

        {/* Source Websites & Databases */}
        {sources.length > 0 && (
          <section className="pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-[var(--text-muted)]" />
                <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                  Source Websites & Databases
                </h2>
              </div>
              <Link
                to="/about"
                className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-4"
              >
                All Reference Databases
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sources.map((src, idx) => {
                let hostname = '';
                try {
                  hostname = new URL(src.url).hostname.replace(/^www\./, '');
                } catch {
                  hostname = src.url;
                }
                return (
                  <li key={`${concept.id}-src-${idx}`}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="atlas-surface group rounded-xl p-4 flex flex-col justify-between h-full transition-all hover:border-[var(--border-strong)] hover:-translate-y-0.5 hover:shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-mono text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-surface-muted)] px-2 py-0.5 rounded-md border border-[var(--border-subtle)] truncate">
                            {src.site}
                          </span>
                          <ExternalLink className="h-3.5 w-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0" />
                        </div>
                        <div className="font-serif text-[15px] font-semibold text-[var(--text-primary)] group-hover:underline decoration-[var(--border-strong)] underline-offset-4 leading-snug">
                          {src.title}
                        </div>
                      </div>
                      <div className="mt-2.5 font-mono text-[10px] text-[var(--text-muted)] truncate">
                        {hostname}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Local Neighborhood Mini-Map */}
        {relations.length > 0 && (
          <section className="pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                  Concept Neighborhood
                </h2>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Follow typed links across fallacies, biases, laws, razors, and mental models.
                </p>
              </div>
              <Link
                to={`/graph?focus=${concept.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Explore in full graph
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="space-y-6">
              {RELATION_ORDER.map((relType) => {
                const items = groupedRelations.get(relType);
                if (!items || items.length === 0) return null;
                return (
                  <div key={relType}>
                    <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                      {RELATION_META[relType].label} ({items.length})
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {items.map((rel) => (
                        <Link
                          key={`${rel.target.id}-${rel.type}`}
                          to={`/concept/${rel.target.slug}`}
                          className="atlas-surface group rounded-xl p-4 transition-all hover:border-[var(--border-strong)] hover:-translate-y-0.5 hover:shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <KindBadge kind={rel.target.kind} short />
                            <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                          </div>
                          <div className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:underline decoration-[var(--border-strong)] underline-offset-4">
                            {rel.target.name}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                            {rel.note ?? rel.target.oneLiner}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
