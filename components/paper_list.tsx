"use client";

import { useEffect } from "react";
import { Paper } from "@/lib/types";
import { toast } from "sonner";
import PaperCard from "./paper_card";

type PaperListProps = {
  papers: Paper[];
  error: string | null;
};

export default function PaperList({ papers, error }: PaperListProps) {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <section className="mt-12">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">
          Submitted Previously
        </h2>
        <span className="text-xs text-muted-foreground">
          {papers.length} total
        </span>
      </div>
      {papers.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Nothing here yet. Upload a paper to get started.
        </div>
      ) : (
        <div className="space-y-2">
          {papers.map((p) => (
            <PaperCard key={p.id} paper={p} />
          ))}
        </div>
      )}
    </section>
  );
}
