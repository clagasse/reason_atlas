import Fuse from 'fuse.js';
import type { Concept, ConceptKind, Domain, Tier } from '../types/concept';
import { ALL_CONCEPTS } from '../data';

export interface SearchFilters {
  query: string;
  kinds: ConceptKind[];
  domains: Domain[];
  tier: Tier | 'all';
  onlyBookmarked: boolean;
  bookmarkedIds: ReadonlySet<string>;
}

const FUSE_OPTIONS = {
  includeScore: true,
  threshold: 0.36,
  ignoreLocation: true,
  minMatchCharLength: 2,
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'aliases', weight: 0.35 },
    { name: 'oneLiner', weight: 0.14 },
    { name: 'explanation', weight: 0.06 },
    { name: 'examples.scenario', weight: 0.05 },
  ],
};

export function createConceptSearchIndex(concepts: Concept[] = ALL_CONCEPTS) {
  return new Fuse(concepts, FUSE_OPTIONS);
}

const defaultIndex = createConceptSearchIndex(ALL_CONCEPTS);

export function searchConcepts(
  query: string,
  index: Fuse<Concept> = defaultIndex,
  concepts: Concept[] = ALL_CONCEPTS
): Concept[] {
  const trimmed = query.trim();
  if (!trimmed) return concepts;
  return index.search(trimmed).map((r) => r.item);
}

export function filterConcepts(
  filters: SearchFilters,
  concepts: Concept[] = ALL_CONCEPTS,
  index: Fuse<Concept> = defaultIndex
): Concept[] {
  const candidates = filters.query.trim()
    ? searchConcepts(filters.query, index, concepts)
    : concepts;

  return candidates.filter((concept) => {
    if (filters.kinds.length > 0 && !filters.kinds.includes(concept.kind)) {
      return false;
    }
    if (
      filters.domains.length > 0 &&
      !filters.domains.some((d) => concept.domains.includes(d))
    ) {
      return false;
    }
    if (filters.tier !== 'all' && concept.tier !== filters.tier) {
      return false;
    }
    if (filters.onlyBookmarked && !filters.bookmarkedIds.has(concept.id)) {
      return false;
    }
    return true;
  });
}
