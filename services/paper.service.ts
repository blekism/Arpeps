import { apiFetch, getCsrfToken } from "@/backend/api";
import { Analysis, Concepts, Connection, GeneratedAnalysis } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function insertPaper(content: string) {
  const res = await apiFetch(`${API_URL}/papers/uploadpaper`, {
    method: "POST",
    body: JSON.stringify({
      content: content,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    message: message.paper_id,
  };
}

export async function uploadAnalysis(
  paper_id: string,
  extracted_concepts: GeneratedAnalysis["extracted_concepts"],
  concept_relationships: GeneratedAnalysis["concept_relationships"],
  cohesion_analysis: GeneratedAnalysis["cohesion_analysis"],
) {
  const res = await apiFetch(`${API_URL}/papers/uploadanalysis`, {
    method: "POST",
    body: JSON.stringify({
      paper_id,
      extracted_concepts,
      concept_relationships,
      cohesion_analysis,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    message: message,
  };
}

export async function deletePaper(paper_id: string) {
  const res = await apiFetch(`${API_URL}/papers/deletepaper/${paper_id}`, {
    method: "DELETE",
    body: JSON.stringify({
      paper_id,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    message: message,
  };
}
