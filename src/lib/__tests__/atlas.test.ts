import { describe, expect, it } from 'vitest';
import {
  ALL_CONCEPTS,
  CONCEPT_BY_ID,
  DIAGNOSTIC_SITUATIONS,
  FALLACIES,
  buildConceptGraph,
  getCountsByKind,
  getResolvedRelations,
} from '../../data';
import { filterConcepts, searchConcepts } from '../search';

describe('Reason Atlas dataset & lookup integrity', () => {
  it('contains 120 curated concepts across all 5 kinds', () => {
    expect(ALL_CONCEPTS.length).toBe(120);
    const counts = getCountsByKind();
    expect(counts.fallacy).toBe(32);
    expect(counts.bias).toBe(28);
    expect(counts.law).toBe(28);
    expect(counts.razor).toBe(12);
    expect(counts['mental-model']).toBe(20);
  });

  it('provides at least one verified website/database source on every logical fallacy', () => {
    for (const fallacy of FALLACIES) {
      expect(fallacy.sources).toBeDefined();
      expect(fallacy.sources!.length).toBeGreaterThanOrEqual(1);
      for (const src of fallacy.sources!) {
        expect(src.site.trim().length).toBeGreaterThan(0);
        expect(src.title.trim().length).toBeGreaterThan(0);
        expect(src.url).toMatch(/^https?:\/\//);
      }
    }
  });

  it('has unique IDs and zero dangling relation targets', () => {
    const ids = new Set(ALL_CONCEPTS.map((c) => c.id));
    expect(ids.size).toBe(ALL_CONCEPTS.length);

    for (const concept of ALL_CONCEPTS) {
      for (const rel of concept.relations) {
        expect(CONCEPT_BY_ID.has(rel.targetId)).toBe(true);
        expect(rel.targetId).not.toBe(concept.id);
      }
    }
  });

  it('resolves both outgoing and incoming relations cleanly without duplicates', () => {
    const bikeshedRelations = getResolvedRelations('law-of-triviality');
    expect(bikeshedRelations.length).toBeGreaterThanOrEqual(4);
    const targetIds = bikeshedRelations.map((r) => r.target.id);
    expect(new Set(targetIds).size).toBe(targetIds.length);
  });
});

describe('Fuse.js fuzzy & alias search', () => {
  it('finds Law of Triviality when searching colloquial alias "bikeshedding"', () => {
    const results = searchConcepts('bikeshedding');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].id).toBe('law-of-triviality');
  });

  it('finds The Peter Principle when searching "peter principle"', () => {
    const results = searchConcepts('peter principle');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].id).toBe('peter-principle');
  });

  it('finds Straw Man even with fuzzy spacing ("strawman")', () => {
    const results = searchConcepts('strawman');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].id).toBe('straw-man');
  });

  it('matches new aliases like "linda problem", "perfect solution", and "ooda"', () => {
    expect(searchConcepts('linda problem')[0]?.id).toBe('conjunction-fallacy');
    expect(searchConcepts('perfect solution')[0]?.id).toBe('nirvana-fallacy');
    expect(searchConcepts('ooda')[0]?.id).toBe('ooda-loop');
    expect(searchConcepts('80/20').some((c) => c.id === 'pareto-principle')).toBe(
      true
    );
  });
});

describe('Multi-facet filtering', () => {
  const emptyBookmarks = new Set<string>();

  it('filters strictly by ConceptKind', () => {
    const razors = filterConcepts({
      query: '',
      kinds: ['razor'],
      domains: [],
      tier: 'all',
      onlyBookmarked: false,
      bookmarkedIds: emptyBookmarks,
    });
    expect(razors.length).toBe(getCountsByKind().razor);
    expect(razors.every((c) => c.kind === 'razor')).toBe(true);
  });

  it('combines kind, domain, tier, and bookmark filters', () => {
    const saved = new Set(['law-of-triviality', 'goodharts-law', 'straw-man']);
    const results = filterConcepts({
      query: '',
      kinds: ['law'],
      domains: ['organizations'],
      tier: 'essential',
      onlyBookmarked: true,
      bookmarkedIds: saved,
    });
    expect(results.map((r) => r.id).sort()).toEqual([
      'goodharts-law',
      'law-of-triviality',
    ]);
  });
});

describe('Concept graph & diagnostic situations', () => {
  it('builds deduplicated edges and positive node degrees for full graph', () => {
    const { nodes, edges } = buildConceptGraph();
    expect(nodes.length).toBe(ALL_CONCEPTS.length);
    expect(edges.length).toBeGreaterThan(220);
    const edgeIds = new Set(edges.map((e) => e.id));
    expect(edgeIds.size).toBe(edges.length);
    expect(nodes.every((n) => n.degree > 0)).toBe(true);
  });

  it('maps every diagnostic situation to valid concept IDs', () => {
    expect(DIAGNOSTIC_SITUATIONS.length).toBeGreaterThanOrEqual(28);
    for (const sit of DIAGNOSTIC_SITUATIONS) {
      expect(sit.conceptIds.length).toBeGreaterThan(0);
      for (const cid of sit.conceptIds) {
        expect(CONCEPT_BY_ID.has(cid)).toBe(true);
      }
    }

    const bikeshedSit = DIAGNOSTIC_SITUATIONS.find((s) =>
      s.conceptIds.includes('law-of-triviality')
    );
    expect(bikeshedSit).toBeDefined();
    const kpiSit = DIAGNOSTIC_SITUATIONS.find(
      (s) =>
        s.conceptIds.includes('goodharts-law') &&
        s.conceptIds.includes('cobra-effect') &&
        s.conceptIds.includes('campbells-law')
    );
    expect(kpiSit).toBeDefined();
  });
});
