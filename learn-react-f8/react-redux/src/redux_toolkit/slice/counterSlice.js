import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrement: (state, action) => {
            state.count = state.count - action.payload;
        },
    },
});

/**Lưu ý 
 * increment, decrement: Hàm để cập nhật state
 * 
 * 
*/
export const {increment, decrement} = counterSlice.actions;