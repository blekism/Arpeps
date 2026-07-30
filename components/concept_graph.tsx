"use client";

import { useMemo, useState } from "react";
import { CONCEPT_LABELS, type ConceptKey, type Paper } from "@/lib/types";

type NodePos = { key: ConceptKey; x: number; y: number };

const coordinates = [
  { x: 50, y: 12 },
  { x: 12, y: 42 },
  { x: 88, y: 42 },
  { x: 30, y: 82 },
  { x: 70, y: 82 },
];

export default function ConceptGraph({ paper }: { paper: Paper }) {

    const enhancedPaperData = paper.extracted_concepts_tbl.map((papers, index) => ({
        ...papers,
        x: coordinates[index]?.x ?? 0,
        y: coordinates[index]?.y ?? 0,
    }));

  const [hoverNode, setHoverNode] = useState<string | null>(null);
  const [hoverEdge, setHoverEdge] = useState<number | null>(null);

  const nodeMap = useMemo(() => 
        Object.fromEntries(enhancedPaperData.map(n => [n.concepts_tbl.concept_name, n])),  
    [enhancedPaperData]) as Record<string, typeof enhancedPaperData[number]>;
  

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-panel">
      {/* grid backdrop */}
      <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* edges */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {paper.concept_relationships_tbl.map((c, i) => {
          const a = nodeMap[c.from.concept_name];
          const b = nodeMap[c.to.concept_name];
          if (!a || !b) return null;
          const active = hoverEdge === i;
          const stroke = c.kind === 1 ? "#3b82f6" : "#f59e0b";
          return (
            <g key={i}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={stroke}
                strokeWidth={active ? 0.9 : 0.5}
                strokeDasharray={
                  c.kind === 2 ? "1.4 1.4" : undefined
                }
                opacity={active ? 1 : 0.75}
                vectorEffect="non-scaling-stroke"
              />
              {/* wide invisible hit-line */}
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="transparent"
                strokeWidth={4}
                onMouseEnter={() => setHoverEdge(i)}
                onMouseLeave={() => setHoverEdge(null)}
                style={{ cursor: "pointer" }}
              />
            </g>
          );
        })}
      </svg>

      {/* edge tooltip */}
      {hoverEdge !== null &&
        (() => {
          const c = paper.concept_relationships_tbl[hoverEdge];
          const a = nodeMap[c.from.concept_name];
          const b = nodeMap[c.to.concept_name];
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          return (
            <div
              className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-lg"
              style={{ left: `${mx}%`, top: `${my}%`, maxWidth: 260 }}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <span
                  className={`inline-block h-2 w-4 ${
                    c.kind === 1 ? "bg-brand" : "bg-amber-500"
                  }`}
                  style={
                    c.kind === 2
                      ? {
                          backgroundImage:
                            "repeating-linear-gradient(90deg,#f59e0b 0 3px,transparent 3px 6px)",
                          background: "transparent",
                        }
                      : undefined
                  }
                />
                <span className="font-medium">
                  {c.kind === 1
                    ? "Actual connection"
                    : "Theoretical (missing)"}
                </span>
              </div>
              <div className="mb-1 font-mono text-[10px] text-muted-foreground">
                {c.from.concept_name} → {c.to.concept_name}
              </div>
              <div className="text-foreground">{c.reason}</div>
            </div>
          );
        })()}

      {/* nodes */}
      {enhancedPaperData.map((n) => {
        const isHover = hoverNode === n.concepts_tbl.concept_name;
        return (
          <div
            key={n.concept_id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onMouseEnter={() => setHoverNode(n.concepts_tbl.concept_name)}
            onMouseLeave={() => setHoverNode(null)}
          >
            {isHover && (
              <div className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-popover px-2 py-1 text-[10px] uppercase tracking-wide text-muted-foreground shadow">
                {n.concepts_tbl.concept_name}
              </div>
            )}
            <div
              className={`w-40 cursor-default rounded-md border bg-panel-2 p-3 shadow transition ${
                isHover ? "border-brand shadow-brand/20" : "border-border"
              }`}
            >
              <div className="mb-1 font-mono text-[10px] text-muted-foreground">
                {n.concepts_tbl.concept_name}
              </div>
              <div className="line-clamp-3 text-xs leading-snug">
                {n.extracted_content}
              </div>
            </div>
          </div>
        );
      })}

      {/* legend */}
      <div className="absolute bottom-3 right-3 flex items-center gap-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-[10px] text-muted-foreground backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-5 bg-brand" /> Actual
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-0.5 w-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg,#f59e0b 0 3px,transparent 3px 6px)",
            }}
          />
          Theoretical
        </div>
      </div>
    </div>
  );
}
