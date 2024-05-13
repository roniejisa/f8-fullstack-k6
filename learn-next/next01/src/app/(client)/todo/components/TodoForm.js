"use client";
import { useRef } from "react";
import { handleAddTodo } from "../action";
const TodoForm = () => {
	const formRef = useRef();

	return (
		<form
			ref={formRef}
			action={async (formData) => {
				await handleAddTodo(formData);
				formRef.current.reset();
			}}>
			<input
				name="name"
				type="text"
				placeholder="Tên công việc..."
			/>
			<button>Thêm</button>
		</form>
	);
};

export default TodoForm;
