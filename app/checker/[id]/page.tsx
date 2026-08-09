import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CheckerSection from "@/components/checker_section";
import { PageProps } from "@/lib/types";
import { Suspense } from "react";
import { CheckerSkeleton } from "@/components/checker_loading";

export default async function Checker({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/dashboard"
          className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to dashboard
        </Link>
        <Suspense fallback={<CheckerSkeleton />}>
          <CheckerSection id={id} />
        </Suspense>
      </main>
    </>
  );
}
