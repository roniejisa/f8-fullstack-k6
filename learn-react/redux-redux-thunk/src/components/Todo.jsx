import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todoAction";

const Todo = () => {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todo.todoList);
	return (
		<div>
			<h1>Todo App</h1>
			<ul>
				<li>Công việc 1</li>
				<li>Công việc 2</li>
				<li>Công việc 3</li>
				{todoList.map(({ name }, index) => {
					return <li key={index}>{name}</li>;
				})}
			</ul>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(addTodo(name));
					setName("");
				}}>
				<input
					type="text"
					name="name"
					onChange={(e) => {
						setName(e.target.value);
					}}
                    value={name}
					placeholder="Tên công việc"
				/>
				<button>Thêm</button>
			</form>
		</div>
	);
};

export default Todo;
