import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Compass,
  Network,
  Stethoscope,
  Search,
  Bookmark,
  Library,
} from 'lucide-react';
import { ALL_CONCEPTS } from '../data';

interface LayoutProps {
  children: ReactNode;
  onOpenPalette: () => void;
  bookmarkCount: number;
}

export function Layout({
  children,
  onOpenPalette,
  bookmarkCount,
}: LayoutProps) {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-[var(--bg-surface-muted)] text-[var(--text-primary)]'
        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)]/60'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 h-16">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-xs group-hover:scale-[1.03] transition-transform">
              <Compass className="h-5 w-5 text-[var(--text-primary)]" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold tracking-tight text-[var(--text-primary)]">
                Reason Atlas
              </div>
              <div className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                Field Guide to Clear Thinking
              </div>
            </div>
          </Link>

          {/* Primary Nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1"
          >
            <NavLink to="/" end className={navLinkClass}>
              <Compass className="h-4 w-4" />
              Explorer
            </NavLink>
            <NavLink to="/graph" className={navLinkClass}>
              <Network className="h-4 w-4" />
              Constellation
            </NavLink>
            <NavLink to="/diagnose" className={navLinkClass}>
              <Stethoscope className="h-4 w-4" />
              Diagnose
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <Library className="h-4 w-4" />
              About & Sources
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenPalette}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
              aria-label="Open quick jump search"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Quick Jump</span>
              <kbd className="hidden sm:inline-block rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-1.5 py-0.5 font-mono text-[10px]">
                Ctrl K
              </kbd>
            </button>

            {bookmarkCount > 0 && (
              <Link
                to="/?saved=1"
                className="inline-flex items-center gap-1 rounded-lg border border-[var(--kind-bias-border)] bg-[var(--kind-bias-bg)] px-2.5 py-1.5 text-xs font-medium text-[var(--kind-bias)] hover:opacity-90 transition-opacity"
                title="View saved toolkit"
              >
                <Bookmark className="h-3.5 w-3.5 fill-current" />
                <span className="font-mono">{bookmarkCount}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Nav Row */}
        <nav
          aria-label="Mobile navigation"
          className="flex md:hidden items-center justify-around border-t border-[var(--border-subtle)] px-2 py-1.5 bg-[var(--bg-surface)]/80"
        >
          <NavLink to="/" end className={navLinkClass}>
            <Compass className="h-4 w-4" />
            Explorer
          </NavLink>
          <NavLink to="/graph" className={navLinkClass}>
            <Network className="h-4 w-4" />
            Graph
          </NavLink>
          <NavLink to="/diagnose" className={navLinkClass}>
            <Stethoscope className="h-4 w-4" />
            Diagnose
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            <Library className="h-4 w-4" />
            Sources
          </NavLink>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/50">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-6 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-semibold text-[var(--text-secondary)]">
              Reason Atlas
            </span>
            <span>·</span>
            <span>
              {ALL_CONCEPTS.length} curated concepts across fallacies, biases, laws,
              razors & mental models.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="hover:text-[var(--text-primary)] underline underline-offset-4"
            >
              About & Sources
            </Link>
            <span>·</span>
            <div className="font-mono text-[11px]">
              Press <kbd className="rounded border border-[var(--border-subtle)] px-1.5 py-0.5">Ctrl K</kbd> anywhere to jump
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
