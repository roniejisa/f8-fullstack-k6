import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "../core/hook";
import { getTodos } from "../api/todoApi";
import { toast } from "react-toastify";
import { refreshApiKey } from "../api/apiKey";

const TodoList = () => {
	const { todoList, status } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		if (status === "idle") {
			dispatch({
				type: "todo/loading",
				payload: true,
			});
			getTodos().then(([response, data]) => {
				if (response.ok) {
					const {
						data: { listTodo },
					} = data;
					dispatch({
						type: "todo/fetch",
						payload: listTodo,
					});
					dispatch({
						type: "todo/loading",
						payload: false,
					});
				} else {
					// Chỗ này cần kiểm tra nếu không hợp lệ nữa thì lấy lại key
					if (data.message === "Unauthorize") {
						refreshApiKey().then((res) => {
							console.log(res);
						});
						dispatch({
							type: "todo/fetch-pending",
							payload: "idle",
						});
					}
				}
			});
		}
	}, [status]);

	return (
		<div className="m-auto max-w-[500px] flex flex-col gap-2">
			{todoList?.map((data) => (
				<TodoItem key={data._id} data={data} />
			))}
		</div>
	);
};

export default TodoList;
