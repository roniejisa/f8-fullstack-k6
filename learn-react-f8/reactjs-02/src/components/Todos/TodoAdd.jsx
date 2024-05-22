import { useContext, useState } from "react";
import { AppContext } from "../../App";

const TodoAdd = () => {
	const {dispatch} = useContext(AppContext);
	const [name, setName] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "todo/add",
			payload: {
				name,
				isCompleted: false,
			},
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Nhập công việc"
			/>
			<button>Submit</button>
		</form>
	);
};

export default TodoAdd;
