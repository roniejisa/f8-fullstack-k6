export const addTodo = (name) => {
	return {
		type: "todo/add",
		payload: {
			name,
			completed: false,
		}
	};
};
