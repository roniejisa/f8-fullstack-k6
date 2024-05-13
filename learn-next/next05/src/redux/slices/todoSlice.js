import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../middlewares/todoMiddleware";

const initialState = {
	todos: [],
    status:"idle"
};
export const todosSlice = createSlice({
	name: "todos",
    initialState,
	reducers: {
		add: (state, action) => {
			state.todos = [...state.todos, action.payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = "success"
			state.todos = action.payload;
		});
	},
});
