"use client";

import Link from "next/link";
import { getAnalysis, getVisualizer } from "@/backend/read.controller";
import ConceptGraph from "@/components/concept_graph";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { formap, PageProps } from "@/lib/types";
import { toast } from "sonner";
import ErrorState from "@/components/error_state";
import VisualizerSkeleton from "@/components/visualizer_loading";

export default function VisualizerPage() {
  const { id } = useParams<{ id: string }>();

  const [md, setMd] = useState<formap | null>(null);
  const [code, setCode] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      console.log("passed id is: ", id);
      const paper = await getVisualizer(id);

      if (paper.code !== 1) {
        toast.error(paper.message);
      }
      console.log(paper.data, "paper data checker");
      setMd(paper.data);
      setCode(paper.code);
      setLoading(false);
    };

    getData();
  }, [id]);

  if (loading) {
    return <VisualizerSkeleton />;
  }

  if ((code !== 1 && !loading) || !md) {
    return <ErrorState />;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href={`/checker/${md.paper_id}`}
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

      <ConceptGraph paper={md} />
    </main>
  );
}
