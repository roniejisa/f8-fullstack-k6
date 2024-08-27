"use server";
import { httpClient } from "@/app/utils/client";
import { cookies } from "next/headers";

export const loginAction = async (form: FormData) => {
    const response = await httpClient(
        "/auth/login",
        "POST",
        {
            ...Object.fromEntries(form),
        },
        {}
    );
    if (!response.ok) {
        return false;
    }

    const { data } = await response.json();
    cookies().set("token", data.accessToken, {
        maxAge: 60 * 60,
        path: "/",
        httpOnly: true,
    });
    cookies().set("refreshToken", data.refreshToken, {
        maxAge: 24 * 7 * 60 * 60,
        path: "/",
        httpOnly: true,
    });
    return true;
};
