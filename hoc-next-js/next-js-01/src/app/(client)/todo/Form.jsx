"use client";
import { clearCache } from "@/utils/cache";
import { useRouter } from "next/navigation";

const Form = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const response = await fetch("http://localhost:4000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            clearCache("todo-list");
            router.refresh();
            e.target.reset();
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" name="content" className="border outline-none p-2 rounded-lg" />
                <button type="submit">Thêm todo</button>
            </form>
        </>
    );
};

export default Form;
