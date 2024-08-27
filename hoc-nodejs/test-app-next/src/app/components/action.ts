"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const getUsers = async () => {
    const token = cookies().get("token");
    const allHeaders = headers();
    const xUser = allHeaders.get("x-user");
    if (!xUser) {
        redirect("/login");
    }
    try {
        const response = await fetch(process.env.API_SERVER + "/users", {
            headers: {
                "x-api-key": "f8-traning",
                Authorization: "Bearer " + token?.value,
            },
            cache: "no-cache",
        });
        if (response.ok) return response.json();
        throw new Error("Không có quyền truy cập");
    } catch (err) {
        return false;
    }
};
