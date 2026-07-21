import { createClient } from "@/lib/server";
import { Server_Res, Session_Response } from "@/lib/types";
import { User } from "@supabase/supabase-js";

// export type User = { id: string; email: string; name: string };

export async function register(
  email: string,
  password: string,
  name: string,
): Promise<Server_Res> {
  const supabase = await createClient();
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

  if (!data.user) {
    return {
      code: 0,
      error,
    };
  }

  await writeUser(data.user);
  return {
    code: 1,
    data,
  };
}

export async function writeUser(user: User) {
  const supabase = await createClient();
  await supabase.from("users_tbl").insert({
    uid: user.id,
    username: user.user_metadata.display_name,
    email: user.email,
    status: "active",
    is_notif: true,
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/nu-publication-system.firebasestorage.app/o/logo.jpg?alt=media&token=fed28218-248d-4ad9-a639-14f072f7e9b9",
  });
}

export async function userSession(): Promise<Session_Response> {
  const supabase = await createClient();
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
  const supabase = await createClient();
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
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
  return;
}
