
import Link from "next/link";
import { getAnalysis } from "@/backend/read";
import ConceptGraph from "@/components/concept_graph";
import { ArrowLeft } from "lucide-react";

import { PageProps } from "@/lib/types";


export default async function VisualizerPage({params} : PageProps) {
  const { id } = await params;
  const paper = await getAnalysis(id);

  console.log("paper", paper);


  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href={`/checker/${paper.data?.paper_id}`}
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to analysis
      </Link>

      <header className="mb-4">
        <h1 className="text-xl font-semibold tracking-tight">Concept graph</h1>
        <p className="text-xs text-muted-foreground">
          Hover a node to see the concept label. Hover a line to see why two
          concepts are connected. Dashed lines mark theoretical links the paper
          is missing.
        </p>
      </header>

      <ConceptGraph paper={paper.data!} />
    </main>
  );
}
