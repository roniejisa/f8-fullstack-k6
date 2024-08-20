"use server";
import { httpClient } from "@/app/utils/client";

export const updateUser = async (data: FormData, id: number) => {
    const body = Object.fromEntries(data);
    const response = await httpClient("/users/" + id, "PATCH", body);
    const infoUpdate = await response.json();
    if (!response.ok) {
        return infoUpdate;
    }
};
