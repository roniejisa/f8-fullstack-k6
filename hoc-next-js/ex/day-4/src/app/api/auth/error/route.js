import { NextResponse } from "next/server";

export const GET = async (request) => {
    return NextResponse.json({
        status: 401,
        statusText: "Unauthorized",
    });
}