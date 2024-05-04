import React, { createContext } from "react";
import Counter from "./components/Counter";
import { useState } from "react";
import { useEffect } from "react";
import Message from "./components/Message";
export const AppContext = createContext();
let message;
const App = () => {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("");
	const handleSetCount = (type) => {
		setCount((count) => (type === "increment" ? count + 1 : count - 1));
	};

	useEffect(() => {
		if (count === 10) {
			setMessage("Học react không khó!");
		}
	}, [count]);
   
	return (
		<AppContext.Provider
			value={{
				data: { count, message },
				handleSetCount,
			}}>
			<div>Context API</div>
            <Message  />
			<Counter />
		</AppContext.Provider>
	);
};

export default App;

/**
 * A -> B -> C -> D ==> Truyền qua props
 *
 *
 * A -> D -> B -> C ==> Gãy chuỗi nhận dữ liệu từ Component A
 *
 * --> Giải pháp: Dùng context để gửi và nhận dữ liệu không cần thông qua props
 *
 *
 * Context có 3 thành phần chính:
 *
 * 1. Đối tượng context
 * 2. Provider: Component của đối tượng
 * 3. Consumer (Thay thế bởi useContext)
 *
 */
