"use server";
import { revalidateTag } from "next/cache";
import { todoApi } from "./page";
import { headers, cookies } from "next/headers";
export const handleAddTodo = async (formData) => {
	const name = formData.get("name");
	const response = await fetch(todoApi, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
		}),
	});
	if (response.ok) {
		// const headersList = headers();
		// const referer = headersList.entries();
		// console.log([...referer]);
		revalidateTag("todos");
		// cookies().set("name", name);
	}
};
