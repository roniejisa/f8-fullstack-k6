import React, { useEffect, useState } from "react";
import client from "../api/apiClient";
import { toast } from "react-toastify";

const TodoItem = ({
	item: { _id, todo, isCompleted },
	onChangeLoading,
	onFetchData,
}) => {
	const [isEdit, setEdit] = useState(false);
	const [name, setName] = useState({
		old: todo,
		new: todo,
	});
	const [checked, setChecked] = useState({
		old: isCompleted,
		new: isCompleted,
	});

	const handleDelete = async () => {
		toast("Bạn có muốn xóa công việc này!", {
			type: "warning",
			onClick: async () => {
				client.hasToken();
				const [response, data] = await client.delete("/todos/" + _id);
				if (response.ok) {
                    toast.success("Đã xóa công việc thành công!");
					onFetchData(true);
				}
			},
		});
	};

	const handleUpdateTodo = async (e) => {
		e.preventDefault();
		onChangeLoading(true);
		const [response, data] = await client.patch("/todos/" + _id, {
			todo: name.new,
			isCompleted: checked.new,
		});

		if (response.ok) {
            toast.success("Cập nhật công việc thành công!");
			setName({ ...name, old: data.data.todo });
			setChecked({ ...checked, old: data.data.isCompleted });
			setEdit(false);
			onChangeLoading(false);
		}
	};

	return (
		<form
			className="p-4 mb-3 bg-white max-w-2xl mx-auto rounded-md"
			onSubmit={handleUpdateTodo}>
			<input
				className={`${
					checked.new && "line-through"
				} text-black outline-none border w-full p-2 rounded-md`}
				type="text"
				value={name.new ?? ""}
				onChange={(e) => setName({ ...name, new: e.target.value })}
				readOnly={!isEdit}
			/>
			{isEdit ? (
				<>
					<div className="flex items-center justify-between mt-4">
						<div className="flex items-center">
							<label htmlFor={_id} className="mr-2 text-gray-700">
								Not Completed
							</label>
							<input
								id={_id}
								type="checkbox"
								className="form-checkbox h-5 w-5 text-gray-600"
								defaultChecked={checked.new}
								onChange={() =>
									setChecked({ ...checked, new: !checked.new })
								}
							/>
						</div>
						<div className="flex items-center">
							<button
								type="button"
								className="bg-orange-500 hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
								onClick={() => {
									setEdit(false);
									setName({ ...name, new: name.old });
									setChecked({ ...checked, new: checked.old });
								}}>
								Thoát
							</button>
							<button className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
								Update
							</button>
							<button
								type="button"
								className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
								Xóa
							</button>
						</div>
					</div>
				</>
			) : (
				<div className="flex items-center gap-3 mt-3">
					<button
						type="button"
						className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
						onClick={() => setEdit(true)}>
						Sửa
					</button>
					<button
						type="button"
						className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						onClick={handleDelete}>
						Xóa
					</button>
				</div>
			)}
		</form>
	);
};

export default TodoItem;
