export type Server_Res = {
  status: number;
  data: {
    id?: string;
    email?: string;
    error?: string;
    status?: string;
    paper?: Paper;
    papers?: Paper[];
  };
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

export type Concepts = {
  concept_id: string;
  concepts_tbl: {
    concept_name: string;
  };
  created_at: string;
  extracted_concept_id: string;
  extracted_content: string;
  paper_id: string;
};

export type Connection = {
  created_at: string;
  crs_id: string;
  from: {
    concept_name: string;
  };
  kind: number;
  paper_id: string;
  reason: string;
  strength: number;
  to: {
    concept_name: string;
  };
  updated_at: string;
};

export type Analysis = {
  cohesion_id: string;
  cohesion_score: string;
  concept_id: number;
  concepts_tbl: {
    concept_name: string;
  };
  created_at: string;
  paper_id: string;
  reason: string;
};

export type Paper = {
  cohesion_analysis_tbl: Analysis[];
  concept_relationships_tbl: Connection[];
  content: string;
  created_at: string;
  extracted_concepts_tbl: Concepts[];
  overall_cohesion_score: string;
  paper_id: string;
  user_id: string;
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
  status: number;
  message: string;
}

export interface ResearchPaperData {
  paper_id: string;
  user_id: string;
  created_at: string;
  content: string;
  overall_cohesion_score: string;
}

export type GeneratedAnalysis = {
  overall_cohesion_score: string;
  extracted_concepts: {
    extracted_content: string;
    concept_id: number;
  }[];
  concept_relationships: {
    from_concept: number;
    to_concept: number;
    kind: number;
    strength: number;
    reason: string;
  }[];
  cohesion_analysis: {
    concept_id: number;
    cohesion_score: string;
    reason: string;
  }[];
};
