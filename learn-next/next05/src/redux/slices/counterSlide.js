import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	count: 0,
};
export const counterSlide = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.count += action.payload;
		},
		decrement: (state, action) => {
			state.count -= action.payload;
		},
	}
});
