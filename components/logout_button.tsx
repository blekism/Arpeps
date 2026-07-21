"use client"

import { LogOut } from "lucide-react";
import { logout } from "@/services/auth";
import { redirect } from "next/navigation";

export default function Logout_Button(){
    return(
        <>
        <button
            onClick={() => {
                logout();
                redirect("/");
            }}
            className="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-muted-foreground transition hover:bg-panel-2 hover:text-foreground"
            >
            <LogOut className="size-3.5" />
            Sign out
        </button>
        </>
    );
}