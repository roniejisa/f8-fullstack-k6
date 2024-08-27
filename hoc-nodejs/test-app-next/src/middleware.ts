import { httpClient } from "@/app/utils/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function middleware(request: NextRequest) {
    const driverInfo = {
        userAgent: request.headers.get("user-agent"),
    };

    const hasToken = request.cookies.get("token");
    const pathname = request.nextUrl.pathname;
    let isAuth = hasToken?.value;
    let isRedirectLogin = false;
    let response = NextResponse.next();
    if (pathname !== "/login") {
        if (!isAuth) {
            isRedirectLogin = true;
        } else {
            const responseData = await httpClient("/auth/profile", "GET", undefined, {
                Authorization: "Bearer " + isAuth,
            });
            console.log(responseData.status);
            if (responseData.status == 402) {
                response.cookies.delete("token");
                isRedirectLogin = true;
            }
            if (!isRedirectLogin) {
                const { data } = await responseData.json();
                const permissions = data.permissions;
                let checkPermission = true;
                if (pathname.startsWith("/users/create") && !permissions.includes("users.create")) {
                    checkPermission = false;
                }

                if (!checkPermission) {
                    return NextResponse.redirect(new URL("/forbidden", request.url));
                }
                const requestHeaders = new Headers(request.headers);
                const encode = encodeURIComponent(JSON.stringify(data));
                requestHeaders.set("x-user", encode);
                response = NextResponse.next({
                    request: {
                        headers: requestHeaders,
                    },
                });
            }
        }
    } else if (isAuth) {
        response = NextResponse.redirect(new URL("/", request.url));
    }

    if (isRedirectLogin) {
        response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("token");
    }
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
