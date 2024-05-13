import React, { useId, useRef, useState } from "react";
import { todoApi } from "../api/todoApi";
import { useDispatch } from "../core/hook";
import { toast } from "react-toastify";

const TodoItem = ({ data: { _id, todo, isCompleted } }) => {
	const [name, setName] = useState(todo);
	const [completed, setCompeted] = useState(isCompleted);
	const todoRef = useRef();
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	const handleUpdate = async (id) => {
		dispatch({
			type: "todo/loading",
			payload: true,
		});
		const [response, data] = await todoApi(true).patch("/todos/" + id, {
			todo: name,
			isCompleted: completed,
		});
		if (response.ok) {
			dispatch({
				type: "todo/loading",
				payload: false,
			});
			toast.success("Cập nhật công việc thành công!");
			setEdit(false);
		}
	};
	const handleDelete = (id) => {
		toast("Bạn muốn xóa công việc này chứ?", {
			position: "top-right",
			autoClose: 4000,
			closeOnClick: true,
			type: "warning",
			onClose: () => {},
			onClick: async () => {
				const [response, data] = await todoApi(true).delete(
					"/todos/" + id
				);
				if (response.ok) {
					dispatch({
						type: "todo/fetch-pending",
						payload: "idle",
					});
					toast.success("Xóa công việc thành công!");
				}
			},
		});
	};

	const handleEdit = async (id) => {
		const [response, data] = await todoApi(true).get("/todos/" + id);
		if (response.ok) {
			setEdit(true);
		}
	};
	return (
		<form
			className="bg-white rounded-md p-2"
			ref={todoRef}
			onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(_id);
			}}>
			<input
				className={`${
					completed && "line-through"
				} outline-none border w-full px-3`}
				readOnly={!edit}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<div className="flex justify-between gap-2 items-center  mt-4">
				{edit && (
					<label
						className="[&:has(input:checked)]:after:border-white [&:has(input:checked)]:before:border-teal-400 [&:has(input:checked)]:after:shadow-md [&:has(input:checked)]:before:bg-teal-400 
                        before:content('') before:w-4 before:h-4 before:top-[50%] before:rounded-sm before:translate-y-[-50%] before:absolute before:right-[-20px] before:border-gray-500 before:border 
                        after:content('') after:right-[-20px] after:w-2 after:h-4 after:border-2 after:absolute after:border-t-0 after:border-l-0 after:rotate-[45deg] cursor-pointer after:border-transparent
                        relative">
						<span>Completed</span>
						<input
							hidden
							type="checkbox"
							onChange={(e) => {
								setCompeted(e.target.checked);
							}}
							defaultChecked={completed}
						/>
					</label>
				)}
				<div className="flex gap-2">
					{edit ? (
						<>
							<button
								className="bg-orange-400 text-white px-4 py-2 rounded-md"
								type="button"
								onClick={() => setEdit(false)}>
								Thoát
							</button>
							<button className="bg-teal-400 text-white px-4 py-2 rounded-md">
								Cập nhật
							</button>
						</>
					) : (
						<>
							<button
								className="bg-green-400 text-white px-4 py-2 rounded-md"
								type="button"
								onClick={() => handleEdit(_id)}>
								Sửa
							</button>
						</>
					)}
					<button
						className="bg-red-400 text-white px-4 py-2 rounded-md"
						type="button"
						onClick={() => handleDelete(_id)}>
						Xóa
					</button>
				</div>
			</div>
		</form>
	);
};

export default TodoItem;
