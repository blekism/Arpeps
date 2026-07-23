"use server";

import { register, login } from "@/services/auth_server";
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

  let data;

  try {
    data = await register(email, password, name);
  } catch (error) {
    return {
      success: false,
      message: "An error has occurred, please try again later.",
    };
  }

  if (data.code !== 1) {
    return {
      success: false,
      message: "An error has occurred, please try again.",
    };
  }

  redirect("/dashboard");
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

export async function generateAnalysis(markdown: string) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemma-4-26b-a4b-it:free",
        messages: [
          {
            role: "system",
            content:
              " nud assess this paper You are an expert research paper reviewer. Return only valid JSON.",
          },
          {
            role: "user",
            content: markdown,
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    throw new Error("OpenRouter request failed");
  }

  return await response.json();
}

export async function saveAnalysis_DB() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("analysis_tbl")
    .insert({
      //data from ai insert here
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createPaperRecord(userId: string, content: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("research_papers_tbl")
    .insert({
      user_id: userId,
      content: content,
      cohesion_score: 0,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Paper;
}

export async function createPaper(userId: string, content: string) {
  // save to storage

  try {
    return await createPaperRecord(userId, content);
  } catch (error) {
    throw error;
  }

  // await then save to db
}

export async function deletePaperInDB(id: string) {
  //check ownership of paper first
  // wala delete lang talaga
}

export async function PaperProcessWrapper(content: string, uploader: string) {
  let paper: Paper | null = null;

  try {
    paper = await createPaper(uploader, content);
    const analysis = await generateAnalysis(content);
    const saveAnalysis = await saveAnalysis_DB();

    if (saveAnalysis) return saveAnalysis;
  } catch (error) {
    if (paper) {
      await deletePaperInDB(paper.id);
    }

    throw error;
  }
}

export async function uploadHandler(paper: string, uploader: string) {
  // const file = formatData.get("paper") as File;
  // const markdown = await file.text();

  const process = await PaperProcessWrapper(paper, uploader);

  return process;
}

// flow of the main process is:
// 1. save .md to storage
// 2. save record to db and status processing
// 3. call gemini api and process the data
// 4. save analysis to db
// 5. update status to finished

// note: wrap 4 and 5 in single db operation
