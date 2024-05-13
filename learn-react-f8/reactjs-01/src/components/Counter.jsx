import React, { useState } from "react";
const Counter = (props) => {
	// props = {...props, title:"F88"}
	// console.log(props);
	// const [tenState, hamSet] = useState(initialValue)

	const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }

    const handleDecrement = () => {
        setCount((prev) => prev - 1);
    }

    console.log("render");  
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleDecrement}>-</button>
			<button onClick={handleIncrement}>+</button>
		</div>
	);
};

export default Counter;

/*
Re-Render

Repaint

Dom thật --> Thay dổi trực tiếp trên DOM thật

DOM ảo --> Sao chép từ DOM thật --> Khi component re-render so sánh DOM ảo với DOM thật xem chỗ nào khác nhau thì sẽ cập nhật lại riêng chỗ đó
*/
