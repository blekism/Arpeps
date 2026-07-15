"use server";
import { register, login } from "@/services/auth";
import { redirect } from "next/navigation";

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
      }
  } catch (error) {
    return {
      success: false,
      message: "An error has occurred, please try again later.",
    };
  }
}

export async function Login(_previousState: any, formdata: FormData){
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  if (!email.trim() || !password.trim()) {
    return{
      success: false,
      message: "Email and Password are required.",
    };
  }

  try {

    const data = await login(email, password);

    if(data.code ===1){
      console.log("The data of the code is ", data);
      console.log("redirected to dashboard goshhh...");
      // redirect("/dashboard");
    }

     return {
        success: false,
        message: "Credentials Invalidated!",
      }

  } catch (error) {
    return {
      success: false,
      message: "An error has occured, please try again later.",
    };
  }
}