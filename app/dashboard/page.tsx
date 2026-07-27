import UploadCard from "@/components/upload_card";
import PaperCard from "@/components/paper_card";
import { getAllPapers } from "@/backend/read";
import type { Paper } from "@/lib/types";
import { createClient } from "@/lib/server";
import ErrorState from "@/components/error_state";
import PaperList from "@/components/paper_list";

export default async function Dashboard() {
  const supabase = await createClient();

  const sessionData = await supabase.auth.getUser();

  if (!sessionData.data.user) return;

  const user_id = sessionData.data.user.id;
  const papers = await getAllPapers(user_id);

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Analyze a new paper
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A first-layer cohesion check before you print or submit your paper.
          </p>
        </div>

        <UploadCard />

        {papers.data.length === 0 && <ErrorState />}

        <PaperList papers={papers.data} error={papers.message ?? null} />
      </main>
    </>
  );
}

// useEffect(() => {
//   async function getPapers() {
//     try {
//       const sessionData = await userSession();
//       if (sessionData.code !== 1 || !sessionData.session) return;
//       const userId = sessionData.session.user.id;
//       if (!userId) return;
//       const data = await getAllPapers(userId);
//       setPapers(data.data ?? []);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   getPapers();
// },[]);
