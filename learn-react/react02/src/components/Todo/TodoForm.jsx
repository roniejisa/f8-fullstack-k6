import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
const TodoForm = ({ onGetTodo }) => {
	const [name, setName] = useState("");
	const handleOnChange = (e) => {
		setName(e.target.value);
	};

	const handleAddTodo = (event) => {
		event.preventDefault();
		if (!name.trim().length) {
			alert("Vui lòng nhập tên công việc!");
			return;
		}
		const todo = {
			id: uuidV4(),
			name,
			completed: false,
		};
		onGetTodo(todo);
		setName("");
	};
	return (
		<>
			<form onSubmit={handleAddTodo}>
				<input
					type="text"
					onChange={handleOnChange}
					placeholder="Tên công việc..."
					value={name}
				/>
			</form>
		</>
	);
};

export default TodoForm;
