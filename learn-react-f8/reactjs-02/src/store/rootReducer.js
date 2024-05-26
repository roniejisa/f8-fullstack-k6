/* eslint-disable no-case-declarations */
export const initialState = {
	todoList: [],
	todo: "",
	count: 0,
};

export const rootReducer = (state, action) => {
	switch (action.type) {
		case "todo/set":
			return { ...state, todo: action.payload };
		case "todo/add":
			return { ...state, todoList: [...state.todoList, action.payload] };
		case "todo/delete":
			const newTodoList = state.todoList.filter(
				(_, index) => index !== action.payload
			);
			return { ...state, todoList: [...newTodoList] };
		case "todo/done":
			const indexTodoDone = state.todoList.findIndex(
				(_, index) => index === action.payload.index
			);
			if (indexTodoDone !== -1) {
				state.todoList[indexTodoDone].isCompleted =
					action.payload.status;
			}
			return { ...state };
		case "todo/update":
			const indexTodo = state.todoList.findIndex(
				(_, index) => index === +action.payload.index
			);
			if (indexTodo !== -1) {
				state.todoList[indexTodo].name = action.payload.name;
			}
			return { ...state };
		case "counter/increment":
			return {
				...state,
				count: state.count + action.payload,
			};
		case "counter/decrement":
			return {
				...state,
				count: state.count - action.payload,
			};
		default:
			return state;
	}
};
