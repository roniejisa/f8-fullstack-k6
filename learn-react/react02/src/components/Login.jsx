import React from "react";
import { useState } from "react";

const Login = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = form;
		console.log(email, password);
		setForm({
			email: "",
			password: "",
		});
	};
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Email</label>
					<input
						type="email"
						value={form.email}
						onChange={handleChange}
						name="email"
						placeholder="Nhập email"
					/>
				</div>
				<div>
					<label htmlFor="">Password</label>
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
						placeholder="Nhập mật khẩu"
					/>
				</div>
				<button>Login</button>
			</form>
		</>
	);
};
export default Login;
/**
 * useEffect(callback, deps) --> Xử lý các Side Effect (Công việc bên lề, chạy sau khi update UI)
 * 1. state thay đổi
 * 2. Re-render
 * 3. UI Update
 * 4. Callback trong useEffect hoạt đông (Nếu deps thỏa mãn điều kiện)
 * Deps sẽ xảy ra trường hợp sau:
 * null hoặc undefined --> Coponent re-render: callback sẽ chạy
 * [] --> Component render lần đầu tiên: callback sẽ chạy
 * [var,var2,...] --> 1 trong các biến trong deps thay đổi --> Callback sẽ chạy
 */