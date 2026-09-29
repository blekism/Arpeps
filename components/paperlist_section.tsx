import ErrorState from "@/components/error_state";
import PaperList from "@/components/paper_list";
import { getAllPapers } from "@/backend/read.controller";

export default async function PaperListSection() {
  const papers = await getAllPapers();

  if (papers.code === 0) {
    return <ErrorState />;
  }

  return <PaperList papers={papers.data} error={null} />;
}
