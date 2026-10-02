import { Paper, GetAllPaperResult, GetPaperResult } from "@/lib/types";
import {
  getMap,
  getPapers,
  getSinglePaper,
  printPaper,
} from "@/services/paper.service";

export async function getAllPapers() {
  try {
    const res = await getPapers();

    return {
      code: 1,
      data: res.data,
      message: "data fetched sucessfully",
    };
  } catch (error) {
    return {
      code: 0,
      data: [],
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred, please try again later",
    };
  }
}

export async function getAnalysis(id: string) {
  if (!id) {
    return {
      code: 0,
      message: "Paper not found...",
    };
  }

  try {
    const res = await getSinglePaper(id);

    return {
      code: 1,
      data: res.data,
      message: "data fetched sucessfully",
    };
  } catch (error) {
    return {
      code: 0,
      data: [],
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred, please try again later",
    };
  }
}

export async function getVisualizer(id: string) {
  if (!id) {
    return {
      code: 0,
      message: "Paper not found...",
    };
  }

  try {
    const res = await getMap(id);

    return {
      code: 1,
      data: res.data,
      message: "data fetched sucessfully",
    };
  } catch (error) {
    return {
      code: 0,
      data: [],
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred, please try again later",
    };
  }
}

export async function getMarkdown(id: string) {
  if (!id) {
    return {
      code: 0,
      message: "Paper not found...",
    };
  }

  try {
    const res = await printPaper(id);

    return {
      code: 1,
      data: res.data,
      message: "data fetched sucessfully",
    };
  } catch (error) {
    return {
      code: 0,
      data: {},
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred, please try again later",
    };
  }
}

// read for visializer
// read for paper

// services - yung mga tumatawag ng endpoint
// controllers - yung mga nagpprovide ng state update para sa ui
