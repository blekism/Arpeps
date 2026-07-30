import Link from "next/link";
import { FileCode, ChevronRight } from "lucide-react";
import type { Paper } from "@/lib/types";

function verdictOverall(p: Paper): { label: string; tone: string } {
  const gaps = p.cohesion_analysis_tbl.filter(
    (a) => a.cohesion_score === "Gap",
  ).length;
  const partial = p.cohesion_analysis_tbl.filter(
    (a) => a.cohesion_score === "Partial",
  ).length;
  if (gaps > 0)
    return {
      label: `${gaps} gap${gaps > 1 ? "s" : ""}`,
      tone: "text-destructive",
    };
  if (partial > 0)
    return { label: `${partial} partial`, tone: "text-amber-400" };
  return { label: "Cohesive", tone: "text-emerald-400" };
}

export default function PaperCard({ paper }: { paper: Paper }) {
  const v = verdictOverall(paper);
  return (
    <Link
      href={`/checker/${paper.paper_id}`}
      className="group flex items-center gap-4 rounded-lg border border-border bg-panel p-4 transition hover:border-brand hover:bg-panel-2"
    >
      <div className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-panel-2">
        <FileCode className="size-4 text-muted-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{paper.paper_id}</div>
        <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
          {/* <span className="uppercase">{paper.fileType}</span> */}
          {/* <span>·</span> */}
          {/* <span>{paper.pages} pages</span> */}
          {/* <span>·</span> */}
          <span>{new Date(paper.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <div className={`text-xs font-medium ${v.tone}`}>{v.label}</div>
      <ChevronRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  );
}
