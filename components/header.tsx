import Link from "next/link";
import { FileText } from "lucide-react";
// import { usePathname} from "next/navigation";
// import { userSession } from "@/services/auth_server";
import Logout_Button from "@/components/logout_button";
import { createClient } from "@/lib/server";
import HeaderNav from "./header_nav";

export default async function Header() {
  const supabase = await createClient();
  const userData = await supabase.auth.getUser();

  if (!userData.data.user) return;

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid size-6 place-items-center rounded bg-brand text-brand-foreground">
            <FileText className="size-3.5" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            PaperCheck
          </span>
          <span className="ml-2 rounded border border-border px-1.5 py-0.5 text-[10px] uppercase text-muted-foreground">
            beta
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          <HeaderNav />
          {userData && (
            <>
              <span className="mx-2 hidden text-xs text-muted-foreground sm:inline">
                {userData.data.user.email}
              </span>
              <Logout_Button />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
