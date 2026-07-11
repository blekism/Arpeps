"use client";

import { useRef, useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { uploadAndAnalyze } from "@/backend/api";
import { getSession } from "@/services/auth";
import { rateLimit } from "@/services/rate_limit";
import { toast } from "sonner";

export default function UploadCard({ onUploaded }: { onUploaded: () => void }) {
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useRouter();

  async function handleFile(file: File) {
    const user = getSession();
    if (!user) return;
    const ok = /\.(pdf|md|markdown)$/i.test(file.name);
    if (!ok) {
      toast.error("Only .pdf and .md files are supported");
      return;
    }
    if (!rateLimit(`upload:${user.id}`, 5, 0.2)) {
      toast.error("Too many uploads. Try again in a moment.");
      return;
    }
    setLoading(true);
    try {
      const paper = await uploadAndAnalyze(user.id, file);
      toast.success("Analysis ready");
      onUploaded();
      navigate.push(`papers/${paper.id}`);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        const f = e.dataTransfer.files?.[0];
        if (f) handleFile(f);
      }}
      className={`group relative overflow-hidden rounded-xl border border-dashed p-8 transition ${
        dragging ? "border-brand bg-panel-2" : "border-border bg-panel"
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="grid size-12 place-items-center rounded-lg border border-border bg-panel-2">
          {loading ? (
            <Loader2 className="size-5 animate-spin text-brand" />
          ) : (
            <Upload className="size-5 text-brand" />
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            {loading ? "Analyzing paper…" : "Upload a research paper"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Drop a PDF or Markdown file, or click to browse. We&apos;ll extract
            the problem, method, solution, related work, and results.
          </p>
        </div>
        <button
          type="button"
          disabled={loading}
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          <Upload className="size-4" />
          Select file
        </button>
        <p className="text-xs text-muted-foreground">
          Accepted: .pdf, .md · max 25MB
        </p>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.md,.markdown"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />
      </div>
    </div>
  );
}
