import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from 'd3-force';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Search,
  X,
  RotateCcw,
  ArrowLeftRight,
} from 'lucide-react';
import { ALL_CONCEPTS, buildConceptGraph, getConceptById } from '../data';
import {
  DOMAIN_META,
  DOMAIN_ORDER,
  KIND_META,
  KIND_ORDER,
  RELATION_META,
  type ConceptKind,
  type Domain,
  type GraphEdge,
  type GraphNode,
  type RelationType,
} from '../types/concept';
import { ConceptDrawer } from '../components/ConceptDrawer';

interface GraphPageProps {
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

interface SimNode extends SimulationNodeDatum, GraphNode {}
interface SimLink extends SimulationLinkDatum<SimNode> {
  id: string;
  type: GraphEdge['type'];
  note?: string;
}

interface HoveredEdgeState {
  edge: GraphEdge;
  x: number;
  y: number;
}

const CANVAS_W = 1440;
const CANVAS_H = 920;

const KIND_ANCHOR: Record<ConceptKind, { x: number; y: number }> = {
  fallacy: { x: CANVAS_W * 0.24, y: CANVAS_H * 0.32 },
  bias: { x: CANVAS_W * 0.76, y: CANVAS_H * 0.32 },
  law: { x: CANVAS_W * 0.26, y: CANVAS_H * 0.72 },
  razor: { x: CANVAS_W * 0.51, y: CANVAS_H * 0.51 },
  'mental-model': { x: CANVAS_W * 0.74, y: CANVAS_H * 0.72 },
};

const ACTIVE_KIND_PILL: Record<ConceptKind, string> = {
  fallacy: 'kind-pill-fallacy',
  bias: 'kind-pill-bias',
  law: 'kind-pill-law',
  razor: 'kind-pill-razor',
  'mental-model': 'kind-pill-mental-model',
};

const RELATION_FILTERS: RelationType[] = [
  'related_to',
  'psychological_root',
  'counterpart_to',
  'often_confused_with',
];

export function GraphPage({ isBookmarked, onToggleBookmark }: GraphPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFocus = searchParams.get('focus');

  const [activeKinds, setActiveKinds] = useState<ConceptKind[]>([]);
  const [activeDomain, setActiveDomain] = useState<Domain | 'all'>('all');
  const [activeRelationType, setActiveRelationType] = useState<
    RelationType | 'all'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<HoveredEdgeState | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(initialFocus);

  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.88 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(
    null
  );
  const draggingNodeRef = useRef<{ id: string; moved: boolean } | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredConcepts = useMemo(() => {
    return ALL_CONCEPTS.filter((c) => {
      if (activeKinds.length > 0 && !activeKinds.includes(c.kind)) return false;
      if (activeDomain !== 'all' && !c.domains.includes(activeDomain)) return false;
      return true;
    });
  }, [activeKinds, activeDomain]);

  // Compute settled d3-force layout whenever node filters change
  const { nodes: initialNodes, edges: allGraphEdges } = useMemo(() => {
    const built = buildConceptGraph(filteredConcepts);
    const simNodes: SimNode[] = built.nodes.map((n, i) => {
      const anchor = KIND_ANCHOR[n.kind];
      const angle = (i * 2.39996) % (Math.PI * 2);
      const radius = 55 + (i % 8) * 26;
      return {
        ...n,
        x: anchor.x + Math.cos(angle) * radius,
        y: anchor.y + Math.sin(angle) * radius,
      };
    });

    const simLinks: SimLink[] = built.edges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      type: e.type,
      note: e.note,
    }));

    const simulation = forceSimulation<SimNode>(simNodes)
      .force(
        'link',
        forceLink<SimNode, SimLink>(simLinks)
          .id((d) => d.id)
          .distance(112)
          .strength(0.28)
      )
      .force('charge', forceManyBody().strength(-330).distanceMax(440))
      .force(
        'collide',
        forceCollide<SimNode>().radius((d) => 27 + Math.min(d.degree, 9) * 1.7)
      )
      .force(
        'x',
        forceX<SimNode>((d) => KIND_ANCHOR[d.kind].x).strength(0.095)
      )
      .force(
        'y',
        forceY<SimNode>((d) => KIND_ANCHOR[d.kind].y).strength(0.095)
      )
      .force('center', forceCenter(CANVAS_W / 2, CANVAS_H / 2))
      .stop();

