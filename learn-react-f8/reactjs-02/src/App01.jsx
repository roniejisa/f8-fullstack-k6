import { useReducer } from "react";
import { initialState, reducer } from "./utils/reducer";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClick = () => {
		dispatch({
			type: "counter/increment",
			payload: 10,
		});
	};
    
    const handleDecrement = () => {
		dispatch({
			type: "counter/decrement",
			payload: 10,
		});
	};
	//Event handler
	return (
		<div>
			<h1>Count:{state.count}</h1>
			<button onClick={handleDecrement}>-</button>
			<button onClick={handleClick}>+</button>
		</div>
	);
};

export default App;

/*
1 số vấn đề khi quản lý state
- Logic update state xử lý ở trong component (Thông qua event handler)
- Gặp khó khăn khi có quá nhiều state trong 1 component 
- Kế thừa các logic update state (1 logic dùng ở nhiều component)

==> Tách logic update state ra 1 hàm khác
*/
