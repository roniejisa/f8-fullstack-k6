import { NextResponse } from "next/server";

export const GET = (req) => {
    req.cookies.delete("message");
    return NextResponse.json({
        status: 200,
        statusText: "OK",
    });
};
