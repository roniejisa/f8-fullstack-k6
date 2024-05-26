/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AppContext } from "../../App02";

const TodoItem = ({ item, index }) => {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState(item.name);
	const [complete, setComplete] = useState(item.complete);
	const [edit, setEdit] = useState(false);
	const handleDelete = () => {
        console.log(index);
		dispatch({
			type: "todo/delete",
			payload: index,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "todo/update",
			payload: {
				id: index,
				name,
			},
		});
        setEdit(false);
	};

	const handleChangeComplete = () => {
		setComplete(!complete);
        dispatch({
			type: "todo/done",
			payload: {
				id: index,
				completed: !complete,
			},
		});
	};
	return (
		<>
			{edit ? (
				<>
					<form action="" onSubmit={(e) => handleSubmit(e)}>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<button>Submit</button>
					</form>
				</>
			) : (
				<li>
					<label htmlFor="">
						<input
							type="checkbox"
							defaultChecked={complete}
							onChange={handleChangeComplete}
						/>
						{item.name}
					</label>
					<button onClick={() => setEdit(true)}>Sửa</button>
					<button onClick={handleDelete}>Delete</button>
				</li>
			)}
		</>
	);
};

export default TodoItem;