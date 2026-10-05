"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { mdFile, PageProps } from "@/lib/types";
import { getMarkdown } from "@/backend/read.controller";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import ErrorState from "@/components/error_state";
import PaperSkeleton from "@/components/paper_loading";

export default function ViewerPage() {
  const { id } = useParams<{ id: string }>();

  const [md, setMd] = useState<mdFile | null>(null);
  const [code, setCode] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      console.log("passed id is: ", id);
      const paper = await getMarkdown(id);

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
    return <PaperSkeleton />;
  }

  if ((code === 0 && loading === false) || !md) {
    return <ErrorState />;
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link
        href={`/checker/${md.paper_id}`}
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to analysis
      </Link>

      <header className="mb-4">
        <h1 className="text-xl font-semibold tracking-tight">{md.title}</h1>
      </header>

      <div className="overflow-hidden rounded-lg border border-border bg-white text-black shadow-sm">
        <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-100 px-4 py-2 text-[11px] text-neutral-600"></div>
        <article className="prose prose-sm mx-auto max-w-none px-10 py-12 leading-relaxed">
          <pre className="whitespace-pre-wrap break-words font-serif text-[14px] leading-6 text-neutral-900">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {md.content}
            </ReactMarkdown>
          </pre>
        </article>
      </div>
    </main>
  );
}
