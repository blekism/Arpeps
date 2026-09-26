import { apiFetch, getCsrfToken } from "@/backend/api";
import { Paper, Server_Res, Session_Response } from "@/lib/types";

// export type User = { id: string; email: string; name: string };

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function register(
  email: string,
  password: string,
  name: string,
): Promise<Server_Res> {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": getCsrfToken() ?? "",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }

  return {
    status: res.status,
    data: res.json() as any,
  };
}

export async function login(
  email: string,
  password: string,
): Promise<Server_Res> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": getCsrfToken() ?? "",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) throw new Error((await res.json()).error ?? "Login failed");

  return {
    status: res.status,
    data: res.json() as any,
  };
}

export async function ensureCsrfToken() {
  if (!getCsrfToken()) {
    await fetch(`${API_URL}/csrf-token`, { credentials: "include" });
  }
}

export async function logout() {
  return apiFetch("/auth/logout", { method: "POST" }); // requireAuth applies here — use apiFetch
}
