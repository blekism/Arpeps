import UploadCard from "@/components/upload_card";
import PaperCard from "@/components/paper_card";
import { getAllPapers } from "@/backend/read";
import type { Paper } from "@/lib/types";
// import { listPapers, type Paper } from "@/backend/read";
import { userSession } from "@/services/auth";
import { createClient } from "@/lib/server";

export default async function Dashboard() {
  // const [papers, setPapers] = useState<Paper[]>([]);
  // function refresh() {
  //   const u = getSession();
  //   if (u) setPapers(listPapers(u.id));
  // }
  // useEffect(() => {
  //   refresh();
  // }, []);

  const supabase = await createClient();

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


  const sessionData = await userSession();
  
  if (sessionData.code !== 1 || !sessionData.session) return;
  
  const userId = sessionData.session.user.id;
  const papers = await getAllPapers(userId);

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Analyze a new paper
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A first-layer cohesion check before you print or submit.
          </p>
        </div>

        {/* <UploadCard onUploaded={refresh} /> */}

        <section className="mt-12">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-semibold tracking-tight">
              Previously submitted
            </h2>
            <span className="text-xs text-muted-foreground">
              {papers.data.length} total
            </span>
          </div>
          {papers.data.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              Nothing here yet. Upload a paper to get started.
            </div>
          ) : (
            <div className="space-y-2">
              {papers.data.map((p) => (
                <PaperCard key={p.id} paper={p} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
