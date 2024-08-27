"use server";

import { httpClient } from "@/app/utils/client";

export const actionCreateUser = async (data: any) => {
    "use server";
    const body = Object.fromEntries([...data]);
    try {
        const response = await httpClient("/users", "POST", body, {
            "x-api-key": "f8-traning",
            "Content-Type": "application/json",
        });
        if (!response.ok) throw new Error("Error");
        return true;
    } catch (err) {
        return false;
    }
};
