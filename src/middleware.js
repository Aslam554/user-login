import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  // If the user is logged in, redirect them away from public paths
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // If the user is not logged in, redirect them to the login page from protected paths
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
