import { configureStore } from "@reduxjs/toolkit";
import { counterSlide } from "./slices/counterSlide";
import { todosSlice } from "./slices/todoSlice";
import { postApi } from "./services/postApi";

export const store = configureStore({
	reducer: {
		counter: counterSlide.reducer,
        todos: todosSlice.reducer,
        [postApi.reducerPath]:postApi.reducer
	},
    devTools:true,
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([postApi.middleware]);
    }
});
