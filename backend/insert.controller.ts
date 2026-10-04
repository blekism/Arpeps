import { register, login } from "@/services/auth.service";
import { redirect } from "next/navigation";
import { GeneratedAnalysis, Paper } from "@/lib/types";
import { CreatePaperRes, ResearchPaperData } from "@/lib/types";
import {
  deletePaper,
  insertPaper,
  uploadAnalysis,
} from "@/services/paper.service";
import { generateAnalysis } from "@/services/analysis.service";

export async function Register(_previousState: any, formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  const name = formdata.get("name") as string;

  if (!email.trim() || !password.trim() || !name.trim()) {
    return {
      success: false,
      message: "Email, Password, and Username are required.",
    };
  }

  if (name.trim().length < 2) {
    return {
      success: false,
      message: "Username cannot be shorter than 2 characters.",
    };
  }

  if (password.length < 8) {
    return {
      success: false,
      message: "Password must at least be 8 characters.",
    };
  }

  try {
    const data = await register(email, password, name.trim());

    return {
      success: data.status === 201,
      message:
        data.status === 201
          ? "Registered Successfully. You can now login to continue"
          : "Register failed",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred. Please try again later",
    };
  }
}

export async function Login(_previousState: any, formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  if (!email.trim() || !password.trim()) {
    return {
      success: false,
      message: "Email and Password are required.",
    };
  }

  try {
    const data = await login(email, password);

    return {
      success: data.status === 200,
      message: data.status === 200 ? "Logged in Successfully" : "Login failed",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred. Please try again later",
    };
  }
}

export async function saveAnalysis_DB(
  paperId: string,
  title: string,
  score: string,
  extractedConcepts: GeneratedAnalysis["extracted_concepts"],
  conceptRelationships: GeneratedAnalysis["concept_relationships"],
  cohesionAnalysis: GeneratedAnalysis["cohesion_analysis"],
) {
  if (!extractedConcepts || !conceptRelationships || !cohesionAnalysis) {
    throw new Error("No analysis data found");
  }

  try {
    const data = await uploadAnalysis(
      paperId,
      title,
      score,
      extractedConcepts,
      conceptRelationships,
      cohesionAnalysis,
    );

    return {
      status: data.status,
      message: data.message,
    };
  } catch (error) {
    console.log(error);
    //todo: change this to throw
    return {
      status: 500,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function createPaperRecord(
  content: string,
): Promise<CreatePaperRes> {
  if (!content) {
    throw new Error("Content is missing cuhhh");
  }

  try {
    const data = await insertPaper(content);

    return {
      status: data.status,
      message: data.message,
    };
  } catch (error) {
    console.log("insertion error", error);

    return {
      status: 500,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function deletePaperInDB(id: string) {
  if (!id) {
    throw new Error("id is missing cuhhh");
  }

  try {
    const data = await deletePaper(id);

    return {
      status: data.status,
      message: data.message,
    };
  } catch (error) {
    console.log("deletion error", error);

    return {
      status: 500,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function PaperProcessWrapper(content: string) {
  let paper;
  let id: string | undefined;

  try {
    paper = await createPaperRecord(content);

    if (paper.status !== 200) {
      return {
        code: 0,
        message: "Error creating a record",
      };
    }

    id = paper.message;

    const analysis = await generateAnalysis(content);
    console.log("analysis generated");

    if (analysis.code === 0) {
      if (paper) {
        console.error("hehe delete na qoh sa jinirit");
        await deletePaperInDB(id);
      }
      return {
        code: 0,
        message: "Error generating analysis",
      };
    }

    const analysisData = analysis.data as GeneratedAnalysis;

    const saveAnalysis = await saveAnalysis_DB(
      paper.message,
      analysisData.title,
      analysisData.overall_cohesion_score,
      analysisData.extracted_concepts,
      analysisData.concept_relationships,
      analysisData.cohesion_analysis,
    );

    if (saveAnalysis.status !== 200) {
      if (paper) {
        console.error("hehe delete na qoh sa seb analeses");
        await deletePaperInDB(id);
      }

      return {
        code: 0,
        message: "Error saving analysis",
      };
    }

    return saveAnalysis;
  } catch (error) {
    if (id) {
      console.error(error);
      await deletePaperInDB(id);
    }

    throw error;
  }
}

export async function uploadHandler(paper: string) {
  try {
    const isPassed = await ValidateContent(paper);

    if (isPassed.code === 0) {
      return {
        code: 0,
        message: "Your submission does not look like a research paper",
      };
    }

    await PaperProcessWrapper(paper);

    return {
      code: 1,
      message: "Upload completed successfully",
    };
  } catch (error) {
    console.log(error, "eror");
    return {
      code: 0,
      message: "Error has occurred. Please try again later",
    };
  }
}

export async function ValidateContent(markdown: string) {
  const words = [
    "Introduction",
    "background",
    "study",
    "result",
    "discussion",
    "methodology",
    "conclusion",
    "recommendations",
    "recommendation",
    "references",
    "related",
    "literature",
    "design",
    "research",
  ];

  if (markdown.length < 1000) {
    return {
      code: 0,
      message: "content too short to be a research paper",
    };
  }

  const matchedWords = words.filter((word) => markdown.includes(word));

  if (matchedWords.length < 5) {
    return {
      code: 0,
      message:
        "Paper is either incomplete or does not match the accepted type of paper",
    };
  }

  return {
    code: 1,
    message: "Content passed checks, passing to model now",
  };
}
