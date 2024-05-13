export const todoApi = "http://localhost:3001/todos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const getTodo = async () => {
	const response = await fetch(todoApi, {
		next: {
			revalidate: 5,
			tags: ["todos"],
		},
	});
	return response.json();
};

const TodoPage = async () => {
	const todoList = await getTodo();
	return (
		<div>
			<h1>Todo App</h1>
			<TodoForm />
			<TodoList todoList={todoList} />
		</div>
	);
};

export default TodoPage;
