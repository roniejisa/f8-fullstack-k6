import { NextResponse } from "next/server";

export const middleware = (req, res, next) => {
    const response = NextResponse.next();
    return response;
};