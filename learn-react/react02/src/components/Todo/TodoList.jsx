import React from "react";

const TodoList = ({ todoList, onChangeCompleted }) => {
	return (
		<ul>
			{todoList.map(({ id, name, completed }) => {
				return (
					<li key={id}>
						<label>
							<input
								type="checkbox"
								onChange={() => onChangeCompleted(id)}
								defaultChecked={completed}
							/>
							<span>{name}</span>
						</label>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
