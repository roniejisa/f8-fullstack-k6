import { revalidateTag } from "next/cache";
// Clear Cache
const handleClearCache = async () => {
	"use server";
	revalidateTag("todos");
};
const TodoList = ({ todoList }) => {
	return (
		<>
			<form action={handleClearCache}>
				<button>Refresh</button>
			</form>
			{todoList.map(({ id, name }) => (
				<h3 key={id}>{name}</h3>
			))}
		</>
	);
};

export default TodoList;
