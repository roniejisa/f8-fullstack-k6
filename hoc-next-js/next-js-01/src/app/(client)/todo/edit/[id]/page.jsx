import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

const getPost = async (id) => {
    try {
        const res = await fetch(`http://localhost:4000/todos/${id}`, {
            cache: "no-cache",
        });
        const data = await res.json();
        return {
            status: res.ok,
            data,
        };
    } catch (err) {
        return {
            status: false,
        };
    }
};
const Page = async ({ params: { id } }) => {
    const { status, data: post } = await getPost(id);
    if (!status) return <div>Khong tim thay id</div>;
    const handleSubmit = async (form) => {
        "use server";
        const content = form.get("content");
        if (!content) {
            return {
                status: false,
            };
        }
        const res = await fetch(`http://localhost:4000/todos/${id}`, {
            method: "PATCH",
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
            status: false,
        };
    };

    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" defaultValue={post.content} name="content" />
                <button>Sửa</button>
            </form>
        </div>
    );
};

export default Page;
