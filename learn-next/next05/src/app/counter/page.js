"use client";

import { useDispatch, useSelector } from "react-redux";
import { counterSlide } from "@/redux/slices/counterSlide";
const {increment,decrement} = counterSlide.actions;

const CounterPage = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(10));
    }
    const handleDecrement = () => {
        dispatch(decrement(5));
    }
    
	return (
		<div>
			<h1>Count: {count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
		</div>
	);
};

export default CounterPage;
