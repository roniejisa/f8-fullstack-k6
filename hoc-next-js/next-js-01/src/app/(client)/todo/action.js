"use server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export const handleSubmit = async (form) => {
    const content = form.get("content");
    if(!content){
        return {
            status: false,
        }
    }
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
        return redirect("/todo");
    }
    return {
        status: false
    };
};
