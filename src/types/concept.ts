export type ConceptKind =
  | 'fallacy'
  | 'bias'
  | 'law'
  | 'razor'
  | 'mental-model';

export type Domain =
  | 'debate'
  | 'organizations'
  | 'decision-making'
  | 'statistics'
  | 'systems'
  | 'everyday';

export type Tier = 'essential' | 'intermediate' | 'deep-cut';

export type RelationType =
  | 'psychological_root'
  | 'often_confused_with'
  | 'counterpart_to'
  | 'related_to';

export interface ConceptExample {
  context: string;
  scenario: string;
  breakdown: string;
}

export interface ConceptRelation {
  targetId: string;
  type: RelationType;
  note?: string;
}

export interface ConceptSource {
  site: string;
  title: string;
  url: string;
  note?: string;
}

export interface Concept {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  kind: ConceptKind;
  domains: Domain[];
  tier: Tier;
  oneLiner: string;
  explanation: string;
  logicalForm?: string;
  origin: string;
  examples: ConceptExample[];
  antidote: string;
  validCounterpart?: string;
  sources?: ConceptSource[];
  relations: ConceptRelation[];
}

export interface ResolvedRelation {
  target: Concept;
  type: RelationType;
  note?: string;
  direction: 'outgoing' | 'incoming';
}

export type DiagnosticCategoryId =
  | 'meetings-teams'
  | 'arguments-media'
  | 'metrics-incentives'
  | 'estimating-planning'
  | 'personal-decisions';

export interface DiagnosticCategory {
  id: DiagnosticCategoryId;
  title: string;
  subtitle: string;
  prompt: string;
}

export interface DiagnosticSituation {
  id: string;
  category: DiagnosticCategoryId;
  symptom: string;
  signal: string;
  conceptIds: string[];
  quickTip: string;
}

export interface GraphNode {
  id: string;
  name: string;
  kind: ConceptKind;
  tier: Tier;
  domains: Domain[];
  oneLiner: string;
  degree: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: RelationType;
  note?: string;
}

export interface KindMeta {
  id: ConceptKind;
  label: string;
  plural: string;
  shortLabel: string;
  description: string;
  accentVar: string;
  dotColor: string;
}

export const KIND_ORDER: ConceptKind[] = [
  'fallacy',
  'bias',
  'law',
  'razor',
  'mental-model',
];

export const KIND_META: Record<ConceptKind, KindMeta> = {
  fallacy: {
    id: 'fallacy',
    label: 'Logical Fallacy',
    plural: 'Logical Fallacies',
    shortLabel: 'Fallacy',
    description: 'Structural or rhetorical flaws that undermine an argument’s validity.',
    accentVar: 'var(--kind-fallacy)',
    dotColor: '#c24136',
  },
  bias: {
    id: 'bias',
    label: 'Cognitive Bias',
    plural: 'Cognitive Biases',
    shortLabel: 'Bias',
    description: 'Systematic mental shortcuts and blind spots in perception and judgment.',
    accentVar: 'var(--kind-bias)',
    dotColor: '#b7791f',
  },
  law: {
    id: 'law',
    label: 'Law & Effect',
    plural: 'Laws & Effects',
    shortLabel: 'Law',
    description: 'Eponymous observations about teams, incentives, complexity, and human systems.',
    accentVar: 'var(--kind-law)',
    dotColor: '#2b58b0',
  },
  razor: {
    id: 'razor',
    label: 'Philosophical Razor',
    plural: 'Philosophical Razors',
    shortLabel: 'Razor',
    description: 'Rules of thumb that shave away unlikely explanations or unnecessary effort.',
    accentVar: 'var(--kind-razor)',
    dotColor: '#1f7a5c',
  },
  'mental-model': {
    id: 'mental-model',
    label: 'Mental Model',
    plural: 'Mental Models',
    shortLabel: 'Model',
    description: 'Reusable frameworks for reasoning clearly, forecasting, and making decisions.',
    accentVar: 'var(--kind-model)',
    dotColor: '#7b4397',
  },
};

export const DOMAIN_ORDER: Domain[] = [
  'debate',
  'organizations',
  'decision-making',
  'statistics',
  'systems',
  'everyday',
];

export const DOMAIN_META: Record<Domain, { id: Domain; label: string }> = {
  debate: { id: 'debate', label: 'Debate & Rhetoric' },
  organizations: { id: 'organizations', label: 'Organizations' },
  'decision-making': { id: 'decision-making', label: 'Decision-Making' },
  statistics: { id: 'statistics', label: 'Data & Statistics' },
  systems: { id: 'systems', label: 'Systems & Tech' },
  everyday: { id: 'everyday', label: 'Everyday Life' },
};

export const TIER_META: Record<Tier, { id: Tier; label: string; description: string }> = {
  essential: {
    id: 'essential',
    label: 'Essential',
    description: 'High-leverage everyday concepts to learn first.',
  },
  intermediate: {
    id: 'intermediate',
    label: 'Intermediate',
    description: 'Subtle patterns that sharpen analytical judgment.',
  },
  'deep-cut': {
    id: 'deep-cut',
    label: 'Deep Cut',
    description: 'Specialized, nuanced, or lesser-known reasoning tools.',
  },
};

export const RELATION_META: Record<
  RelationType,
  { id: RelationType; label: string; incomingLabel: string; description: string }
> = {
  psychological_root: {
    id: 'psychological_root',
    label: 'Psychological Root',
    incomingLabel: 'Drives / Fuels',
    description: 'The underlying cognitive tendency that makes this pattern persuasive.',
  },
  often_confused_with: {
    id: 'often_confused_with',
    label: 'Often Confused With',
    incomingLabel: 'Often Confused With',
    description: 'Closely adjacent concept with a distinct mechanism.',
  },
  counterpart_to: {
    id: 'counterpart_to',
    label: 'Counterpart / Antidote',
    incomingLabel: 'Counterpart / Antidote',
    description: 'Complementary principle, mirror image, or corrective counterweight.',
  },
  related_to: {
    id: 'related_to',
    label: 'Related Concept',
    incomingLabel: 'Related Concept',
    description: 'Frequently appears alongside or reinforces this pattern.',
  },
};
