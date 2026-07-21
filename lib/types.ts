import { AuthError, Session, User } from "@supabase/auth-js";

export type Server_Res = {
  code: number;
  data?: {
    user: User | null;
    session: Session | null;
  };
  error?: AuthError | null;
};

export type Session_Response = {
  code: number;
  message: string;
  session?: Session | null;
};

export interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export interface Analysis_Response {
  id: string;
}

export interface PaperMetadata {
  id: string;
}

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
  fileType: "md";
  uploadedAt: string;
  path: string;
  pages: number;
  concepts: Record<ConceptKey, string>;
  connections: Connection[];
  analysis: Analysis[];
  /** mock rendered pages for the viewer */
  preview: string;
};

export type GetAllPaperResult = {
  data: Paper[];
  message: string;
};

export type GetPaperResult = {
  data?: Paper;
  message: string;
};
