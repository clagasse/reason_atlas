import { useCallback, useMemo, useState } from 'react';
import type { ConceptKind, Domain, Tier } from '../types/concept';
import { ALL_CONCEPTS } from '../data';
import { filterConcepts } from '../lib/search';

export function useSearch(bookmarkedIds: ReadonlySet<string>) {
  const [query, setQuery] = useState('');
  const [kinds, setKinds] = useState<ConceptKind[]>([]);
  const [domains, setDomains] = useState<Domain[]>([]);
  const [tier, setTier] = useState<Tier | 'all'>('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  const toggleKind = useCallback((kind: ConceptKind) => {
    setKinds((prev) =>
      prev.includes(kind) ? prev.filter((k) => k !== kind) : [...prev, kind]
    );
  }, []);

  const toggleDomain = useCallback((domain: Domain) => {
    setDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
  }, []);

  const resetFilters = useCallback(() => {
    setQuery('');
    setKinds([]);
    setDomains([]);
    setTier('all');
    setOnlyBookmarked(false);
  }, []);

  const hasActiveFilters =
    query.trim().length > 0 ||
    kinds.length > 0 ||
    domains.length > 0 ||
    tier !== 'all' ||
    onlyBookmarked;

  const results = useMemo(
    () =>
      filterConcepts(
        {
          query,
          kinds,
          domains,
          tier,
          onlyBookmarked,
          bookmarkedIds,
        },
        ALL_CONCEPTS
      ),
    [query, kinds, domains, tier, onlyBookmarked, bookmarkedIds]
  );

  return {
    query,
    setQuery,
    kinds,
    setKinds,
    toggleKind,
    domains,
    setDomains,
    toggleDomain,
    tier,
    setTier,
    onlyBookmarked,
    setOnlyBookmarked,
    hasActiveFilters,
    resetFilters,
    results,
    totalCount: ALL_CONCEPTS.length,
  };
}
