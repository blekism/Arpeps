"use server";
import { register, login } from "@/services/auth";
import { redirect } from "next/navigation";
import { Paper } from "@/lib/types";
import { createClient } from "../lib/server";

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
    const data = await register(email, password, name);

    if (data.code === 1) {
      redirect("/dashboard");
    }

    return {
      success: false,
      message: "An error has occurred, please try again.",
    };
  } catch (error) {
    return {
      success: false,
      message: "An error has occurred, please try again later.",
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

    if (data.code === 1) {
      console.log("The data of the code is ", data);
      console.log("redirected to dashboard goshhh...");
      // redirect("/dashboard");
    }

    return {
      success: false,
      message: "Credentials Invalidated!",
    };
  } catch (error) {
    return {
      success: false,
      message: "An error has occured, please try again later.",
    };
  }
}

export async function PaperProcessWrapper(file: File, uploader: string) {
  let paper: Paper | null = null;

  try {
    paper = await createPaper(uploader, file);
    const analysis = await generateAnalysis(file);
    const saveAnalysis = await saveAnalysis_DB();
  } catch (error) {
    if (paper) {
      await deletePaperInDB(paper.id);
      await deletePaperInStorage(paper.id);
    }

    throw error;
  }
}

export async function generateAnalysis(file: File) {
  //this calls gemini api and generates the analysis
  // after analysis, call saveAnalysis to save analysis to db
  // parse ai response here and return that parsed data
}

export async function saveAnalysis_DB() {
  const supabase = await createClient();

  const { error } = await supabase.from("analysis_tbl").insert({
    //data from ai insert here
  });

  if (error) {
    throw error;
  }
  //gets called after analysis is complete
}

export async function uploadMarkdown(file: File) {
  const supabase = await createClient();
  //this is called at the same time as generate analysis to save paper in storage so its nonblocking
  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  const filePath = `papers/${fileName}`;

  const { data, error } = await supabase.storage
    .from("paper-md-storage")
    .upload(filePath, file);

  if (error) {
    console.error("Upload failed:", error);
    throw error;
  }

  return data;
}

export async function createPaperRecord(userId: string, url: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("research_papers_tbl")
    .insert({
      user_id: userId,
      file_ur: url,
      cohesion_score: 0,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Paper;
}

export async function createPaper(userId: string, file: File) {
  // save to storage
  const upload = await uploadMarkdown(file);

  try {
    return await createPaperRecord(userId, upload.fullPath);
  } catch (error) {
    await deletePaperInStorage(upload.fullPath);
    throw error;
  }

  // await then save to db
}

export async function deletePaperInStorage(path: string) {
  //check ownership of paper first
  // wala delete lang talaga
}

export async function deletePaperInDB(id: string) {
  //check ownership of paper first
  // wala delete lang talaga
}

// flow of the main process is:
// 1. save .md to storage
// 2. save record to db and status processing
// 3. call gemini api and process the data
// 4. save analysis to db
// 5. update status to finished

// note: wrap 4 and 5 in single db operation
