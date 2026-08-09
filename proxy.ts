import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/middleware";

export async function proxy(request: NextRequest) {
  const start = Date.now();
  const response = await updateSession(request);
  console.log(`middleware: ${Date.now() - start}ms`, request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/checker/:path*",
    // add other protected route prefixes here
  ],
};

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };
