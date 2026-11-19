import { FALLACIES } from './fallacies';
import { BIASES } from './biases';
import { LAWS } from './laws';
import { RAZORS } from './razors';
import { MENTAL_MODELS } from './mentalModels';
import { DIAGNOSTIC_CATEGORIES, DIAGNOSTIC_SITUATIONS } from './situations';
import type {
  Concept,
  ConceptKind,
  ConceptSource,
  GraphEdge,
  GraphNode,
  ResolvedRelation,
} from '../types/concept';

export { FALLACIES, BIASES, LAWS, RAZORS, MENTAL_MODELS };
export { DIAGNOSTIC_CATEGORIES, DIAGNOSTIC_SITUATIONS };

export const ALL_CONCEPTS: Concept[] = [
  ...FALLACIES,
  ...BIASES,
  ...LAWS,
  ...RAZORS,
  ...MENTAL_MODELS,
];

export const CONCEPT_BY_ID: ReadonlyMap<string, Concept> = new Map(
  ALL_CONCEPTS.map((c) => [c.id, c])
);

export function getConceptById(id: string): Concept | undefined {
  return CONCEPT_BY_ID.get(id);
}

/**
 * Returns the website/database sources for any concept.
 * All 32 logical fallacies define explicit per-entry database links; other kinds
 * use their explicit links or resolve to their canonical online databases.
 */
export function getConceptSources(concept: Concept): ConceptSource[] {
  if (concept.sources && concept.sources.length > 0) {
    return concept.sources;
  }

  const wikiQuery = encodeURIComponent(concept.name);
  const wikiUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${wikiQuery}`;

  switch (concept.kind) {
    case 'fallacy':
      return [
        {
          site: 'Internet Encyclopedia of Philosophy (IEP)',
          title: `Fallacies Database — ${concept.name}`,
          url: 'https://iep.utm.edu/fallacy/',
        },
        {
          site: 'Your Logical Fallacy Is',
          title: `${concept.name} Reference Entry`,
          url: 'https://yourlogicalfallacyis.com/',
        },
      ];
    case 'bias':
      return [
        {
          site: 'The Decision Lab',
          title: `${concept.name} — Cognitive Biases Index`,
          url: 'https://thedecisionlab.com/biases',
        },
        {
          site: 'Wikipedia Cognitive Biases Database',
          title: `${concept.name} (List of Cognitive Biases)`,
          url: wikiUrl,
        },
      ];
    case 'law':
      return [
        {
          site: 'Hacker Laws Repository (dwmkerr/hacker-laws)',
          title: `${concept.name} — Laws, Theories & Principles Database`,
          url: 'https://github.com/dwmkerr/hacker-laws',
        },
        {
          site: 'Wikipedia Eponymous Laws Database',
          title: `${concept.name} Entry`,
          url: wikiUrl,
        },
      ];
    case 'razor':
      return [
        {
          site: 'Wikipedia Philosophical Razors Database',
          title: `${concept.name} — Philosophical Razors Index`,
          url: 'https://en.wikipedia.org/wiki/Philosophical_razor',
        },
        {
          site: 'Stanford Encyclopedia of Philosophy (SEP)',
          title: `${concept.name} Epistemology Reference`,
          url: 'https://plato.stanford.edu/',
        },
      ];
    case 'mental-model':
      return [
        {
          site: 'Farnam Street Mental Models Database',
          title: `${concept.name} — Mental Models Directory`,
          url: 'https://fs.blog/mental-models/',
        },
        {
          site: 'Untools Thinking Tools Database',
          title: `${concept.name} Decision Framework`,
          url: 'https://untools.co/',
        },
      ];
  }
}

export function getCountsByKind(): Record<ConceptKind, number> {
  return {
    fallacy: FALLACIES.length,
    bias: BIASES.length,
    law: LAWS.length,
    razor: RAZORS.length,
    'mental-model': MENTAL_MODELS.length,
  };
}

/**
 * Returns both outgoing and incoming relations for a concept, deduplicated
 * so symmetric links don't appear twice.
 */
export function getResolvedRelations(conceptId: string): ResolvedRelation[] {
  const source = CONCEPT_BY_ID.get(conceptId);
  if (!source) return [];

  const seen = new Set<string>();
  const resolved: ResolvedRelation[] = [];

  for (const rel of source.relations) {
    const target = CONCEPT_BY_ID.get(rel.targetId);
    if (!target) continue;
    const key = `${target.id}::${rel.type}`;
    if (seen.has(key)) continue;
    seen.add(key);
    resolved.push({
      target,
      type: rel.type,
      note: rel.note,
      direction: 'outgoing',
    });
  }

  for (const other of ALL_CONCEPTS) {
    if (other.id === conceptId) continue;
    for (const rel of other.relations) {
      if (rel.targetId !== conceptId) continue;
      // Avoid duplicating undirected/symmetric relations already listed outgoing
      const alreadySamePair = resolved.some((r) => r.target.id === other.id);
      if (alreadySamePair) continue;
      resolved.push({
        target: other,
        type: rel.type,
        note: rel.note,
        direction: 'incoming',
      });
    }
  }

  return resolved;
}

/**
 * Builds deduplicated graph nodes & edges for d3-force visualization.
 */
export function buildConceptGraph(concepts: Concept[] = ALL_CONCEPTS): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  const includedIds = new Set(concepts.map((c) => c.id));
  const edgeMap = new Map<string, GraphEdge>();
  const degreeMap = new Map<string, number>();

  for (const c of concepts) {
    degreeMap.set(c.id, 0);
  }

  for (const concept of concepts) {
    for (const rel of concept.relations) {
      if (!includedIds.has(rel.targetId)) continue;
      if (concept.id === rel.targetId) continue;

      const [a, b] =
        concept.id < rel.targetId
          ? [concept.id, rel.targetId]
          : [rel.targetId, concept.id];
      const edgeKey = `${a}--${b}`;

      if (!edgeMap.has(edgeKey)) {
        edgeMap.set(edgeKey, {
          id: edgeKey,
          source: concept.id,
          target: rel.targetId,
          type: rel.type,
          note: rel.note,
        });
        degreeMap.set(concept.id, (degreeMap.get(concept.id) ?? 0) + 1);
        degreeMap.set(rel.targetId, (degreeMap.get(rel.targetId) ?? 0) + 1);
      }
    }
  }

  const nodes: GraphNode[] = concepts.map((c) => ({
    id: c.id,
    name: c.name,
    kind: c.kind,
    tier: c.tier,
    domains: c.domains,
    oneLiner: c.oneLiner,
    degree: degreeMap.get(c.id) ?? 0,
  }));

  return {
    nodes,
    edges: Array.from(edgeMap.values()),
  };
}
