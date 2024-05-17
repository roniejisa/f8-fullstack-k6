import React, { useCallback, useEffect, useState } from "react";
import client from "../api/apiClient";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todo = () => {
	const [todoList, setTodoList] = useState([]);
	const [search, setSearch] = useState("");
	const [isLoading, setLoading] = useState(true);
	const [isFetchData, setFetchData] = useState(true);

	const handleChangeLoading = useCallback((bool) => {
		setLoading(bool);
	}, []);
	const handleFetchData = (bool) => {
		setFetchData(bool);
	};
	async function getTodoList() {
		client.hasToken();
		setLoading(true);
		let param = "";
		if (search) {
			param = "?q=" + search;
		}
		const [response, data] = await client.get("/todos" + param);
		if (response.ok) {
			setTodoList(data.data.listTodo);
			setLoading(false);
			setFetchData(false);
		} else {
			const hasToken = await client.refreshToken();
			if (hasToken) {
				return getTodoList();
			} else {
				window.location.reload();
			}
		}
	}

	useEffect(() => {
		if (isFetchData) {
			getTodoList();
		}
	}, [isFetchData]);

	const handleSearchData = (name) => {
		setSearch(name);
		handleFetchData(true);
	};
	return (
		<>
			<div className="bg-slate-700 text-center text-white max-w-screen-2xl mx-auto p-4">
				<h2 className="font-bold pt-10 mb-3">Todo App</h2>
				<TodoForm
					onFetchData={handleFetchData}
					onSearchData={(name) => handleSearchData(name)}
				/>
				{todoList.map((item) => (
					<TodoItem
						key={item._id}
						item={item}
						onChangeLoading={handleChangeLoading}
						onFetchData={handleFetchData}
					/>
				))}
			</div>
			{isLoading && (
				<div className="rs-loading-main">
					<div className="rsl-wave">
						{" "}
						<span className="rsl-wave--icon"></span>{" "}
						<span className="rsl-wave--icon"></span>{" "}
						<span className="rsl-wave--icon"></span>{" "}
					</div>
				</div>
			)}
		</>
	);
};

export default Todo;
