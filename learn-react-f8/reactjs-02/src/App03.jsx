import { useContext } from "react";
import { AppContext } from "./store/Provider";

const App = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<div>
			<h1>Count: {state.count}</h1>
			<button
				onClick={() =>
					dispatch({
						type: "counter/increment",
						payload: 1,
					})
				}>
				Click me
			</button>
		</div>
	);
};

export default App;
