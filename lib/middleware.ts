import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const PROTECTED_PATHS = [
  "/checker",
  "/dashboard",
  "/checker/:id",
  "/checker/paper/:id",
  "/checker/visualizer/:id",
];

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const isProtected = PROTECTED_PATHS.some((p) =>
    request.nextUrl.pathname.startsWith(p),
  );

  if (isProtected && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// import { createServerClient } from "@supabase/ssr";
// import { NextResponse, type NextRequest } from "next/server";

// export async function updateSession(request: NextRequest) {
//   let response = NextResponse.next({
//     request,
//   });

//   const supabase = createServerClient(
//     process.env.PUBLIC_SUPABASE_URL!,
//     process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },

//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) => {
//             request.cookies.set(name, value);
//           });

//           response = NextResponse.next({
//             request,
//           });

//           cookiesToSet.forEach(({ name, value, options }) => {
//             response.cookies.set(name, value, options);
//           });
//         },
//       },
//     },
//   );

//   // IMPORTANT:
//   // This refreshes the session if necessary.
//   // await supabase.auth.getUser();

//   const { data, error } = await supabase.auth.getClaims();

//   const pathname = request.nextUrl.pathname;

//   const protectedRoutes = ["/dashboard", "/checker"];

//   const isProtected = protectedRoutes.some((route) =>
//     pathname.startsWith(route),
//   );

//   if (!data && isProtected) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return response;
// }
