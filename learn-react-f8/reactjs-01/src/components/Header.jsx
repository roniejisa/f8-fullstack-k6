import React from "react";

export default function Header({
	title,
	content,
	name,
	email,
	onGetData,
	children,
}) {
	return (
		<>
			<h1>{title}</h1>
			<p>{content}</p>
			<p>{name}</p>
			<p>{email}</p>
			{children}
			<button onClick={() => onGetData("Hello ae")}>Click me</button>
		</>
	);
}

/**
 * Render Props
 * Children Props
 * Prop Types
 * State
 * 
 * Từ cha => qua props => Con
 */
