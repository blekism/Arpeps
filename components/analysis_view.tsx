import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { CONCEPT_LABELS, type Paper } from "@/lib/types";

const ICON = {
  Cohesive: <CheckCircle2 className="size-4 text-emerald-400" />,
  Partial: <AlertTriangle className="size-4 text-amber-400" />,
  Gap: <XCircle className="size-4 text-destructive" />,
};

export default function AnalysisView({ paper }: { paper: Paper }) {
  const score = Math.round(
    (paper.cohesion_analysis_tbl.filter((a) => a.cohesion_score === "Cohesive")
      .length /
      paper.cohesion_analysis_tbl.length) *
      100,
  );
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between rounded-lg border border-border bg-panel p-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground">
            Cohesion score
          </div>
          <div className="mt-1 text-3xl font-semibold tracking-tight">
            {paper.overall_cohesion_score}
          </div>
        </div>
        <p className="max-w-md text-right text-xs text-muted-foreground">
          A first-layer check. Cohesion measures how well each concept is
          answered by the others — not whether the paper is correct.
        </p>
      </div>

      <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-panel">
        {paper.cohesion_analysis_tbl.map((a) => (
          <div
            key={a.concepts_tbl.concept_name}
            className="flex items-start gap-3 p-4"
          >
            <div className="mt-0.5">{ICON[a.cohesion_score]}</div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <div className="text-sm font-medium">
                  {a.concepts_tbl.concept_name}
                </div>
                {/* <div className="text-xs text-muted-foreground">
                  {a.answers.length === 0
                    ? "answers nothing"
                    : `answers ${a.answers.map((k) => CONCEPT_LABELS[k]).join(", ")}`}
                </div> */}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{a.reason}</p>
            </div>
            <span
              className={`shrink-0 rounded border px-1.5 py-0.5 text-[10px] uppercase ${
                a.cohesion_score === "Cohesive"
                  ? "border-emerald-500/40 text-emerald-400"
                  : a.cohesion_score === "Partial"
                    ? "border-amber-500/40 text-amber-400"
                    : "border-destructive/50 text-destructive"
              }`}
            >
              {a.cohesion_score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
