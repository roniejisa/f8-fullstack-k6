import React, { useLayoutEffect, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		setCount(count + 1);
	};

	useLayoutEffect(() => {
		if (count == 5) {
			setCount(0);
		}
	}, [count]);

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrement}>+</button>
		</>
	);
};

export default Counter;
/**
 * 
 * useEffect
 * 1. State thay đổi
 * 2. Re-render
 * 3. UI Update
 * 4. Cleanup useEffect
 * 5. Callback useEffect
 * 
 * useLayoutEffect
 * 1. State thay đổi
 * 2. Re-render
 * 3. Cleanup useLayoutEffect
 * 4. Callback useLayoutEffect
 * 5. UI Update --> Đợi callback chạy xong
 */