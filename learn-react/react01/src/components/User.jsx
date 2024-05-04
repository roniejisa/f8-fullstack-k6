import React from "react";

const User = ({ name, email, age, onGetData, children }) => {
	return (
		<>
			{children}
			<h1>{name}</h1>
			<h2>{email}</h2>
			<h3>{age}</h3>
			<button onClick={() => onGetData("Hello F8")}>Click Me</button>
		</>
	);
};
/**
 * Props:
 * Truyền dữ liệu từ compnent cha -> componen con
 * Không sửa được
 * Render Props
 */
export default User;
