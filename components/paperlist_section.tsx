import ErrorState from "@/components/error_state";
import PaperList from "@/components/paper_list";
import { createClient } from "@/lib/server";
import { getAllPapers } from "@/backend/read";

export default async function PaperListSection() {
  const supabase = await createClient();
  const sessionData = await supabase.auth.getUser();

  if (!sessionData.data.user) return null;

  const papers = await getAllPapers(sessionData.data.user.id);

  if (papers.code === 0) {
    return <ErrorState />;
  }

  return <PaperList papers={papers.data} error={null} />;
}
