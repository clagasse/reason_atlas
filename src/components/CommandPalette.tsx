import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Network,
  Stethoscope,
  Shuffle,
  BookOpen,
  CornerDownLeft,
  X,
  Library,
} from 'lucide-react';
import { ALL_CONCEPTS } from '../data';
import { searchConcepts } from '../lib/search';
import { KindBadge } from './KindBadge';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const matches = useMemo(() => {
    const res = query.trim()
      ? searchConcepts(query)
      : ALL_CONCEPTS.filter((c) => c.tier === 'essential');
    return res.slice(0, 12);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => (matches.length ? (i + 1) % matches.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) =>
          matches.length ? (i - 1 + matches.length) % matches.length : 0
        );
      } else if (e.key === 'Enter' && matches[selectedIndex]) {
        e.preventDefault();
        navigate(`/concept/${matches[selectedIndex].slug}`);
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, matches, selectedIndex, navigate, onClose]);

  if (!open) return null;

  const jumpToRandom = () => {
    const pick = ALL_CONCEPTS[Math.floor(Math.random() * ALL_CONCEPTS.length)];
    navigate(`/concept/${pick.slug}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[10vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Quick jump search"
    >
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-3.5">
          <Search className="h-5 w-5 text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to any concept or nickname (e.g. bikeshedding, peter principle, straw man)..."
            className="w-full bg-transparent text-sm sm:text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        {/* Quick Views */}
        {!query.trim() && (
          <div className="border-b border-[var(--border-subtle)] px-3 py-2.5 flex flex-wrap items-center gap-2 bg-[var(--bg-canvas)]/70">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] px-1.5">
              Quick Views
            </span>
            <button
              type="button"
              onClick={() => {
                navigate('/');
                onClose();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Catalog
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/graph');
                onClose();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer"
            >
              <Network className="h-3.5 w-3.5" />
              Constellation Graph
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/diagnose');
                onClose();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer"
            >
              <Stethoscope className="h-3.5 w-3.5" />
              Situation Finder
            </button>
            <button
              type="button"
              onClick={jumpToRandom}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Surprise Me
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/about');
                onClose();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer"
            >
              <Library className="h-3.5 w-3.5" />
              About & Sources
            </button>
          </div>
        )}

        {/* Results */}
        <div className="max-h-[55vh] overflow-y-auto p-2">
          <div className="px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            {query.trim()
              ? `Matching Concepts (${matches.length})`
              : 'Essential Starting Concepts'}
          </div>

          {matches.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm text-[var(--text-muted)]">
              No concepts matched “{query}”. Try a broader word or open the{' '}
              <button
                type="button"
                onClick={() => {
                  navigate('/diagnose');
                  onClose();
                }}
                className="underline text-[var(--text-primary)] cursor-pointer"
              >
                Situation Diagnostic Finder
              </button>
              .
            </div>
          ) : (
            <ul role="listbox" className="space-y-0.5">
              {matches.map((concept, idx) => {
                const active = idx === selectedIndex;
                return (
                  <li key={concept.id} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => {
                        navigate(`/concept/${concept.slug}`);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors cursor-pointer ${
                        active
                          ? 'bg-[var(--bg-surface-muted)]'
                          : 'hover:bg-[var(--bg-surface-muted)]/60'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-serif text-base font-semibold text-[var(--text-primary)]">
                            {concept.name}
                          </span>
                          <KindBadge kind={concept.kind} short />
                          {concept.aliases.length > 0 && (
                            <span className="text-xs text-[var(--text-muted)] truncate">
                              · {concept.aliases[0]}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-[var(--text-secondary)] line-clamp-1">
                          {concept.oneLiner}
                        </p>
                      </div>
                      {active && (
                        <CornerDownLeft className="h-4 w-4 text-[var(--text-muted)] shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer hints */}
        <div className="flex items-center justify-between border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]/70 px-4 py-2 text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Open</span>
            <span>ESC Close</span>
          </div>
          <span className="font-mono">{ALL_CONCEPTS.length} entries indexed</span>
        </div>
      </div>
    </div>
  );
}
