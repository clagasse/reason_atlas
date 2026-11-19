import { KIND_META, type Concept } from '../types/concept';

interface ConceptVisualProps {
  concept: Concept;
  className?: string;
}

type ArchetypeId =
  | 'bomber'
  | 'bikeshed'
  | 'strawman'
  | 'steelman'
  | 'motte-bailey'
  | 'dunning-kruger'
  | 'loss-aversion'
  | 'goodhart'
  | 'simpson'
  | 'venn'
  | 'sharpshooter'
  | 'pareto'
  | 'network'
  | 'pyramid'
  | 'parkinson'
  | 'dominoes'
  | 'loop'
  | 'cynefin'
  | 'wave'
  | 'fork'
  | 'scale'
  | 'confounder'
  | 'goalpost'
  | 'funnel'
  | 'spotlight'
  | 'razor'
  | 'anchor'
  | 'crowd'
  | 'grid'
  | 'matrix'
  | 'shield'
  | 'fence';

const CONCEPT_ARCHETYPE_MAP: Record<string, ArchetypeId> = {
  // Signature custom schematics
  'survivorship-bias': 'bomber',
  'law-of-triviality': 'bikeshed',
  'straw-man': 'strawman',
  'steel-manning': 'steelman',
  'motte-and-bailey': 'motte-bailey',
  'dunning-kruger-effect': 'dunning-kruger',
  'loss-aversion': 'loss-aversion',
  'goodharts-law': 'goodhart',
  'cobra-effect': 'goodhart',
  'campbells-law': 'goodhart',
  'simpsons-paradox': 'simpson',
  'conjunction-fallacy': 'venn',
  'texas-sharpshooter': 'sharpshooter',
  'pareto-principle': 'pareto',
  'prices-law': 'pareto',
  'sturgeons-law': 'pareto',
  'brooks-law': 'network',
  'metcalfes-law': 'network',
  'conways-law': 'network',
  'peter-principle': 'pyramid',
  'authority-bias': 'pyramid',
  'appeal-to-authority': 'pyramid',
  'parkinsons-law': 'parkinson',
  'hofstadters-law': 'parkinson',
  'planning-fallacy': 'parkinson',
  'jevons-paradox': 'parkinson',
  'slippery-slope': 'dominoes',
  'second-order-thinking': 'dominoes',
  'diderot-effect': 'dominoes',
  'circular-reasoning': 'loop',
  'ooda-loop': 'loop',
  'bayesian-updating': 'loop',
  'cynefin-framework': 'cynefin',
  'peak-end-rule': 'wave',
  'regression-to-the-mean': 'wave',
  'amaras-law': 'wave',
  'recency-bias': 'wave',
  'chestertons-fence': 'fence',
  // Archetypes for remaining concepts
  'false-dilemma': 'fork',
  'nirvana-fallacy': 'fork',
  'opportunity-cost': 'fork',
  'regret-minimization': 'fork',
  'middle-ground-fallacy': 'scale',
  'tu-quoque': 'scale',
  'framing-effect': 'scale',
  'expected-value': 'scale',
  'correlation-not-causation': 'confounder',
  'post-hoc': 'confounder',
  'affirming-the-consequent': 'confounder',
  'moving-the-goalposts': 'goalpost',
  'no-true-scotsman': 'goalpost',
  'equivocation': 'goalpost',
  'base-rate-fallacy': 'grid',
  'composition-fallacy': 'grid',
  'division-fallacy': 'grid',
  'tragedy-of-the-commons': 'grid',
  'berksons-paradox': 'funnel',
  'confirmation-bias': 'funnel',
  'hasty-generalization': 'funnel',
  'anecdotal-fallacy': 'funnel',
  'availability-heuristic': 'spotlight',
  'spotlight-effect': 'spotlight',
  'halo-effect': 'spotlight',
  'baader-meinhof': 'spotlight',
  'streisand-effect': 'spotlight',
  'red-herring': 'spotlight',
  'occams-razor': 'razor',
  'hanlons-razor': 'razor',
  'hitchens-razor': 'razor',
  'sagan-standard': 'razor',
  'hickams-dictum': 'razor',
  'poppers-falsifiability': 'razor',
  'grices-razor': 'razor',
  'alders-razor': 'razor',
  'humes-razor': 'razor',
  'duck-test': 'razor',
  'suttons-law': 'razor',
  'einsteins-razor': 'razor',
  'anchoring-bias': 'anchor',
  'sunk-cost-fallacy': 'anchor',
  'status-quo-bias': 'anchor',
  'endowment-effect': 'anchor',
  'ikea-effect': 'anchor',
  'appeal-to-tradition': 'anchor',
  'bandwagon': 'crowd',
  'groupthink': 'crowd',
  'bystander-effect': 'crowd',
  'linuss-law': 'crowd',
  'cunninghams-law': 'crowd',
  'nash-equilibrium': 'matrix',
  'gamblers-fallacy': 'matrix',
  'hyperbolic-discounting': 'matrix',
  'margin-of-safety': 'shield',
  'murphys-law': 'shield',
  'pre-mortem': 'shield',
  'red-teaming': 'shield',
  'postels-law': 'shield',
  'inversion': 'shield',
};

