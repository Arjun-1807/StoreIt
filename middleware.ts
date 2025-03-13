import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the path the user is trying to access
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  // Adjust these paths to match your actual authentication routes
  const isPublicPath = path === "/sign-in" || path === "/sign-up";

  // Check if the user has a session cookie
  const hasSessionCookie = request.cookies.has("appwrite-session");

  // If the user is trying to access a protected route without being logged in
  if (!isPublicPath && !hasSessionCookie) {
    // Redirect to the sign-in page
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // If the user is logged in and trying to access an auth page, redirect to home
  if (isPublicPath && hasSessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Otherwise, continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Apply to all routes except for static files, api routes, etc.
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
