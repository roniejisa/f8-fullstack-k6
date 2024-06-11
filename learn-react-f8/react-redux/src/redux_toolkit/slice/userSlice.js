import { createSlice } from "@reduxjs/toolkit";
import { getUser, getUsers } from "../middlewares/userMiddleware";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            data: [],
            status: "idle",
        },
        user: {
            data: {},
            status: "idle",
        },
    },
    reducers: {
        // setUsers: (state, action) => {
        //     state.users = action.payload;
        // },
        // setStatus: (state, action) => {
        //     state.users.status = action.payload;
        // },
        resetUser: (state, action) => {
            state.user.data = {};
            state.user.status = "idle";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.users.status = "pending";
        }),
            builder.addCase(getUsers.fulfilled, (state, action) => {
                state.users.status = "success";
                state.users.data = action.payload;
            }),
            builder.addCase(getUsers.rejected, (state) => {
                state.users.status = "failed";
            }),
            builder.addCase(getUser.pending, (state) => {
                state.user.status = "pending";
            }),
            builder.addCase(getUser.fulfilled, (state, action) => {
                state.user.status = "success";
                state.user.data = action.payload;
            }),
            builder.addCase(getUser.rejected, (state) => {
                state.user.status = "failed";
            });
    },
});
export default userSlice;
export const { resetUser } = userSlice.actions;
