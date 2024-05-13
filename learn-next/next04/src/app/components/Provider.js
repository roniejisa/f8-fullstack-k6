"use client";
import React, { useState } from "react";

const Provider = ({ children }) => {
	const [show, setShow] = useState(true);
	const handleShow = () => {
		setShow(!show);
	};
	return (
		<div>
			<button onClick={handleShow}>Ẩn</button>
			<hr />
			{show && children}
		</div>
	);
};

export default Provider;
