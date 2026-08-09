import UploadCard from "@/components/upload_card";
import { Suspense } from "react";
import { PaperListSkeleton } from "@/components/dash_loading";
import PaperListSection from "@/components/paperlist_section";

export default async function Dashboard() {
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
        <Suspense fallback={<PaperListSkeleton />}>
          <PaperListSection />
        </Suspense>
      </main>
    </>
  );
}
