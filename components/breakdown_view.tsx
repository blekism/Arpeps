import { type Paper } from "@/lib/types";

export default function BreakdownView({ paper }: { paper: Paper }) {
  return (
    <section className="grid gap-3 md:grid-cols-2">
      {paper.extracted_concepts_tbl.map((k) => (
        <div
          key={k.concept_id}
          className="rounded-lg border border-border bg-panel p-4"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">
              {k.concepts_tbl.concept_name}
            </div>
            <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              {k.concepts_tbl.concept_name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            {k.extracted_content}
          </p>
        </div>
      ))}
    </section>
  );
}
