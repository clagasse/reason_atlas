import { KIND_META, type ConceptKind } from '../types/concept';

interface KindBadgeProps {
  kind: ConceptKind;
  size?: 'sm' | 'md';
  short?: boolean;
}

const PILL_CLASS: Record<ConceptKind, string> = {
  fallacy: 'kind-pill-fallacy',
  bias: 'kind-pill-bias',
  law: 'kind-pill-law',
  razor: 'kind-pill-razor',
  'mental-model': 'kind-pill-mental-model',
};

export function KindBadge({ kind, size = 'sm', short = false }: KindBadgeProps) {
  const meta = KIND_META[kind];
  const label = short ? meta.shortLabel : meta.label;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono uppercase tracking-wider font-medium ${
        PILL_CLASS[kind]
      } ${
        size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-[11px]'
      }`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full shrink-0"
        style={{ backgroundColor: meta.accentVar }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
