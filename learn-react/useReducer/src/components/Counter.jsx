import React from "react";
import { useContext } from "react";
import { ProviderContext } from "../core/Provider";

const Counter = () => {
    const {state,dispatch} = useContext(ProviderContext)
	const handleDecrement = () => {
		dispatch({
			type: "counter/decrement",
		});
	};

	const handleIncrement = () => {
		dispatch({
			type: "counter/increment",
		});
	};

	return (
		<>
			<h1>Count: {state.count}</h1>
			<button onClick={handleDecrement}>-</button>
			<button onClick={handleIncrement}>+</button>
		</>
	);
};

export default Counter;
