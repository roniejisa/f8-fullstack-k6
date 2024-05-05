import React from "react";
import { useState } from "react";
import Content from "./Content";
import { useRef } from "react";
import { useEffect } from "react";
import Title from "./Title";

const Counter = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
    const inputRef = useRef();
	const handleCre = () => {
		setCount(count + 1);
		countRef.current++;
	};
    useEffect(() => {
        inputRef.current.focus();
        console.log(titleRef);
    },[])
    const titleRef = useRef();
	return (
		<>
			<h1>Count: {countRef.current}</h1>
			<button onClick={() => handleCre()}>+</button>
            <input type="text" ref={inputRef} />
			<Content count={count} />
            <Title ref={titleRef}/>
		</>
	);
};

export default Counter;

/*
Higher Order Component = HOC
- Component cấp cao hơn của Component hiện tại
- Bọc component hiện tại
- Các dữ liệu sẽ đi qua component cấp cao trước khi tới component hiện tại ( Thường xuyên truyền dữ liệu qua props)
- Cách thiết kế: Tạo ra 1 component mới nhận vào component ban đầu và trả về chính component đó
*/
