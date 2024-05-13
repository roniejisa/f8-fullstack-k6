import React, { useState } from "react";
import { postAPI } from "./PostList";
import { mutate } from "swr";

const PostForm = () => {
	const [title, setTitle] = useState([]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(postAPI, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title }),
		});
		if (response.ok) {
			mutate(postAPI);
			setTitle("");
		}
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				name="title"
				placeholder="Tiêu đề"
			/>
			<button>Thêm</button>
		</form>
	);
};

export default PostForm;
