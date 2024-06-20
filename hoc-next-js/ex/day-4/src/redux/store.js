import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "./slices/pageSlice";
import { configSlice } from "./slices/configSlice";

export const store = configureStore({
    reducer: {
        page: pageSlice.reducer,
        config: configSlice.reducer
    },
});