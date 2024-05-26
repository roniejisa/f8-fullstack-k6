import { useRef } from "react";
import styles from "./Todo2.module.css";
import {
	addTodo,
	completedTodo,
	deleteTodo,
	setTodo,
	updateTodo,
} from "../../store/actions/todoAcion";
import { useDispatch, useSelector } from "../../store/hooks/hook";

const Todo2 = () => {
	const { todoList, todo } = useSelector((state) => state);
	const dispatch = useDispatch();

	const inputRef = useRef();
	const formRef = useRef();
	const buttonRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();

		if (formRef.current.dataset.id) {
			dispatch(updateTodo(formRef.current.dataset.id, todo));
			delete formRef.current.dataset.id;
			buttonRef.current.innerText = "Thêm";
		} else {
			dispatch(
				addTodo({
					name: todo,
					isCompleted: false,
				})
			);
		}

		dispatch(setTodo(""));

		inputRef.current.focus();
	};

	const handleEdit = (index, todo) => {
		formRef.current.dataset.id = index;
		buttonRef.current.innerText = "Sửa";
		dispatch(setTodo(todo));
	};
	return (
		<>
			<ul>
				{todoList.map(({ name, isCompleted }, index) => (
					<li key={index} className={`${isCompleted ? styles.done : ""}`}>
						{name}
						<input
							type="checkbox"
							defaultChecked={isCompleted}
							onChange={({ target }) =>
								dispatch(completedTodo(index, target.checked))
							}
						/>
						<button onClick={() => handleEdit(index, name)}>Sửa</button>
						<button
							onClick={() => {
								if (confirm("Bạn có chắc chắn muốn xóa không")) {
									dispatch(deleteTodo(index));
								}
							}}>
							&times;
						</button>
					</li>
				))}
			</ul>
			<form action="" ref={formRef} onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					placeholder="Tên..."
					value={todo}
					onChange={(e) => {
						dispatch({
							type: "todo/set",
							payload: e.target.value,
						});
					}}
				/>
				<button ref={buttonRef}>Thêm</button>
			</form>
		</>
	);
};

export default Todo2;
