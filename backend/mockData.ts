// Mock DB layer. Papers persist per-user in localStorage.

export type ConceptKey =
  | "problem"
  | "methodology"
  | "solution"
  | "literature"
  | "result";

export const CONCEPT_LABELS: Record<ConceptKey, string> = {
  problem: "Stated Problem",
  methodology: "Methodology",
  solution: "Proposed Solution",
  literature: "Related Literature",
  result: "Result",
};

export type Connection = {
  from: ConceptKey;
  to: ConceptKey;
  reason: string;
  /** actual = present in paper; theoretical = should exist but missing */
  kind: "actual" | "theoretical";
  strength: number; // 0..1
};

export type Analysis = {
  concept: ConceptKey;
  answers: ConceptKey[];
  verdict: "cohesive" | "partial" | "gap";
  note: string;
};

export type Paper = {
  id: string;
  userId: string;
  title: string;
  filename: string;
  fileType: "pdf" | "md";
  uploadedAt: string;
  pages: number;
  concepts: Record<ConceptKey, string>;
  connections: Connection[];
  analysis: Analysis[];
  /** mock rendered pages for the viewer */
  preview: string;
};

const PAPERS_KEY = "pc.papers";

function readAll(): Paper[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(PAPERS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeAll(papers: Paper[]) {
  localStorage.setItem(PAPERS_KEY, JSON.stringify(papers));
}

export function listPapers(userId: string): Paper[] {
  return readAll()
    .filter((p) => p.userId === userId)
    .sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));
}

export function getPaper(id: string): Paper | null {
  return readAll().find((p) => p.id === id) ?? null;
}

export function savePaper(paper: Paper) {
  const all = readAll();
  all.push(paper);
  writeAll(all);
}

export function deletePaper(id: string) {
  writeAll(readAll().filter((p) => p.id !== id));
}
