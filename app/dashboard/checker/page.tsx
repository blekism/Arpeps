"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getPaper, type Paper } from "@/backend/mockData";
import { ArrowLeft, Eye, Network } from "lucide-react";
import BreakdownView from "@/components/breakdown_view";
import ConceptTable from "@/components/concept_table";
import AnalysisView from "@/components/concept_graph";

export default function Checker() {
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
    <>
      <main className="mx-auto max-w-5xl px-4 py-8">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to dashboard
      </Link>

      <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-semibold tracking-tight">{paper.title}</h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {paper.filename} · {paper.pages} pages · uploaded{" "}
            {new Date(paper.uploadedAt).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/papers/${paper.id}/viewer`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel px-3 py-1.5 text-xs transition hover:bg-panel-2"
          >
            <Eye className="size-3.5" /> View paper
          </Link>
          <Link
            href={`/papers/${paper.id}/viewer`}
            className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-medium text-brand-foreground transition hover:opacity-90"
          >
            <Network className="size-3.5" /> Open visualizer
          </Link>
        </div>
      </header>

      <div className="space-y-8">
        <Section title="Extracted concepts" caption="Problem, method, solution, related work, results.">
          <BreakdownView paper={paper} />
        </Section>

        <Section
          title="Concept connections"
          caption="How concepts reference each other. Theoretical rows mark missing links."
        >
          <ConceptTable paper={paper} />
        </Section>

        <Section
          title="Cohesion analysis"
          caption="Does each concept actually answer the others?"
        >
          <AnalysisView paper={paper} />
        </Section>
      </div>
    </main>
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
