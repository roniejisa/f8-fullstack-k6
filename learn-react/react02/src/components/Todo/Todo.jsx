import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
	const [todoList, setTodoList] = useState([]);
	const handleGetTodo = (todo) => {
		setTodoList((todoList) => [...todoList, todo]);
	};

	const handleChangeCompleted = (uuid) => {
		setTodoList((todoList) => {
			const indexTodo = todoList.findIndex(({ id }) => id === uuid);
			todoList[indexTodo].completed = !todoList[indexTodo].completed;
			return todoList;
		});
	};
	return (
		<>
			<TodoList
				todoList={todoList}
				onChangeCompleted={handleChangeCompleted}
			/>
			<TodoForm onGetTodo={handleGetTodo} />
		</>
	);
};

export default Todo;

/**
 * Todo
 *     - todoList
 *     - todo
 */
