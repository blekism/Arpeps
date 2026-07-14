"use client";

import { useEffect, useState } from "react";
import  UploadCard  from "@/components/upload_card";
import  PaperCard from "@/components/paper_card";
import { listPapers, type Paper } from "@/backend/mockData";
// import { getSession } from "@/services/auth";

export default function Dashboard() {

const [papers, setPapers] = useState<Paper[]>([]);
  // function refresh() {
  //   const u = getSession();
  //   if (u) setPapers(listPapers(u.id));
  // }
  // useEffect(() => {
  //   refresh();
  // }, []);

  return (
    <>
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Analyze a new paper</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A first-layer cohesion check before you print or submit.
        </p>
      </div>

      {/* <UploadCard onUploaded={refresh} /> */}

      <section className="mt-12">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold tracking-tight">Previously submitted</h2>
          <span className="text-xs text-muted-foreground">{papers.length} total</span>
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
    </main>
    </>
  );
}
