//Action Creator

// ==> Hàm trả về action Object

export const addTodo = (todo) => {
	return {
		type: "todo/add",
		payload: todo,
	};
};

export const deleteTodo = (index) => {
	return {
		type: "todo/delete",
		payload: index,
	};
};

export const completedTodo = (index, status) => {
	return {
		type: "todo/done",
		payload: {
			index,
			status,
		},
	};
};

export const updateTodo = (index, name) => {
	return {
		type: "todo/update",
		payload: {
			index,
			name,
		},
	};
};

export const setTodo = (name) => {
	return {
		type: "todo/set",
		payload: name,
	};
};
