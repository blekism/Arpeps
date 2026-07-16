import Link from "next/link";
import { FileText, Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import LoginHandlerForm from "@/components/login_form";
import { createClient } from "@/lib/server";

export default async function LoginPage() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  // useEffect(() => {
  //   async function getSession() {
  //     const data = await userSession();
  //     if (data.code === 1) {
  //       router.push("/");
  //     }
  //   }

  //   getSession();
  // }, []);

  // async function onSubmit(e: React.FormEvent) {
  //   //TODO: CONVERT TO SERVER ACTION
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     if (mode === "register") {
  //       if (name.trim().length < 2) throw new Error("Enter your name");
  //       if (password.length < 6)
  //         throw new Error("Password must be at least 6 characters");
  //       // const u = register(email.trim(), password, name.trim()); register function
  //       // seedDemoPaper(u.id);
  //       toast.success("Account created");
  //     } else {
  //       // login(email.trim(), password);
  //     }
  //     // navigate({ to: "/" }); replace with next link
  //   } catch (e) {
  //     toast.error((e as Error).message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <div className="grid min-h-screen place-items-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="grid size-7 place-items-center rounded bg-brand text-brand-foreground">
            <FileText className="size-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            PaperCheck
          </span>
        </div>

        <LoginHandlerForm />
      </div>
    </div>
  );
}
