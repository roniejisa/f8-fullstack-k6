import React, { useState } from "react";
import { useDispatch } from "../core/hook";
import { todoApi } from "../api/todoApi";
import { toast } from "react-toastify";

const TodoForm = () => {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (name.trim().length <= 2) {
			toast.error("Vui lòng nhập tên công việc lớn hơn 2 ký tự!");
			return false;
		}
		const [response, data] = await todoApi(true).post("/todos", {
			todo: name,
		});
		if (response.ok) {
			dispatch({
				type: "todo/fetch-pending",
				payload: "idle",
			});
			toast.success("Thêm công việc mới thành công!");
			setName("");
		}
	};

	return (
		<form
			className="relative flex justify-center border-b border-green-400 mb-2 pb-2"
			onSubmit={handleSubmit}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Thêm một việc làm mới"
				className="outline-none text-white bg-transparent w-full"
			/>
			<button className="p-2 whitespace-nowrap text-white bg-green-400 rounded-md">
				Thêm mới
			</button>
		</form>
	);
};

export default TodoForm;
