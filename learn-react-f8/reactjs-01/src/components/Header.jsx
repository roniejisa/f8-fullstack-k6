import React from "react";

export default function Header({ title, content, name, email }) {
	return (
		<>
			<h1>{title}</h1>
			<p>{content}</p>
            <p>{name}</p>
            <p>{email}</p>
		</>
	);
}

/**d
 * 
 * Render Props
 * Children Props
 * Prop Types
 * State
 */