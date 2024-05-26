/* eslint-disable no-case-declarations */
export const initialState = {
	todoList: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "todo/add":
			return { ...state, todoList: [...state.todoList, action.payload] };
		case "todo/delete":
			// eslint-disable-next-line no-case-declarations
			const newTodoList = state.todoList.filter(
				(_, index) => index !== +action.payload
			);
			return { ...state, todoList: newTodoList };
		case "todo/done":
			const indexTodoDone = state.todoList.findIndex(
				(_, index) => index === action.payload.id
			);
			if (indexTodoDone !== -1) {
				state.todoList[indexTodoDone].isCompleted = action.payload.completed;
				return { ...state };
			}
			break;
		case "todo/update":
			const indexTodo = state.todoList.findIndex(
				(_, index) => index === action.payload.id
			);
            
			if (indexTodo !== -1) {
				state.todoList[indexTodo] = {
					...state.todoList[indexTodo],
					name:action.payload.name,
				};
				return { ...state };
			}
			break;
		default:
			return {...state};
	}
};