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
      .select(
        `*, 
        extracted_concepts_tbl(*, concepts_tbl(concept_name)), 
        concept_relationships_tbl(*, 
          from:concepts_tbl!from_concept(concept_name),
          to:concepts_tbl!to_concept(concept_name)),
        cohesion_analysis_tbl(*, concepts_tbl(concept_name))`,
      )
      .order("created_at", { ascending: false })
      .eq("user_id", id);

    if (error) {
      console.log("the paper is: ", error);

      return {
        code: 0,
        data: [],
        message: error.message,
      };
    }
    // console.log("the paper is sheesh: ", data);

    console.log("hdhdhdh", data);

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
      code: 0,
      message: "Paper not found...",
    };
  }

  try {
    const { data, error } = await supabase
      .from("research_papers_tbl")
      .select(
        `*, 
        extracted_concepts_tbl(*, concepts_tbl(concept_name)), 
        concept_relationships_tbl(*, 
          from:concepts_tbl!from_concept(concept_name),
          to:concepts_tbl!to_concept(concept_name)),
        cohesion_analysis_tbl(*, concepts_tbl(concept_name))`,
      )
      .eq("paper_id", id)
      .maybeSingle();

    if (error) {
      console.log("the paper error is: ", error);

      return {
        code: 0,
        message: error.message,
      };
    }
    console.log("the paper  is: ", data);

    return {
      code: 1,
      data: data,
      message: "Paper retreived successfully",
    };
  } catch (error) {
    console.log("the paper error is: ", error);

    return {
      code: 0,
      message: "An error has occured, please try again later...",
    };
  }
}

export async function getVisualizer(id: string) {}

// read for visializer
// read for paper
