import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import client from "./api/apiClient";
import { toast } from "react-toastify";

const checkData = async () => {
	let email = localStorage.getItem("email");

	if (!email) {
		email = await new Promise((resolve) => {
			email = prompt("Nhập email của bạn!");
			const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]+$/;
			if (!patternEmail.test(email)) {
				toast.error("Email không hợp lệ vui lòng nhập lại!");
				resolve(false);
			}
			resolve(email);
		});
		if (email) {
			const [response, data] = await client.get("/api-key?email=" + email);
			if (response.ok) {
				const {
					data: { apiKey },
				} = data;
				localStorage.setItem("token", apiKey);
				localStorage.setItem("email", email);
				return true;
			} else {
				toast.error(data.message);
			}
		}
		return checkData();
	}
    toast.success("Chào mừng bạn quay trở lại "+email.slice(0,email.indexOf('@')));
	return true;
};

const App = () => {
	const [isUser, setUser] = useState(false);

	useEffect(() => {
		checkData().then((res) => {
			if (res === true) {
				setUser(true);
			}
		});
	}, []);
	return <div>{isUser && <Todo />}</div>;
};

export default App;
