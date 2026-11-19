import { Suspense, lazy, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useBookmarks } from './hooks/useBookmarks';
import { Layout } from './components/Layout';
import { CommandPalette } from './components/CommandPalette';
import { ExplorerPage } from './pages/ExplorerPage';

const ConceptPage = lazy(() =>
  import('./pages/ConceptPage').then((m) => ({ default: m.ConceptPage }))
);
const GraphPage = lazy(() =>
  import('./pages/GraphPage').then((m) => ({ default: m.GraphPage }))
);
const DiagnosePage = lazy(() =>
  import('./pages/DiagnosePage').then((m) => ({ default: m.DiagnosePage }))
);
const RecallPage = lazy(() =>
  import('./pages/RecallPage').then((m) => ({ default: m.RecallPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 font-mono text-xs text-[var(--text-muted)]">
        Loading view…
      </div>
    </div>
  );
}

function AppShell() {
  const { bookmarkedIds, bookmarkCount, isBookmarked, toggleBookmark } =
    useBookmarks();
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
  }, []);

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Layout
        onOpenPalette={() => setPaletteOpen(true)}
        bookmarkCount={bookmarkCount}
      >
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <ExplorerPage
                  bookmarkedIds={bookmarkedIds}
                  isBookmarked={isBookmarked}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route
              path="/concept/:id"
              element={
                <ConceptPage
                  isBookmarked={isBookmarked}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route
              path="/graph"
              element={
                <GraphPage
                  isBookmarked={isBookmarked}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route
              path="/diagnose"
              element={
                <DiagnosePage
                  isBookmarked={isBookmarked}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route
              path="/recall"
              element={
                <RecallPage
                  bookmarkedIds={bookmarkedIds}
                  isBookmarked={isBookmarked}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}
