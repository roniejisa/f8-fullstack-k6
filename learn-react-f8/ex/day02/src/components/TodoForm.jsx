import React, { useState } from "react";
import client from "../api/apiClient";
import { useEffect } from "react";

const TodoForm = ({ onFetchData, onSearchData }) => {
	const [name, setName] = useState("");
	const [isSearch, setSearch] = useState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSearch) {
			onSearchData(name);
		} else {
			client.hasToken();
			const [response, data] = await client.post("/todos", {
				todo: name,
			});
			if (response.ok) {
				onFetchData(true);
				setName("");
			}
		}
	};
	let timer = null;
	useEffect(() => {
		if (isSearch) {
			timer = setTimeout(async () => {
				onSearchData(name);
			}, 500);
		}
		return () => {
			clearTimeout(timer);
		};
	}, [name]);
	return (
		<form
			className="max-w-sm mx-auto flex gap-3 mb-4"
			onSubmit={handleSubmit}>
			<div className="border-b border-b-teal-500 flex flex-1 gap-3 pb-3">
				<input
					type="text"
					className="flex-1 rounded-md outline-none bg-transparent"
					placeholder={isSearch ? "Tìm kiếm todo" : "Thêm mới todo"}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button className="bg-teal-500 text-white p-2 rounded-md whitespace-nowrap">
					{isSearch ? "Tìm kiếm" : "Thêm mới"}
				</button>
			</div>
			<button
				type="button"
				className="bg-orange-500 text-white p-2 mb-[13px] rounded-md whitespace-nowrap"
				onClick={(e) => setSearch(!isSearch)}>
				{isSearch ? "Thêm mới" : "Tìm kiếm"}
			</button>
		</form>
	);
};

export default TodoForm;
