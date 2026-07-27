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

export type Analysis = {
  concept_id: number;
  reason: string;
  cohesion_score: "Cohesive" | "Partial" | "Gap";
};

export type Concepts = {
  concept_id: number;
  extracted_content: string;
};

export type Connections = {
  from_concept: number;
  to_concept: number;
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
};

export type GetAllPaperResult = {
  code: number;
  data: Paper[];
  message: string;
};

export type GetPaperResult = {
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
