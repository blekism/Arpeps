"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth_client";

export default function Logout_Button() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          await logout();
          router.replace("/");
          router.refresh();
        }}
        className="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-muted-foreground transition hover:bg-panel-2 hover:text-foreground"
      >
        <LogOut className="size-3.5" />
        Sign out
      </button>
    </>
  );
}
