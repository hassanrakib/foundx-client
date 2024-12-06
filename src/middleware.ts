import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const AuthRoutes = ["/login", "/register"];

type ROLE = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // const user = {
  //   name: "John",
  //   token: "habijabitoken",
  //   role: "USER",
  // };

  const user = null;

  //   no user
  if (!user) {
    // trying to access auth routes
    if (AuthRoutes.includes(pathname)) {
      // let the user go
      return NextResponse.next();
    } else {
      // redirect user to login not granting access to other matched routes from config
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && roleBasedRoutes[user.role as ROLE]) {
    const routes = roleBasedRoutes[user.role as ROLE];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// we are going to take decission in the middleware function based on these paths
// as only for these paths middleware will be called
export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
