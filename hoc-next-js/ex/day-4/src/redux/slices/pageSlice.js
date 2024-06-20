import { createSlice } from "@reduxjs/toolkit";
import { fetchPage } from "../middlewares/pageMiddleware";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        pages: {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPage.fulfilled, (state, action) => {
            state.pages = action.payload;
        });
    },
});
