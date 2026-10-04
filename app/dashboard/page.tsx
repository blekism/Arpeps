"use client";

import { useEffect, useState } from "react";
import UploadCard from "@/components/upload_card";
import { Suspense } from "react";
import { PaperListSkeleton } from "@/components/dash_loading";
import ErrorState from "@/components/error_state";
import PaperList from "@/components/paper_list";
import { getAllPapers } from "@/backend/read.controller";
import { toast } from "sonner";
import { GetAllPaperResult, Paper } from "@/lib/types";

export default function Dashboard() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState<number>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      const paperData = await getAllPapers();

      if (paperData.code !== 1) {
        setError(paperData.message);
        toast.error(paperData.message);
      }

      setPapers(paperData.data);
      setCode(paperData.code);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Analyze a new paper
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A first-layer cohesion check before you print or submit your paper.
          </p>
        </div>
        <UploadCard />
        {isLoading ? (
          <PaperListSkeleton />
        ) : error ? (
          <ErrorState />
        ) : (
          <PaperList papers={papers} error={null} />
        )}
      </main>
    </>
  );
}
