import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterSlide } from "../redux/slice/counterSlide";
import { useEffect } from "react";
import { getPosts } from "../redux/middlewares/postMiddleware";
const { increment, decrement } = counterSlide.actions;
const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);

	const handleIncrement = () => {
		dispatch(increment(10));
	};

	const handleDecrement = () => {
		dispatch(decrement(5));
	};

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	const postList = useSelector((state) => state.counter.postList);
	const status = useSelector((state) => state.counter.status);
    console.log(status);
	if (status === "error") {
		return <h3>Đã có lỗi xảy ra</h3>;
	}
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleDecrement}>-</button>
			<button onClick={handleIncrement}>+</button>
			{status !== "idle" &&
				(status === "pending"
					? "loading"
					: postList.map(({ title,id }) => {
							return <h1 key={id}>{title}</h1>;
					  }))}
		</div>
	);
};

export default Counter;
