import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getPaper, type Paper } from "@/backend/mockData";
import ConceptGraph  from "@/components/concept_graph";
import { ArrowLeft } from "lucide-react";

export default function VisualizerPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [paper, setPaper] = useState<Paper | null>(null);

  useEffect(() => {
    const p = getPaper(id);
    if (!p) router.push("/");
    else setPaper(p);
  }, [id]);

  if (!paper) return null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href={`/papers/${paper.id}`}
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

      <ConceptGraph paper={paper} />
    </main>
  );
}