function getArchetype(concept: Concept): ArchetypeId {
  const mapped = CONCEPT_ARCHETYPE_MAP[concept.id];
  if (mapped) return mapped;
  switch (concept.kind) {
    case 'fallacy':
      return 'fork';
    case 'bias':
      return 'spotlight';
    case 'law':
      return 'network';
    case 'razor':
      return 'razor';
    case 'mental-model':
      return 'loop';
  }
}

export function ConceptVisual({ concept, className = '' }: ConceptVisualProps) {
  const accent = KIND_META[concept.kind].accentVar;
  const archetype = getArchetype(concept);

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 92"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderSchematic(archetype, accent)}
      </svg>
    </div>
  );
}

function renderSchematic(archetype: ArchetypeId, accent: string) {
  switch (archetype) {
    case 'bomber':
      return (
        <g>
          {/* Bomber fuselage & wings silhouette */}
          <path
            d="M120 14 L125 34 L182 44 L182 52 L125 50 L124 72 L138 77 L138 82 L102 82 L102 77 L116 72 L115 50 L58 52 L58 44 L115 34 Z"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.5"
          />
          {/* Red survivor hit clusters on outer wings & tail */}
          <circle cx="76" cy="48" r="2.3" fill={accent} />
          <circle cx="84" cy="46" r="2" fill={accent} />
          <circle cx="92" cy="49" r="2.2" fill={accent} />
          <circle cx="150" cy="47" r="2.3" fill={accent} />
          <circle cx="162" cy="49" r="2" fill={accent} />
          <circle cx="120" cy="76" r="2.2" fill={accent} />
          <circle cx="114" cy="79" r="1.8" fill={accent} />
          {/* Highlighted unhit critical zones (cockpit & engines) */}
          <circle
            cx="120"
            cy="26"
            r="6"
            stroke={accent}
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <circle
            cx="103"
            cy="46"
            r="5.5"
            stroke={accent}
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <circle
            cx="137"
            cy="46"
            r="5.5"
            stroke={accent}
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        </g>
      );

    case 'bikeshed':
      return (
        <g>
          {/* Complex nuclear reactor / cooling tower on left (tiny time bar) */}
          <path
            d="M52 70 C57 52, 57 36, 54 24 L76 24 C73 36, 73 52, 78 70 Z"
            fill="var(--bg-surface)"
            stroke="var(--text-muted)"
            strokeWidth="1.4"
          />
          <rect
            x="53"
            y="74"
            width="24"
            height="4"
            rx="2"
            fill="var(--text-muted)"
            opacity="0.45"
          />
          <text
            x="65"
            y="18"
            textAnchor="middle"
            fontSize="8"
            fontFamily="var(--font-mono)"
            fill="var(--text-muted)"
          >
            $10M · 3m
          </text>

          {/* Simple tiny bike shed on right with huge attention aura */}
          <circle cx="168" cy="49" r="26" fill={accent} fillOpacity="0.12" />
          <path
            d="M152 46 L168 34 L184 46 V66 H152 Z"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="1.8"
          />
          <rect
            x="144"
            y="74"
            width="48"
            height="4"
            rx="2"
            fill={accent}
          />
          <text
            x="168"
            y="18"
            textAnchor="middle"
            fontSize="8"
            fontFamily="var(--font-mono)"
            fill={accent}
            fontWeight="600"
          >
            SHED · 45m
          </text>
        </g>
      );

    case 'strawman':
      return (
        <g>
          {/* Solid real figure */}
          <circle
            cx="76"
            cy="28"
            r="7"
            fill="var(--bg-surface)"
            stroke="var(--text-primary)"
            strokeWidth="1.8"
          />
          <rect
            x="67"
            y="38"
            width="18"
            height="28"
            rx="4"
            fill="var(--bg-surface)"
            stroke="var(--text-primary)"
            strokeWidth="1.8"
          />
          {/* Arrow distorting to straw stick figure */}
          <path
            d="M98 48 H134"
            stroke="var(--text-muted)"
            strokeWidth="1.4"
            strokeDasharray="3 3"
          />
          <polygon points="134,45 140,48 134,51" fill="var(--text-muted)" />
          {/* Tilted fragile straw figure */}
          <g transform="rotate(14 166 48)">
            <circle
              cx="166"
              cy="27"
              r="6.5"
              stroke={accent}
              strokeWidth="1.7"
              strokeDasharray="3 2"
            />
            <line
              x1="166"
              y1="34"
              x2="166"
              y2="58"
              stroke={accent}
              strokeWidth="1.8"
            />
            <line
              x1="152"
              y1="43"
              x2="180"
              y2="43"
              stroke={accent}
              strokeWidth="1.8"
            />
            <line
              x1="166"
              y1="58"
              x2="156"
              y2="72"
              stroke={accent}
              strokeWidth="1.7"
            />
            <line
              x1="166"
              y1="58"
              x2="176"
              y2="72"
              stroke={accent}
              strokeWidth="1.7"
            />
          </g>
        </g>
      );

    case 'steelman':
      return (
        <g>
          {/* Rough draft circle */}
          <circle
            cx="74"
            cy="46"
            r="14"
            stroke="var(--text-muted)"
            strokeWidth="1.4"
            strokeDasharray="3 3"
          />
          <path
            d="M98 46 H132"
            stroke={accent}
            strokeWidth="1.6"
          />
          <polygon points="132,43 139,46 132,49" fill={accent} />
          {/* Reinforced geometric shield / diamond */}
          <polygon
            points="168,20 190,36 182,68 154,68 146,36"
            fill={accent}
            fillOpacity="0.14"
            stroke={accent}
            strokeWidth="2"
          />
          <polygon
            points="168,28 182,39 176,61 160,61 154,39"
            stroke={accent}
            strokeWidth="1.2"
          />
        </g>
      );

    case 'motte-bailey':
      return (
        <g>
          {/* Motte hill + stone tower */}
          <path
            d="M44 74 Q74 44 104 74 Z"
            fill="var(--bg-surface-muted)"
            stroke="var(--text-secondary)"
            strokeWidth="1.4"
          />
          <rect
            x="65"
            y="26"
            width="18"
            height="26"
            fill="var(--bg-surface)"
            stroke="var(--text-primary)"
            strokeWidth="1.6"
          />
          {/* Open bailey courtyard */}
          <rect
            x="136"
            y="42"
            width="54"
            height="28"
            rx="4"
            fill={accent}
            fillOpacity="0.12"
            stroke={accent}
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          {/* Retreat / advance arrows */}
          <path
            d="M132 48 C116 38, 102 38, 88 44"
            stroke={accent}
            strokeWidth="1.5"
          />
          <polygon points="89,41 84,45 91,47" fill={accent} />
        </g>
      );

    case 'dunning-kruger':
      return (
        <g>
          {/* Axes */}
          <line
            x1="44"
            y1="74"
            x2="202"
            y2="74"
            stroke="var(--text-muted)"
            strokeWidth="1.2"
          />
          <line
            x1="44"
            y1="74"
            x2="44"
            y2="18"
            stroke="var(--text-muted)"
            strokeWidth="1.2"
          />
          {/* Mount Stupid -> Valley -> Slope curve */}
          <path
            d="M46 70 C58 14, 74 14, 88 46 C100 72, 114 70, 146 48 C168 34, 184 30, 198 28"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="67" cy="23" r="3.5" fill={accent} />
          <circle
            cx="106"
            cy="64"
            r="3"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="1.6"
          />
          <circle cx="196" cy="28" r="3" fill={accent} />
        </g>
      );

    case 'loss-aversion':
      return (
        <g>
          {/* Quadrant axes */}
          <line
            x1="48"
            y1="42"
            x2="192"
            y2="42"
            stroke="var(--text-muted)"
            strokeWidth="1.1"
          />
          <line
            x1="120"
            y1="12"
            x2="120"
            y2="82"
            stroke="var(--text-muted)"
            strokeWidth="1.1"
          />
          {/* Shallow gain curve (top right) vs steep loss drop (bottom left) */}
          <path
            d="M72 80 C94 76, 110 62, 120 42 C132 28, 156 24, 184 22"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="80" cy="77" r="3.2" fill={accent} />
          <circle cx="174" cy="23" r="3.2" fill="var(--text-secondary)" />
          <text
            x="86"
            y="64"
            fontSize="8"
            fontFamily="var(--font-mono)"
            fill={accent}
          >
            −2x PAIN
          </text>
        </g>
      );

    case 'goodhart':
      return (
        <g>
          {/* Target threshold vertical line */}
          <line
            x1="124"
            y1="14"
            x2="124"
            y2="78"
            stroke="var(--text-muted)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          {/* Proxy metric shoots up */}
          <path
            d="M46 66 Q90 56 124 44 Q158 28 194 16"
            stroke={accent}
            strokeWidth="2.2"
          />
          {/* True goal collapses after target set */}
          <path
            d="M46 68 Q90 58 124 46 Q158 52 194 72"
            stroke="var(--text-secondary)"
            strokeWidth="1.8"
            strokeDasharray="4 3"
          />
          <circle cx="124" cy="45" r="3.2" fill={accent} />
        </g>
      );

    case 'simpson':
      return (
        <g>
          {/* Two positive subgroup lines */}
          <line
            x1="56"
            y1="42"
            x2="112"
            y2="20"
            stroke={accent}
            strokeWidth="2.2"
          />
          <line
            x1="128"
            y1="72"
            x2="184"
            y2="50"
            stroke={accent}
            strokeWidth="2.2"
          />
          {/* Pooled negative aggregate trendline */}
          <line
            x1="52"
            y1="24"
            x2="188"
            y2="68"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <circle cx="72" cy="36" r="2.5" fill={accent} />
          <circle cx="96" cy="26" r="2.5" fill={accent} />
          <circle cx="144" cy="66" r="2.5" fill={accent} />
          <circle cx="168" cy="56" r="2.5" fill={accent} />
        </g>
      );

    case 'venn':
      return (
        <g>
          <circle
            cx="102"
            cy="46"
            r="26"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
          <circle
            cx="138"
            cy="46"
            r="26"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
          {/* Intersection lens */}
          <path
            d="M120 26.5 A26 26 0 0 1 120 65.5 A26 26 0 0 1 120 26.5 Z"
            fill={accent}
            fillOpacity="0.32"
            stroke={accent}
            strokeWidth="1.8"
          />
          <text
            x="84"
            y="49"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="var(--text-secondary)"
          >
            A
          </text>
          <text
            x="151"
            y="49"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="var(--text-secondary)"
          >
            B
          </text>
        </g>
      );

    case 'sharpshooter':
      return (
        <g>
          {/* Scattered random shots */}
          <circle cx="62" cy="26" r="2.2" fill="var(--text-muted)" />
          <circle cx="78" cy="66" r="2.2" fill="var(--text-muted)" />
          <circle cx="104" cy="30" r="2.2" fill="var(--text-muted)" />
          <circle cx="182" cy="64" r="2.2" fill="var(--text-muted)" />
          {/* Cherry-picked cluster + after-the-fact bullseye */}
          <circle
            cx="148"
            cy="44"
            r="22"
            stroke={accent}
            strokeWidth="1.8"
          />
          <circle
            cx="148"
            cy="44"
            r="12"
            stroke={accent}
            strokeWidth="1.3"
            strokeDasharray="3 2"
          />
          <circle cx="144" cy="41" r="2.4" fill={accent} />
          <circle cx="153" cy="43" r="2.4" fill={accent} />
          <circle cx="147" cy="49" r="2.4" fill={accent} />
        </g>
      );

    case 'pareto':
      return (
        <g>
          {/* Power-law 80/20 bars */}
          <rect x="62" y="18" width="18" height="56" rx="3" fill={accent} />
          <rect
            x="88"
            y="34"
            width="18"
            height="40"
            rx="3"
            fill={accent}
            fillOpacity="0.65"
          />
          <rect
            x="114"
            y="54"
            width="18"
            height="20"
            rx="3"
            fill="var(--text-muted)"
            fillOpacity="0.35"
          />
          <rect
            x="140"
            y="62"
            width="18"
            height="12"
            rx="3"
            fill="var(--text-muted)"
            fillOpacity="0.35"
          />
          <rect
            x="166"
            y="67"
            width="18"
            height="7"
            rx="3"
            fill="var(--text-muted)"
            fillOpacity="0.35"
          />
        </g>
      );

    case 'network':
      return (
        <g>
          {/* Complete 6-node polygon graph n(n-1)/2 */}
          {[
            [120, 16],
            [152, 31],
            [152, 61],
            [120, 76],
            [88, 61],
            [88, 31],
          ].map(([x1, y1], i, arr) =>
            arr
              .slice(i + 1)
              .map(([x2, y2], j) => (
                <line
                  key={`${i}-${j}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={
                    (i + j) % 3 === 0 ? accent : 'var(--border-strong)'
                  }
                  strokeWidth={(i + j) % 3 === 0 ? '1.4' : '1'}
                />
              ))
          )}
          {[
            [120, 16],
            [152, 31],
            [152, 61],
            [120, 76],
            [88, 61],
            [88, 31],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4.2"
              fill={i === 0 || i === 2 ? accent : 'var(--bg-surface)'}
              stroke={accent}
              strokeWidth="1.8"
            />
          ))}
        </g>
      );

    case 'pyramid':
      return (
        <g>
          {/* Hierarchy tiers */}
          <polygon
            points="120,16 172,74 68,74"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
          <line
            x1="86"
            y1="54"
            x2="154"
            y2="54"
            stroke="var(--border-strong)"
            strokeWidth="1.3"
          />
          <line
            x1="103"
            y1="35"
            x2="137"
            y2="35"
            stroke={accent}
            strokeWidth="1.6"
            strokeDasharray="3 2"
          />
          {/* Promotion arrow stalling at top tier */}
          <path d="M120 68 V40" stroke={accent} strokeWidth="2" />
          <polygon points="116,42 120,35 124,42" fill={accent} />
          <circle cx="120" cy="27" r="3.5" fill={accent} />
        </g>
      );

    case 'parkinson':
      return (
        <g>
          {/* Compact task vs expanded task filling container */}
          <rect
            x="54"
            y="24"
            width="56"
            height="14"
            rx="4"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.5"
          />
          <rect
            x="57"
            y="27"
            width="50"
            height="8"
            rx="2.5"
            fill="var(--text-secondary)"
            fillOpacity="0.4"
          />
          <rect
            x="54"
            y="50"
            width="132"
            height="16"
            rx="4"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="1.6"
          />
          <rect
            x="57"
            y="53"
            width="126"
            height="10"
            rx="2.5"
            fill={accent}
            fillOpacity="0.28"
          />
          <path d="M116 58 H172" stroke={accent} strokeWidth="1.6" />
          <polygon points="172,55 178,58 172,61" fill={accent} />
        </g>
      );

    case 'dominoes':
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => {
            const x = 62 + i * 28;
            const angle = i * 13;
            const isLast = i >= 3;
            return (
              <rect
                key={i}
                x={x}
                y="28"
                width="10"
                height="42"
                rx="2"
                transform={`rotate(${angle} ${x + 5} 70)`}
                fill={isLast ? accent : 'var(--bg-surface)'}
                fillOpacity={isLast ? 0.25 : 1}
                stroke={isLast ? accent : 'var(--text-secondary)'}
                strokeWidth="1.6"
              />
            );
          })}
        </g>
      );

    case 'loop':
      return (
        <g>
          <circle
            cx="120"
            cy="46"
            r="25"
            stroke={accent}
            strokeWidth="2"
            strokeDasharray="36 10"
          />
          <circle
            cx="120"
            cy="21"
            r="4.5"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="2"
          />
          <circle
            cx="145"
            cy="46"
            r="4.5"
            fill={accent}
          />
          <circle
            cx="120"
            cy="71"
            r="4.5"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="2"
          />
          <circle
            cx="95"
            cy="46"
            r="4.5"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="2"
          />
        </g>
      );

    case 'cynefin':
      return (
        <g>
          <rect
            x="68"
            y="16"
            width="48"
            height="27"
            rx="4"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.4"
          />
          <rect
            x="124"
            y="16"
            width="48"
            height="27"
            rx="4"
            fill={accent}
            fillOpacity="0.16"
            stroke={accent}
            strokeWidth="1.7"
          />
          <rect
            x="68"
            y="49"
            width="48"
            height="27"
            rx="4"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.4"
          />
          <rect
            x="124"
            y="49"
            width="48"
            height="27"
            rx="4"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.4"
          />
          <circle cx="148" cy="29.5" r="4" fill={accent} />
        </g>
      );

    case 'wave':
      return (
        <g>
          <line
            x1="46"
            y1="52"
            x2="194"
            y2="52"
            stroke="var(--text-muted)"
            strokeWidth="1.1"
            strokeDasharray="3 3"
          />
          <path
            d="M48 56 Q72 64 92 48 T134 20 T168 58 T192 34"
            stroke={accent}
            strokeWidth="2.2"
            fill="none"
          />
          <circle cx="132" cy="20" r="4" fill={accent} />
          <circle
            cx="192"
            cy="34"
            r="4"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="2"
          />
        </g>
      );

    case 'fence':
      return (
        <g>
          {/* Road perspective lines */}
          <line
            x1="70"
            y1="80"
            x2="104"
            y2="16"
            stroke="var(--text-muted)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <line
            x1="170"
            y1="80"
            x2="136"
            y2="16"
            stroke="var(--text-muted)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          {/* Chesterton's Fence across the road */}
          {[78, 99, 120, 141, 162].map((x) => (
            <rect
              key={x}
              x={x - 3}
              y="32"
              width="6"
              height="32"
              rx="1.5"
              fill="var(--bg-surface)"
              stroke={accent}
              strokeWidth="1.6"
            />
          ))}
          <line
            x1="72"
            y1="42"
            x2="168"
            y2="42"
            stroke={accent}
            strokeWidth="2"
          />
          <line
            x1="72"
            y1="54"
            x2="168"
            y2="54"
            stroke={accent}
            strokeWidth="2"
          />
        </g>
      );

    case 'fork':
      return (
        <g>
          {/* Two rigid extreme branches + hidden middle path */}
          <path
            d="M56 46 H98 L158 22"
            stroke="var(--text-secondary)"
            strokeWidth="1.8"
          />
          <path
            d="M98 46 L158 70"
            stroke="var(--text-secondary)"
            strokeWidth="1.8"
          />
          <path
            d="M98 46 H172"
            stroke={accent}
            strokeWidth="2.2"
            strokeDasharray="4 3"
          />
          <circle
            cx="56"
            cy="46"
            r="4"
            fill="var(--bg-surface)"
            stroke="var(--text-primary)"
            strokeWidth="1.8"
          />
          <circle cx="162" cy="21" r="4" fill="var(--text-secondary)" />
          <circle cx="162" cy="71" r="4" fill="var(--text-secondary)" />
          <circle cx="176" cy="46" r="4.8" fill={accent} />
        </g>
      );

    case 'scale':
      return (
        <g>
          {/* Fulcrum */}
          <polygon
            points="120,56 130,74 110,74"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
          {/* Tilted balance beam */}
          <line
            x1="68"
            y1="48"
            x2="172"
            y2="34"
            stroke="var(--text-primary)"
            strokeWidth="2"
          />
          <circle cx="72" cy="48" r="8" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.8" />
          <circle
            cx="168"
            cy="34"
            r="5.5"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
        </g>
      );

    case 'confounder':
      return (
        <g>
          {/* Hidden variable C at top driving both A and B */}
          <circle
            cx="120"
            cy="22"
            r="9"
            fill={accent}
            fillOpacity="0.18"
            stroke={accent}
            strokeWidth="1.8"
          />
          <circle
            cx="76"
            cy="66"
            r="9"
            fill="var(--bg-surface)"
            stroke="var(--text-primary)"
            strokeWidth="1.6"
          />
          <circle
            cx="164"
            cy="66"
            r="9"
            fill="var(--bg-surface)"
            stroke="var(--text-primary)"
            strokeWidth="1.6"
          />
          <line
            x1="113"
            y1="29"
            x2="83"
            y2="58"
            stroke={accent}
            strokeWidth="1.6"
          />
          <line
            x1="127"
            y1="29"
            x2="157"
            y2="58"
            stroke={accent}
            strokeWidth="1.6"
          />
          <line
            x1="88"
            y1="66"
            x2="152"
            y2="66"
            stroke="var(--text-muted)"
            strokeWidth="1.4"
            strokeDasharray="3 3"
          />
        </g>
      );

    case 'goalpost':
      return (
        <g>
          {/* Original goalpost vs shifted goalpost */}
          <path
            d="M78 72 V32 H102 V72"
            stroke="var(--text-muted)"
            strokeWidth="1.6"
            strokeDasharray="3 3"
          />
          <path
            d="M142 72 V26 H170 V72"
            stroke={accent}
            strokeWidth="2.2"
          />
          <path d="M108 48 H134" stroke={accent} strokeWidth="1.6" />
          <polygon points="134,45 140,48 134,51" fill={accent} />
        </g>
      );

    case 'funnel':
      return (
        <g>
          <polygon
            points="76,20 164,20 134,52 134,74 106,74 106,52"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
          <circle cx="96" cy="30" r="3" fill="var(--text-muted)" />
          <circle cx="120" cy="28" r="3" fill={accent} />
          <circle cx="142" cy="31" r="3" fill="var(--text-muted)" />
          <circle cx="120" cy="64" r="3.8" fill={accent} />
        </g>
      );

    case 'spotlight':
      return (
        <g>
          {/* Beam cone */}
          <polygon
            points="72,22 174,34 152,74"
            fill={accent}
            fillOpacity="0.16"
          />
          <circle cx="72" cy="22" r="5" fill="var(--text-primary)" />
          <circle
            cx="154"
            cy="52"
            r="9"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="2.2"
          />
          <circle cx="104" cy="66" r="4" fill="var(--text-muted)" opacity="0.4" />
        </g>
      );

    case 'razor':
      return (
        <g>
          {/* Tangled curve on left, clean razor slash, straight line on right */}
          <path
            d="M48 46 C60 20, 74 72, 86 34 C94 18, 102 64, 114 46"
            stroke="var(--text-muted)"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <line
            x1="126"
            y1="16"
            x2="114"
            y2="76"
            stroke={accent}
            strokeWidth="2.4"
          />
          <line
            x1="124"
            y1="46"
            x2="192"
            y2="46"
            stroke={accent}
            strokeWidth="2.4"
          />
          <circle cx="188" cy="46" r="3.5" fill={accent} />
        </g>
      );

    case 'anchor':
      return (
        <g>
          <circle
            cx="120"
            cy="24"
            r="6"
            fill="var(--bg-surface)"
            stroke={accent}
            strokeWidth="2"
          />
          <line
            x1="120"
            y1="30"
            x2="120"
            y2="72"
            stroke={accent}
            strokeWidth="2.2"
          />
          <line
            x1="104"
            y1="42"
            x2="136"
            y2="42"
            stroke={accent}
            strokeWidth="2"
          />
          <path
            d="M94 56 C94 72, 146 72, 146 56"
            stroke={accent}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
      );

    case 'crowd':
      return (
        <g>
          {[
            [86, 46],
            [102, 34],
            [102, 58],
            [120, 46],
            [138, 34],
            [138, 58],
            [154, 46],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i === 3 ? '7.5' : '5.5'}
              fill={i === 3 ? accent : 'var(--bg-surface)'}
              fillOpacity={i === 3 ? 0.25 : 1}
              stroke={i === 3 ? accent : 'var(--text-secondary)'}
              strokeWidth="1.7"
            />
          ))}
        </g>
      );

    case 'grid':
      return (
        <g>
          {Array.from({ length: 15 }).map((_, idx) => {
            const col = idx % 5;
            const row = Math.floor(idx / 5);
            const isHighlighted = idx === 6 || idx === 8;
            return (
              <rect
                key={idx}
                x={76 + col * 19}
                y={22 + row * 17}
                width="13"
                height="12"
                rx="2.5"
                fill={isHighlighted ? accent : 'var(--bg-surface)'}
                fillOpacity={isHighlighted ? 0.85 : 1}
                stroke={isHighlighted ? accent : 'var(--border-strong)'}
                strokeWidth="1.4"
              />
            );
          })}
        </g>
      );

    case 'matrix':
      return (
        <g>
          <rect
            x="80"
            y="18"
            width="80"
            height="56"
            rx="6"
            fill="var(--bg-surface)"
            stroke="var(--text-secondary)"
            strokeWidth="1.6"
          />
          <line
            x1="120"
            y1="18"
            x2="120"
            y2="74"
            stroke="var(--border-strong)"
            strokeWidth="1.3"
          />
          <line
            x1="80"
            y1="46"
            x2="160"
            y2="46"
            stroke="var(--border-strong)"
            strokeWidth="1.3"
          />
          <rect
            x="124"
            y="50"
            width="32"
            height="20"
            rx="3"
            fill={accent}
            fillOpacity="0.24"
            stroke={accent}
            strokeWidth="1.6"
          />
        </g>
      );

    case 'shield':
      return (
        <g>
          <path
            d="M120 16 L152 28 V48 C152 64, 136 74, 120 78 C104 74, 88 64, 88 48 V28 Z"
            fill={accent}
            fillOpacity="0.14"
            stroke={accent}
            strokeWidth="2"
          />
          <path
            d="M110 47 L117 54 L132 39"
            stroke={accent}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
  }
}
