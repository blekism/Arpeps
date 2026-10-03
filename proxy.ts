import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function proxy(request: NextRequest) {
  //check access token, if meron proceed
  const accessToken = request.cookies.get("accessToken");
  if (accessToken) return NextResponse.next();

  //check refresh token, if wala, rekta login, if meron, proceed sa baba
  const refresh = request.cookies.get("refreshToken");
  if (!refresh) {
    return NextResponse.redirect(new URL("/login", request.url)); // genuinely logged out
  }

  const csrfToken = request.cookies.get("csrfToken")?.value ?? "";

  const refreshRes = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      Cookie: request.headers.get("cookie") ?? "",
      "X-CSRF-Token": csrfToken,
    },
  });

  if (!refreshRes.ok) {
    return NextResponse.redirect(new URL("/login", request.url)); // refresh token rejected/revoked
  }

  const response = NextResponse.next();
  const newCookies = refreshRes.headers.getSetCookie();
  newCookies.forEach((cookie) => response.headers.append("Set-Cookie", cookie));
  return response;
}

export const config = {
  matcher: ["/", "/register", "/dashboard", "/checker/:path*"],
};
