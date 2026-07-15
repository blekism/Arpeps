import { CONCEPT_LABELS, type Paper, type ConceptKey } from "@/backend/read";

const ORDER: ConceptKey[] = [
  "problem",
  "methodology",
  "solution",
  "literature",
  "result",
];

export default function BreakdownView({ paper }: { paper: Paper }) {
  return (
    <section className="grid gap-3 md:grid-cols-2">
      {ORDER.map((k) => (
        <div key={k} className="rounded-lg border border-border bg-panel p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">
              {CONCEPT_LABELS[k]}
            </div>
            <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              {k}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            {paper.concepts[k]}
          </p>
        </div>
      ))}
    </section>
  );
}
