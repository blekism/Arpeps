import { createUserClient } from "@/lib/client";

export async function logout() {
  const supabase = createUserClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
  return;
}
