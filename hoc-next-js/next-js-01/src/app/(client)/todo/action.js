"use server";
import { revalidateTag } from "next/cache";
export const handleSubmit = async (form) => {
    const content = form.get("content");
    const res = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
    });
    if (res.ok) {
        revalidateTag("todo-list");
        form.content = "";
        return true;
    }
    return false;
};
