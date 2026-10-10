import { apiFetch, getCsrfToken } from "@/backend/api";
import { Analysis, Concepts, Connection, GeneratedAnalysis } from "@/lib/types";

const isProd = process.env.ISPROD === "dev";

// const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_URL = "/api";

export async function insertPaper(content: string) {
  console.log("conent to pass is: ", content);
  const res = await apiFetch(`${API_URL}/papers/uploadpaper`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
  title: string,
  score: string,
  extracted_concepts: GeneratedAnalysis["extracted_concepts"],
  concept_relationships: GeneratedAnalysis["concept_relationships"],
  cohesion_analysis: GeneratedAnalysis["cohesion_analysis"],
) {
  const res = await apiFetch(`${API_URL}/papers/uploadanalysis`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paper_id,
      title,
      overall_cohesion_score: score,
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
    headers: {
      "Content-Type": "application/json",
    },
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

export async function getPapers() {
  //dashboard page
  const res = await apiFetch(`${API_URL}/papers/mypapers`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    data: message,
  };
}

export async function getSinglePaper(id: string) {
  // checker page
  const res = await apiFetch(`${API_URL}/papers/apaper/${id}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    data: message,
  };
}

export async function getMap(id: string) {
  // visualizer page
  const res = await apiFetch(`${API_URL}/papers/amap/${id}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    data: message,
  };
}

export async function printPaper(id: string) {
  // paper page
  const res = await apiFetch(`${API_URL}/papers/acontent/${id}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    data: message,
  };
}
