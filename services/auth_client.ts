import { createUserClient } from "@/lib/client";
import { Session_Response } from "@/lib/types";

export async function logout() {
  const supabase = createUserClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
  return;
}

export async function userSession(): Promise<Session_Response> {
  const supabase = createUserClient();
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
