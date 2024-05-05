import { configureStore } from "@reduxjs/toolkit";
import { counterSlide } from "./slice/counterSlide";

export const store = configureStore({
	reducer: {
		counter: counterSlide.reducer,
	},
});
