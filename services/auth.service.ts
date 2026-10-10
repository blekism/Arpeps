import { apiFetch, getCsrfToken } from "@/backend/api";
import { Server_Res } from "@/lib/types";

// export type User = { id: string; email: string; name: string };

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function register(
  email: string,
  password: string,
  name: string,
): Promise<Server_Res> {
  //------------------------execute function-----------------
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
  //------------------------execute function-----------------

  // --------------------------throw the error----------------
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? "Request failed");
  }
  // --------------------------throw the error----------------

  //---------------------------parse json result--------------
  const message = await res.json();
  //---------------------------parse json result--------------

  //---------------------------return parsed result----------
  return {
    status: res.status,
    data: message,
  };
  //---------------------------return parsed result----------
}

export async function logout() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
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

  if (!res.ok) {
    const err = await res.json();
    console.log("error is: ", err.error);
    throw new Error(err.error ?? "Login failed");
  }

  const message = await res.json();

  return {
    status: res.status,
    data: message,
  };
}

export async function ensureCsrfToken() {
  if (!getCsrfToken()) {
    await fetch(`${API_URL}/csrf-token`, { credentials: "include" });
  }
}
