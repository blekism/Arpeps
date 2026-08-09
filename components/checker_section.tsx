import Link from "next/link";
import { Eye, Network } from "lucide-react";
import { getAnalysis } from "@/backend/read";
import ErrorState from "./error_state";
import BreakdownView from "./breakdown_view";
import ConceptTable from "./concept_table";
import AnalysisView from "./analysis_view";

interface CheckerProps {
  id: string;
}

export default async function CheckerSection({ id }: CheckerProps) {
  const paper = await getAnalysis(id);

  if (paper.code === 0) {
    return <ErrorState />;
  }

  return (
    <>
      <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-semibold tracking-tight">
            {paper.data?.paper_id}
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {/* {paper.data?.paper_id} · {paper.data?.paper_id} pages · uploaded{" "} */}
            {new Date(paper.data!.created_at).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/checker/paper/${paper.data?.paper_id}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel px-3 py-1.5 text-xs transition hover:bg-panel-2"
          >
            <Eye className="size-3.5" /> View paper
          </Link>
          <Link
            href={`/checker/visualizer/${paper.data?.paper_id}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-medium text-brand-foreground transition hover:opacity-90"
          >
            <Network className="size-3.5" /> Open visualizer
          </Link>
        </div>
      </header>

      <div className="space-y-8">
        <Section
          title="Extracted concepts"
          caption="Problem, method, solution, related work, results."
        >
          <BreakdownView paper={paper.data!} />
        </Section>

        <Section
          title="Concept connections"
          caption="How concepts reference each other. Theoretical rows mark missing links."
        >
          <ConceptTable paper={paper.data!} />
        </Section>

        <Section
          title="Cohesion analysis"
          caption="Does each concept actually answer the others?"
        >
          <AnalysisView paper={paper.data!} />
        </Section>
      </div>
    </>
  );
}

function Section({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        <p className="text-xs text-muted-foreground">{caption}</p>
      </div>
      {children}
    </section>
  );
}
