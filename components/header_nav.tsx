"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={`rounded px-2.5 py-1.5 transition ${
        pathname === "/"
          ? "bg-panel-2 text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      Dashboard
    </Link>
  );
}
