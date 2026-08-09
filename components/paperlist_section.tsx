import ErrorState from "@/components/error_state";
import PaperList from "@/components/paper_list";
import { createClient } from "@/lib/server";
import { getAllPapers } from "@/backend/read";

export default async function PaperListSection() {
  const supabase = await createClient();
  const sessionData = await supabase.auth.getClaims();

  if (!sessionData.data?.claims.sub) return null;

  const papers = await getAllPapers(sessionData.data?.claims.sub);

  if (papers.code === 0) {
    return <ErrorState />;
  }

  return <PaperList papers={papers.data} error={null} />;
}
