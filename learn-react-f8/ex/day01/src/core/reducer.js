import { getTodos, todoApi } from "../api/todoApi";

export const initialState = {
	todoList: [],
	status: "",
	isLoading: false,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "todo/fetch":
			state.status = "success";
			return { ...state, todoList: [...action.payload] };
		case "todo/fetch-pending":
			return { ...state, status: action.payload };
		case "todo/loading":
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
