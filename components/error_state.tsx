"use client";

import { useRouter } from "next/navigation";

export default function ErrorState() {
  const router = useRouter();

  return (
    <>
      <p>Couldn't load papers.</p>

      <button onClick={() => router.refresh()}>Try Again</button>
    </>
  );
}
