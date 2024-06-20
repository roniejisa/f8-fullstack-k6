import { NextRequest, NextResponse } from "next/server";
const isAuthentication = false;
export const middleware = (request) => {
    const pathname = request.nextUrl.pathname;
    // if (!isAuthentication && pathname.startsWith("/admin")) {
    //     const loginUrl = new URL("/auth/login", request.url);
    //     return NextResponse.redirect(loginUrl);
    // }
    //Đọc cookies
    // console.log(request.cookies.get("username"));
    // Cho phép đi tiếp

    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set("x-api-key", "ahihi");

    const response = NextResponse.next({
        // request: {
        //     headers: requestHeaders,
        // },
    });
    // response.cookies.set("username", "roniejisa");
    // response.headers.set("x-abc", "next-js");

    // Rewrite URL
    if (pathname === "/san-pham") {
        return NextResponse.rewrite(new URL("/products", request.url));
    }

    if (pathname === "/products") {
        return NextResponse.redirect(new URL("/san-pham", request.url));
    }

    return response;
};

export const config = {
    matcher: ["/:path*"],
};
