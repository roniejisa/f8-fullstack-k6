import { createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk("getPosts", async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
	const data = await response.json();
	return data;
});
//Call API:
