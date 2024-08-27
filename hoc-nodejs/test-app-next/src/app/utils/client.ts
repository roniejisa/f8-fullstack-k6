"use server";
import { cookies } from "next/headers";
export const httpClient = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    body: object = {},
    headers: object = {}
) => {
    const params: any = {
        method: method,
    };
    const token = cookies().get("token");
    if (method === "POST" || method === "PATCH" || method === "PUT") {
        params.body = JSON.stringify(body);
    }

    if (token) {
        headers.Authorization = "Bearer " + token?.value;
    }

    return fetch(process.env.API_SERVER + url, {
        headers: {
            "x-api-key": "f8-traning",
            "Content-Type": "application/json",
            ...headers,
        },
        cache: "no-cache",
        ...params,
    });
};
