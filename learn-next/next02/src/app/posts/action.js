"use server";

import { revalidatePath } from "next/cache";

export const handleAddPost = async (formData) => {
	const title = formData.get("title");
	const response = await fetch('http://localhost:3001/posts', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title: title }),
	});

	console.log(response);
	if (response.ok) {
		revalidatePath("/posts");
	}
};
