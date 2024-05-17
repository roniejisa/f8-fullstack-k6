import React, { useEffect, useRef, useState } from "react";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

const App = () => {
    const inputRef = useRef();
	const myObj = useRef(0);
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
		myObj.current++;
	};

	// useEffect(() => {
	// 	inputRef.current.focus();
	// }, []);
    useEffect(()=>{
        inputRef.current.bcd = "Hello anh em F8";
        console.log(inputRef.current.className);
        inputRef.current.className = "text-3"
    },[])
	return (
		<div>
			<h1>Count: {count}</h1>
			<h1>Count2: {myObj.current}</h1>
			<button onClick={handleClick}>Click me</button>
			<hr />
			<input type="text" ref={inputRef} />

			<Checkbox />
            <Input ref={inputRef} count={count} />
		</div>
	);
};

export default App;
//Refs
/**
 * Chức năng của react dùng để tham chiếu
 * Giữ nguyên kết quả gần nhất khi bị re-render
 * Tham chiếu đến các react element để trả về DOM Element
 * Ref có thể thay đổi trực tiếp
 *
 * Ref ==> Đơn giản là 1 object thuần túy
 * Trong class component ==> Sử dụng React.createRef để tạo ref
 *
 * Trong functional Component ==> Sử dụng Hook useRef()
 *
 * Khi ref thay đổi ==> Component không bị re-render chỗ này nếu muốn update được ui thì phải có state
 */
