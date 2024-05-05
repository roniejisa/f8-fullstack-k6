import React from "react";
import { useId } from "react";

const Input = ({ name, type = "text" }) => {
    const id = useId();
	return (
		<div>
			<label htmlFor={id}>{name}</label>
			<input type={type} id={id} placeholder={name} />
		</div>
	);
};

export default Input;
