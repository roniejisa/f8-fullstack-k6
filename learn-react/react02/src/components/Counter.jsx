import React, { useState } from "react";
import { useEffect } from "react";
// let a = 0;
const Counter = () => {
	// Gọi hook ở đây
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		// Không được gọi hook ở đây
		setCount((count) => count + 1);
	};

	const handleDecrement = () => {
		setCount((count) => count - 1);
	};
	// Gọi hook ở đây
	// if (count >= 10) {
	// 	a = 10;
	// }
	// useEffect(() => {
	//     console.log("Mount");
	// 	console.log("effect: " + count);
	//     return () => {
	//         console.log("Unmount");
	//     }
	// }, []);

	useEffect(() => {
		console.log("effect: " + count);
		return () => {
			console.log("clean up " + count);
		};
	}, [count]);
	return (
		<div>
			{console.log("re-render: " + count)}
			<h1>Count: {count}</h1>
			<button onClick={handleDecrement}>-</button>
			<button onClick={handleIncrement}>+</button>
		</div>
	);
};

export default Counter;

/*
const result = useState(initialValue)

Trả về 1 array bao gồm 2 phần tử;
1. Giá trị state
2. Hàm để cập nhật state

Chú ý khi cleanup trong useEffect
- eventListener, removeEventListener
- Subscribe, Unsubscribe -> observer pattern
- Timer: setTimeout, setInterval
- Blob, localStorage, sessionStorage,...
- set state khi call api (Đảm bảo component chưa bị ăn mount)
 */
