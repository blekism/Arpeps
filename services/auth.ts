import { createClient } from "@/backend/server";
import { Server_Res, Session_Response } from "@/lib/types";

const supabase = await createClient();

// export type User = { id: string; email: string; name: string };

export async function register(
  email: string,
  password: string,
  name: string,
): Promise<Server_Res> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
      },
    },
  });
  if (error)
    return {
      code: 0,
      error,
    };
  return {
    code: 1,
    data,
  };
}

export async function writeUser(user: Server_Res) {
  await supabase.from("users_tbl").insert({
    uid: user.data?.user?.id,
    username: user.data?.user?.user_metadata.display_name,
    email: user.data?.user?.email,
    status: "active",
    is_notif: true,
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/nu-publication-system.firebasestorage.app/o/logo.jpg?alt=media&token=fed28218-248d-4ad9-a639-14f072f7e9b9",
  });
}

export async function userSession(): Promise<Session_Response> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      code: 0,
      message: "Must be logged in to continue",
      session: null,
    };
  }

  return {
    code: 1,
    message: "Session Validated!",
    session: session,
  };
}

export async function login(
  email: string,
  password: string,
): Promise<Server_Res> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      code: 0,
      error: error,
    };
  }

  return {
    code: 1,
    data: data,
  };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
  return;
}
