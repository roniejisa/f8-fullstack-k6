import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    },
});
