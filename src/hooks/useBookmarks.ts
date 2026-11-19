import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'reason-atlas-bookmarks';

function readInitialBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((v): v is string => typeof v === 'string');
    }
  } catch {
    // ignore corrupted storage
  }
  return [];
}

export function useBookmarks() {
  const [ids, setIds] = useState<string[]>(readInitialBookmarks);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // ignore storage errors
    }
  }, [ids]);

  const bookmarkedSet = useMemo(() => new Set(ids), [ids]);

  const isBookmarked = useCallback(
    (id: string) => bookmarkedSet.has(id),
    [bookmarkedSet]
  );

  const toggleBookmark = useCallback((id: string) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const clearBookmarks = useCallback(() => {
    setIds([]);
  }, []);

  return {
    bookmarkedIds: bookmarkedSet,
    bookmarkedList: ids,
    bookmarkCount: ids.length,
    isBookmarked,
    toggleBookmark,
    clearBookmarks,
  };
}
