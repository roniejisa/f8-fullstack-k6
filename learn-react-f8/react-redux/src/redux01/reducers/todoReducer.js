const initialState = {
    todoList: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todo/fetchTodo":
            return {
                ...state,
                todoList: action.payload,
            };
        default:
            return state;
    }
};
