// Tạo thunk function
export const fetchTodo = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        dispatch({ type: "todo/fetchTodo", payload: data });
    };
};
