import { createClient } from "../lib/server";
import { Paper, GetAllPaperResult, GetPaperResult } from "@/lib/types";

export async function getAllPapers(id: string): Promise<GetAllPaperResult> {
  const supabase = await createClient();

  if (!id) {
    return {
      code: 0,
      data: [],
      message: "No papers found for this account...",
    };
  }

  try {
    const { data, error } = await supabase
      .from("research_papers_tbl")
      .select("*")
      .order("created_at", { ascending: false })
      .eq("user_id", id);

    if (error) {
      return {
        code: 0,
        data: [],
        message: error.message,
      };
    }

    return {
      code: 1,
      data: data,
      message: "data fetched sucessfully",
    };
  } catch {
    return {
      code: 0,
      data: [],
      message: "An error has occurred, please try again later",
    };
  }
}

export async function getAnalysis(id: string): Promise<GetPaperResult> {
  const supabase = await createClient();

  if (!id) {
    return {
      message: "Paper not found...",
    };
  }

  try {
    const { data, error } = await supabase
      .from("papers_tbl")
      .select("*")
      .eq("paper_id", id)
      .maybeSingle();

    if (error) {
      return {
        message: "An error has occured, please try again later...",
      };
    }

    return {
      data: data,
      message: "Paper retreived successfully",
    };
  } catch (error) {
    return {
      message: "An error has occured, please try again later...",
    };
  }
}

// read for visializer
// read for paper
