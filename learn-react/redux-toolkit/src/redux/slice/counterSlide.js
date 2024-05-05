import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../middlewares/postMiddleware";
const initialState = {
	count: 0,
	postList: [],
	status: "idle",
};

export const counterSlide = createSlice({
	name: "counter", //type action: name/action (counter/increment)
	initialState,
	reducers: {
		increment: (state, action) => {
			//type: counter/increment
			state.count += action.payload;
		},
		decrement: (state, action) => {
			//type: counter/decrement
			state.count -= action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getPosts.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.postList = action.payload;
			state.status = "success";
		});
		builder.addCase(getPosts.rejected, (state, action) => {
			state.status = "error";
		});
	},
});

//Enhanced Literal Object
