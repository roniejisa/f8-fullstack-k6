import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../middlewares/authMiddleware";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("token") ? true : false,
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getToken.pending, (state) => {
            state.isAuthenticated = false;
        }),
            builder.addCase(getToken.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                localStorage.setItem("token", action.payload.data.apiKey);
            }),
            builder.addCase(getToken.rejected, (state) => {
                state.isAuthenticated = false;
            });
    },
});

export const { setIsAuthenticated } = authSlice.actions;
