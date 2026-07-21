import { createBrowserClient } from "@supabase/ssr";

export function createUserClient() {
  return createBrowserClient(
    process.env.PUBLIC_SUPABASE_URL!,
    process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
