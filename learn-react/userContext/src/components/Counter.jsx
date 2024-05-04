import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
const Counter = () => {
	const { data,handleSetCount } = useContext(AppContext);

	return (
		<>
			<h1>Count: {data.count}</h1>
			<button onClick={() => handleSetCount("decrement")}>-</button>
			<button onClick={() => handleSetCount("increment")}>+</button>
		</>
	);
};

export default Counter;
