import React, { useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { getApiKey } from "../api/apiKey";
import { useDispatch } from "../core/hook";

const Todo = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getApiKey().then((check) => {
			if (!check) {
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
				dispatch({
					type: "todo/fetch-pending",
					payload: "idle",
				});
			}
		});
	}, []);
	return (
		<div className="bg-blue-900 text-center py-3">
			<div className="max-w-[500px] mx-auto">
				<h1 className="py-3 text-white">Welcome to Todo App!</h1>
				<TodoForm />
			</div>
			<TodoList />
		</div>
	);
};

export default Todo;
