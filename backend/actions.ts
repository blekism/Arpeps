"use server";
import { register, login } from "@/services/auth";
import { redirect } from "next/navigation";
import { Paper } from "@/lib/types";
import { createClient } from "./server";

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

export async function PaperProcessWrapper() {
  // call bnoth generate analysis here and savepaper_st in a promise so that they run in parallel.
  // both function does not depend on each other
}

export async function generateAnalysis() {
  //this calls gemini api and generates the analysis
  // after analysis, call saveAnalysis to save analysis to db
}

export async function saveAnalysis_DB() {
  const supabase = await createClient();

  await supabase.from("analysis_tbl").insert({
    //data from ai insert here
  });
  //gets called after analysis is complete
}

export async function savePaper_ST(paper: Paper) {
  //this is called at the same time as generate analysis to save paper in storage so its nonblocking
}

export async function savePaper_DB(paper: Paper) {
  //this is called to save paper info to db after saving to storage
}

export async function deletePaper(id: string) {
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
