import { useContext } from "react";
import { AppContext } from "../../App";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const { state } = useContext(AppContext);
	
	return (
		<div>
			<ul>
				{state.todoList.map((item, index) => (
					<TodoItem key={index} item={item} index={index}/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
