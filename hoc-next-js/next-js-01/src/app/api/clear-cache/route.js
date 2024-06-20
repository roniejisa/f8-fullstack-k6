import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const body = await request.json();
    if (!body) {
        return NextResponse.json({
            success: false,
        });
    }
    revalidateTag(body.tag);
    return NextResponse.json({ success: true });
};
