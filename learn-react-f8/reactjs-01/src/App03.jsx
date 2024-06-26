import React, { useEffect, useState } from "react";
import User from "./components/User";
let apiUser = "https://jsonplaceholder.typicode.com/users";
const App = () => {
	const [count, setCount] = useState(0);
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isShow, setShow] = useState(true);
	const [isError, setError] = useState(false);

	const handleIncrement = () => {
		setCount(count + 1);
		console.log(count);
	};

	const getUsers = async () => {
		try {
			const response = await fetch(apiUser);
			const data = await response.json();
			if (response.ok) {
				setUsers(data);
				setLoading(false);
			} else {
				throw new Error("Lỗi rồi");
			}
		} catch (e) {
			setError(e);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

    useEffect(() => {
        console.log("Count = " + count);

        return () => {
            //Cleanup
            console.log("Clean count = " + count);
        } 
    },[count])
	return (
		<div>
			<h1>Count : {count}</h1>
			{console.log("update UI: " + count)}
			<button onClick={handleIncrement}>Click me</button>
			<button onClick={() => setShow(!isShow)}>Toggle</button>
			{isShow && (
				<User error={isError} loading={isLoading} dataUsers={users} />
			)}
		</div>
	);
};

export default App;

/*
Component: State thay đổi ==> Re-render

Phát sinh 1 số công việc bên ngoài sau khi css thay đổi ==> Thực hiện sau khi re-render

==> Side Effect

Hook xử lý các side effect
useEffect(callback, dependencies)
dependencies: Điều kiện để callback trong setEffect hoạt động
- [] ==> Hoạt động ngay sau khi component được render lần đầu tiên
- null, undefined ==> Component re-render callback sẽ chạy
- [bien1, bien2, bien3,...] ==> 1 trong các biến thay đổi, callback sẽ hoạt động
*/


/**
 * Mouting: Component được đưa vào DOM
 * Unmouting: Component bị loại khỏi DOM
 * 
 * 
 * Thứ tự chạy của useEffect
 * 
 * 1. State thay đổi
 * Component Re-render
 * Update UI
 * Clean (Nếu có)
 * Callback useEffect
 * 
 * 
 * 1 số trường hợp sử dụng cleanup
 * 
 * 
 * Hủy các biến không dùng 
 * Hủy các timer,event
 * Hủy các Storage: Blob, localStorage, sessionStorage,...
 * Hủy API đang thực thi 
 */