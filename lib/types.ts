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
  | "Problem"
  | "Methodology"
  | "Solution"
  | "Literature"
  | "Result";

export const CONCEPT_LABELS: Record<ConceptKey, string> = {
  Problem: "Stated Problem",
  Methodology: "Methodology",
  Solution: "Proposed Solution",
  Literature: "Related Literature",
  Result: "Result",
};

export type Analysis = {
  concepts_tbl: {
    concept_name: string;
  };
  reason: string;
  cohesion_score: "Cohesive" | "Partial" | "Gap";
};

export type Concepts = {
  concept_id: string;
  concepts_tbl: {
    concept_name: string;
  };
  extracted_content: string;
};

export type Connections = {
  from: {
    concept_name: string;
  };
  to: {
    concept_name: string;
  };
  reason: string;
  strength: number;
  kind: number;
};

export type Paper = {
  paper_id: string;
  user_id: string;
  created_at: string;
  content: string;
  extracted_concepts_tbl: Concepts[];
  concept_relationships_tbl: Connections[];
  cohesion_analysis_tbl: Analysis[];
  overall_cohesion_score: string;
};

export type GetAllPaperResult = {
  code: number;
  data: Paper[];
  message: string;
};

export type GetPaperResult = {
  code: number;
  data?: Paper;
  message: string;
};

export interface CreatePaperRes {
  code: number;
  message: string;
  data?: ResearchPaperData;
}

export interface ResearchPaperData {
  paper_id: string;
  user_id: string;
  created_at: string;
  content: string;
  overall_cohesion_score: string;
}
