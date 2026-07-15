"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getPaper, type Paper } from "@/backend/read";
import { ArrowLeft } from "lucide-react";

export default function ViewerPage() {
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
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link
        href={`/papers/${paper.id}`}
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to analysis
      </Link>

      <header className="mb-4">
        <h1 className="text-xl font-semibold tracking-tight">{paper.title}</h1>
        <p className="text-xs text-muted-foreground">{paper.filename}</p>
      </header>

      <div className="overflow-hidden rounded-lg border border-border bg-white text-black shadow-sm">
        <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-100 px-4 py-2 text-[11px] text-neutral-600">
          <span className="font-mono">{paper.fileType.toUpperCase()}</span>
          <span>·</span>
          <span>Page 1 of {paper.pages}</span>
        </div>
        <article className="prose prose-sm mx-auto max-w-none px-10 py-12 leading-relaxed">
          <pre className="whitespace-pre-wrap break-words font-serif text-[14px] leading-6 text-neutral-900">
            {paper.preview}
          </pre>
        </article>
      </div>
    </main>
  );
}
