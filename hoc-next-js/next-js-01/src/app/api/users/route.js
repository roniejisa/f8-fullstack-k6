/**
 *
 * HTTP METHOD
 *
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

import { NextResponse } from "next/server";

export function GET(request) {
    console.log(request.nextUrl);
    return NextResponse.json({
        param: request.nextUrl.searchParams.get("name"),
        data: [
            {
                id: 1,
                name: "John Doe",
            },
            {
                id: 2,
                name: "Jane Doe",
            },
            {
                id: 3,
                name: "Jim Doe",
            },
        ],
    });
}

export async function POST(request) {
    const data = await request.json();
    return NextResponse.json({
        success: "status",
        data,
    });
}

export async function PUT(request) {
    const data = await request.json();
    return NextResponse.json({
        success: "status",
        data,
    });
}
