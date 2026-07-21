import Link from "next/link";
import { FileText } from "lucide-react";
import { usePathname} from "next/navigation";
import { userSession} from "@/services/auth";
import  Logout_Button  from "@/components/logout_button";

export default async function Header() {
  const userData = await userSession();

  if (userData.code !==1 || !userData.session) return;

  const pathname = usePathname();

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
          {userData && (
            <>
              <span className="mx-2 hidden text-xs text-muted-foreground sm:inline">
                {userData.session.user.email}
              </span>
              <Logout_Button />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
