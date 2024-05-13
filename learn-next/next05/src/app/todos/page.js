"use client";

import { fetchTodos } from "@/redux/middlewares/todoMiddleware";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoPage() {
	const { todos, status } = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	return (
		<div>
			{status === "success" ? (
				<ul>
					{todos.map(({ id, title }) => (
						<li key={id}>{title}</li>
					))}
				</ul>
			) : (
				<h3>Đang tải</h3>
			)}
		</div>
	);
}
