import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "../core/hook";
import { v4 as uuidV4 } from "uuid";
const Todo = () => {
	const [name, setName] = useState("");

	const {todoList,status} = useSelector((state) =>state);

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "todo/add",
			payload: {
				id: uuidV4(),
				name,
				completed: false,
			},
		});
		setName("");
	};

	const handleDelete = (id) => {
		dispatch({
			type: "todo/delete",
			payload: id,
		});
	};
    useEffect(() => {
        console.log(status);
    },[status]);

	const handleChange = (e) => {
		setName(e.target.value);
	};
	return (
		<>
			<h1>Todo App</h1>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleChange}
				/>
			</form>
			<ul>
				{todoList.map(({ id, name, completed }) => (
					<li key={id}>
						<span onClick={() => handleDelete(id)}>&times;</span>
						<label>
							<input type="checkbox" defaultChecked={completed} />
							<span>{name}</span>
						</label>
					</li>
				))}
			</ul>
		</>
	);
};

export default Todo;
