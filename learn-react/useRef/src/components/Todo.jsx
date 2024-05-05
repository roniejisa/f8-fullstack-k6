import React, { useEffect, useRef } from "react";
import Checkbox from "./Checkbox";

const Todo = () => {
	const checkboxRef = useRef([]);
	const users = [
		{
			id: 1,
			name: "user 1",
		},
		{
			id: 2,
			name: "user 1",
		},
		{
			id: 3,
			name: "user 1",
		},
		{
			id: 4,
			name: "user 1",
		},
		{
			id: 5,
			name: "user 1",
		},
		{
			id: 6,
			name: "user 1",
		},
		{
			id: 7,
			name: "user 1",
		},
	];
	useEffect(() => {
		console.log(checkboxRef);
	}, []);
	return (
		<div>
			{users.map(({ id, name }) => {
				return (
					<label key={id}>
						<Checkbox
							ref={(el) => checkboxRef.current[id] = el}
							name="user"
						/>
						{name}
					</label>
				);
			})}
		</div>
	);
};

export default Todo;
