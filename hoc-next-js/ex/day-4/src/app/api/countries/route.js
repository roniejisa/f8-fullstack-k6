import { NextResponse } from "next/server";

export const GET = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return NextResponse.json({
        data: data.map((item, index) => ({
            id: index + 1,
            name: item.name.common,
        })),
    });
};
