"use server";

import { headers } from "next/headers";

export const getProfile = async () => {
    const headersList = headers();
    const xUser = String(headersList.get("x-user"));
    const info = JSON.parse(decodeURIComponent(xUser));
    return info;
};

export const checkPermission = async (permission: string) => {
    const info = await getProfile();
    return info.permissions.includes(permission);
};