    for (let i = 0; i < 230; i++) {
      simulation.tick();
    }

    return { nodes: simNodes, edges: built.edges };
  }, [filteredConcepts]);

  const visibleEdges = useMemo(() => {
    if (activeRelationType === 'all') return allGraphEdges;
    return allGraphEdges.filter((e) => e.type === activeRelationType);
  }, [allGraphEdges, activeRelationType]);

  const [nodePositions, setNodePositions] = useState<
    Record<string, { x: number; y: number }>
  >({});

  useEffect(() => {
    const next: Record<string, { x: number; y: number }> = {};
    for (const n of initialNodes) {
      next[n.id] = { x: n.x ?? CANVAS_W / 2, y: n.y ?? CANVAS_H / 2 };
    }
    setNodePositions(next);
  }, [initialNodes]);

  useEffect(() => {
    if (!initialFocus) return;
    const pos = nodePositions[initialFocus];
    if (!pos) return;
    const scale = 1.25;
    setTransform({
      scale,
      x: CANVAS_W / 2 - pos.x * scale,
      y: CANVAS_H / 2 - pos.y * scale,
    });
  }, [initialFocus, nodePositions]);

  const neighborMap = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const e of visibleEdges) {
      if (!map.has(e.source)) map.set(e.source, new Set());
      if (!map.has(e.target)) map.set(e.target, new Set());
      map.get(e.source)!.add(e.target);
      map.get(e.target)!.add(e.source);
    }
    return map;
  }, [visibleEdges]);

  const searchMatchIds = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    const matched = new Set<string>();
    for (const c of filteredConcepts) {
      if (
        c.name.toLowerCase().includes(q) ||
        c.aliases.some((a) => a.toLowerCase().includes(q))
      ) {
        matched.add(c.id);
      }
    }
    return matched;
  }, [searchQuery, filteredConcepts]);

  const focusNode = useCallback(
    (id: string) => {
      const pos = nodePositions[id];
      if (pos) {
        const scale = 1.3;
        setTransform({
          scale,
          x: CANVAS_W / 2 - pos.x * scale,
          y: CANVAS_H / 2 - pos.y * scale,
        });
      }
      setSelectedId(id);
      setSearchParams({ focus: id }, { replace: true });
    },
    [nodePositions, setSearchParams]
  );

  const resetView = () => {
    setTransform({ x: 0, y: 0, scale: 0.88 });
  };

  const zoomBy = (factor: number) => {
    setTransform((prev) => {
      const nextScale = Math.max(0.42, Math.min(2.6, prev.scale * factor));
      const ratio = nextScale / prev.scale;
      return {
        scale: nextScale,
        x: CANVAS_W / 2 - (CANVAS_W / 2 - prev.x) * ratio,
        y: CANVAS_H / 2 - (CANVAS_H / 2 - prev.y) * ratio,
      };
    });
  };

  const getSvgCoords = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const sx = ((clientX - rect.left) / rect.width) * CANVAS_W;
    const sy = ((clientY - rect.top) / rect.height) * CANVAS_H;
    return { x: sx, y: sy };
  };

  const getContainerCoords = (clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return { x: 0, y: 0 };
    const rect = container.getBoundingClientRect();
    return {
      x: Math.max(12, Math.min(rect.width - 310, clientX - rect.left + 16)),
      y: Math.max(12, Math.min(rect.height - 150, clientY - rect.top + 16)),
    };
  };

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    const pt = getSvgCoords(e.clientX, e.clientY);
    setTransform((prev) => {
      const nextScale = Math.max(0.42, Math.min(2.6, prev.scale * factor));
      const ratio = nextScale / prev.scale;
      return {
        scale: nextScale,
        x: pt.x - (pt.x - prev.x) * ratio,
        y: pt.y - (pt.y - prev.y) * ratio,
      };
    });
  };

  const handlePointerDownCanvas = (e: React.PointerEvent<SVGSVGElement>) => {
    if (draggingNodeRef.current) return;
    setHoveredEdge(null);
    setIsPanning(true);
    const pt = getSvgCoords(e.clientX, e.clientY);
    panStartRef.current = { x: pt.x, y: pt.y, tx: transform.x, ty: transform.y };
  };

  const handlePointerMoveCanvas = (e: React.PointerEvent<SVGSVGElement>) => {
    const pt = getSvgCoords(e.clientX, e.clientY);

    if (draggingNodeRef.current) {
      const id = draggingNodeRef.current.id;
      draggingNodeRef.current.moved = true;
      const worldX = (pt.x - transform.x) / transform.scale;
      const worldY = (pt.y - transform.y) / transform.scale;
      setNodePositions((prev) => ({
        ...prev,
        [id]: { x: worldX, y: worldY },
      }));
      return;
    }

    if (isPanning && panStartRef.current) {
      const dx = pt.x - panStartRef.current.x;
      const dy = pt.y - panStartRef.current.y;
      setTransform((prev) => ({
        ...prev,
        x: panStartRef.current!.tx + dx,
        y: panStartRef.current!.ty + dy,
      }));
    }
  };

  const handlePointerUpCanvas = () => {
    setIsPanning(false);
    panStartRef.current = null;
    draggingNodeRef.current = null;
  };

  const toggleKind = (kind: ConceptKind) => {
    setActiveKinds((prev) =>
      prev.includes(kind) ? prev.filter((k) => k !== kind) : [...prev, kind]
    );
  };

  const activeFocusId = hoveredEdge ? null : hoveredId ?? selectedId;
  const activeNeighbors = activeFocusId ? neighborMap.get(activeFocusId) : null;
  const selectedConcept = selectedId ? getConceptById(selectedId) ?? null : null;

  const hoveredEdgeSource = hoveredEdge
    ? getConceptById(hoveredEdge.edge.source)
    : undefined;
  const hoveredEdgeTarget = hoveredEdge
    ? getConceptById(hoveredEdge.edge.target)
    : undefined;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 pb-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Constellation Graph
          </h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Hover any node to spotlight its neighborhood, hover any connecting line to inspect the relationship, or click a node to open its field card.
          </p>
        </div>

        {/* Search & Focus Input */}
        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Highlight node (e.g. bikeshedding)..."
            aria-label="Highlight concept in graph"
            className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] pl-9 pr-8 py-2 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear highlight"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {KIND_ORDER.map((kind) => {
            const meta = KIND_META[kind];
            const active = activeKinds.includes(kind);
            return (
              <button
                key={kind}
                type="button"
                onClick={() => toggleKind(kind)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  active
                    ? ACTIVE_KIND_PILL[kind]
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: meta.accentVar }}
                />
                {meta.plural}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={activeDomain}
            onChange={(e) => setActiveDomain(e.target.value as Domain | 'all')}
            aria-label="Filter graph by domain"
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] focus:outline-none focus:border-[var(--border-strong)]"
          >
            <option value="all">All Domains</option>
            {DOMAIN_ORDER.map((d) => (
              <option key={d} value={d}>
                {DOMAIN_META[d].label}
              </option>
            ))}
          </select>

          {(activeKinds.length > 0 ||
            activeDomain !== 'all' ||
            activeRelationType !== 'all' ||
            searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setActiveKinds([]);
                setActiveDomain('all');
                setActiveRelationType('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Interactive SVG Graph Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] atlas-grid-bg shadow-xs"
      >
        {/* Top-left Stats Badge */}
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-xs px-3 py-1.5 font-mono text-[11px] text-[var(--text-muted)]">
          <span>{initialNodes.length} nodes</span>
          <span>·</span>
          <span>{visibleEdges.length} edges</span>
        </div>

        {/* Top-right Zoom Controls */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 p-1 shadow-xs">
          <button
            type="button"
            onClick={() => zoomBy(1.22)}
            aria-label="Zoom in"
            className="rounded-md p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] cursor-pointer"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => zoomBy(0.82)}
            aria-label="Zoom out"
            className="rounded-md p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] cursor-pointer"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={resetView}
            aria-label="Reset zoom and pan"
            className="rounded-md p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] cursor-pointer"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Floating Edge Tooltip */}
        {hoveredEdge && hoveredEdgeSource && hoveredEdgeTarget && (
          <div
            className="pointer-events-none absolute z-20 w-[290px] rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)]/95 backdrop-blur-md p-3.5 shadow-xl"
            style={{
              left: hoveredEdge.x,
              top: hoveredEdge.y,
            }}
            role="tooltip"
          >
            <div className="flex items-center gap-1.5 text-xs font-serif font-semibold text-[var(--text-primary)] leading-snug">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{
                  backgroundColor: KIND_META[hoveredEdgeSource.kind].accentVar,
                }}
              />
              <span className="truncate">{hoveredEdgeSource.name}</span>
              <ArrowLeftRight className="h-3 w-3 text-[var(--text-muted)] shrink-0" />
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{
                  backgroundColor: KIND_META[hoveredEdgeTarget.kind].accentVar,
                }}
              />
              <span className="truncate">{hoveredEdgeTarget.name}</span>
            </div>

            <div className="mt-1.5 inline-block rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
              {RELATION_META[hoveredEdge.edge.type].label}
            </div>

            <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
              {hoveredEdge.edge.note ??
                RELATION_META[hoveredEdge.edge.type].description}
            </p>
          </div>
        )}

        <svg
          ref={svgRef}
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          className={`h-[64vh] min-h-[460px] w-full select-none ${
            isPanning ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onWheel={handleWheel}
          onPointerDown={handlePointerDownCanvas}
          onPointerMove={handlePointerMoveCanvas}
          onPointerUp={handlePointerUpCanvas}
          onPointerLeave={() => {
            handlePointerUpCanvas();
            setHoveredEdge(null);
          }}
          role="img"
          aria-label="Interactive concept connection constellation graph"
        >
          <g
            transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}
          >
            {/* Edges (visible stroke + wide invisible hit target for easy hover) */}
            {visibleEdges.map((edge) => {
              const s = nodePositions[edge.source];
              const t = nodePositions[edge.target];
              if (!s || !t) return null;

              const isThisHoveredEdge = hoveredEdge?.edge.id === edge.id;
              const isConnectedToNode =
                activeFocusId === edge.source || activeFocusId === edge.target;
              const isHighlighted = isThisHoveredEdge || isConnectedToNode;
              const isDimmed =
                (hoveredEdge !== null && !isThisHoveredEdge) ||
                (activeFocusId !== null && !isConnectedToNode);

              const dashArray =
                edge.type === 'counterpart_to'
                  ? '6 4'
                  : edge.type === 'often_confused_with'
                  ? '2 3'
                  : undefined;

              return (
                <g key={edge.id}>
                  <line
                    x1={s.x}
                    y1={s.y}
                    x2={t.x}
                    y2={t.y}
                    stroke={
                      isHighlighted
                        ? 'var(--text-primary)'
                        : 'var(--border-strong)'
                    }
                    strokeWidth={isThisHoveredEdge ? 2.8 : isConnectedToNode ? 2 : 1.05}
                    strokeOpacity={
                      isDimmed ? 0.1 : isHighlighted ? 0.92 : 0.42
                    }
                    strokeDasharray={dashArray}
                    className="pointer-events-none"
                  />
                  {/* Wide transparent hit area for reliable edge hover */}
                  <line
                    x1={s.x}
                    y1={s.y}
                    x2={t.x}
                    y2={t.y}
                    stroke="transparent"
                    strokeWidth={14}
                    className="cursor-help"
                    onMouseEnter={(e) => {
                      const pos = getContainerCoords(e.clientX, e.clientY);
                      setHoveredEdge({ edge, x: pos.x, y: pos.y });
                    }}
                    onMouseMove={(e) => {
                      const pos = getContainerCoords(e.clientX, e.clientY);
                      setHoveredEdge({ edge, x: pos.x, y: pos.y });
                    }}
                    onMouseLeave={() => setHoveredEdge(null)}
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {initialNodes.map((node) => {
              const pos = nodePositions[node.id];
              if (!pos) return null;

              const isEdgeEndpoint =
                hoveredEdge !== null &&
                (hoveredEdge.edge.source === node.id ||
                  hoveredEdge.edge.target === node.id);
              const isFocused = activeFocusId === node.id || isEdgeEndpoint;
              const isNeighbor = activeNeighbors?.has(node.id) ?? false;
              const isSearchMatch = searchMatchIds?.has(node.id) ?? false;

              const dimmedByEdge = hoveredEdge !== null && !isEdgeEndpoint;
              const dimmedByFocus =
                activeFocusId !== null && !isFocused && !isNeighbor;
              const dimmedBySearch =
                searchMatchIds !== null && !isSearchMatch;
              const isDimmed = dimmedByEdge || dimmedByFocus || dimmedBySearch;

              const radius = 6.5 + Math.min(node.degree, 9) * 1.1;
              const showLabel =
                isFocused ||
                isNeighbor ||
                isSearchMatch ||
                node.degree >= 6 ||
                transform.scale >= 1.2 ||
                initialNodes.length <= 34;

              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  style={{
                    opacity: isDimmed ? 0.16 : 1,
                    transition: 'opacity 140ms ease',
                  }}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setHoveredEdge(null);
                    setHoveredId(node.id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setHoveredEdge(null);
                    draggingNodeRef.current = { id: node.id, moved: false };
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (draggingNodeRef.current?.moved) return;
                    setSelectedId(node.id);
                    setSearchParams({ focus: node.id }, { replace: true });
                  }}
                >
                  {(isFocused || isSearchMatch) && (
                    <circle
                      r={radius + 7}
                      fill={KIND_META[node.kind].accentVar}
                      fillOpacity={0.22}
                    />
                  )}
                  <circle
                    r={radius}
                    fill={KIND_META[node.kind].accentVar}
                    stroke="var(--bg-surface)"
                    strokeWidth={isFocused ? 3 : 2}
                  />
                  {showLabel && (
                    <text
                      y={radius + 14}
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontSize={isFocused ? 13 : 11}
                      fontWeight={isFocused || isSearchMatch ? 600 : 500}
                      style={{
                        paintOrder: 'stroke',
                        stroke: 'var(--bg-surface)',
                        strokeWidth: 4,
                        strokeLinejoin: 'round',
                      }}
                    >
                      {node.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        {/* Bottom Legend & Edge Type Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 px-4 py-2.5 text-[11px] text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider mr-1">
              Edges:
            </span>
            <button
              type="button"
              onClick={() => setActiveRelationType('all')}
              className={`rounded-md border px-2 py-0.5 text-[11px] transition-colors cursor-pointer ${
                activeRelationType === 'all'
                  ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
              }`}
            >
              All ({allGraphEdges.length})
            </button>
            {RELATION_FILTERS.map((relType) => {
              const active = activeRelationType === relType;
              const lineStyle =
                relType === 'counterpart_to'
                  ? 'border-dashed'
                  : relType === 'often_confused_with'
                  ? 'border-dotted'
                  : 'border-solid';
              return (
                <button
                  key={relType}
                  type="button"
                  onClick={() =>
                    setActiveRelationType(active ? 'all' : relType)
                  }
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] transition-colors cursor-pointer ${
                    active
                      ? 'border-[var(--text-primary)] bg-[var(--bg-surface-muted)] text-[var(--text-primary)] font-medium'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <span
                    className={`inline-block w-4 border-t-[1.5px] ${lineStyle} border-current`}
                  />
                  {RELATION_META[relType].label}
                </button>
              );
            })}
          </div>
          <span className="font-mono">
            Hover edges for details · Scroll to zoom · Drag to pan
          </span>
        </div>
      </div>

      {/* Quick Search Matches Strip */}
      {searchMatchIds && searchMatchIds.size > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] text-[var(--text-muted)]">
            Jump to match:
          </span>
          {Array.from(searchMatchIds)
            .slice(0, 8)
            .map((id) => {
              const c = getConceptById(id);
              if (!c) return null;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => focusNode(id)}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer"
                >
                  {c.name}
                </button>
              );
            })}
        </div>
      )}

      {/* Slide-over Inspector Drawer */}
      <ConceptDrawer
        concept={selectedConcept}
        onClose={() => {
          setSelectedId(null);
          setSearchParams({}, { replace: true });
        }}
        onSelectConcept={(id) => focusNode(id)}
        isBookmarked={isBookmarked}
        onToggleBookmark={onToggleBookmark}
      />
    </div>
  );
}
