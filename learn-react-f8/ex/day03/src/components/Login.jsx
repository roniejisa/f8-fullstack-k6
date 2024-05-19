import React, { useContext, useEffect, useState } from "react";
import client from "../api/apiClient";
import { AppContext } from "../core/Provider";
import { toast } from "react-toastify";

const Login = () => {
	const [email, setEmail] = useState("");
	const { setLogged } = useContext(AppContext);

	useEffect(() => {}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const [response, data] = await client.get("/api-key?email=" + email);
		if (response.ok) {
			document.cookie = `apiKey=${data.data.apiKey}`;
			document.cookie = `email=${email}`;
			setLogged(true);
		} else {
			toast.error(data.message);
		}
	};

	return (
		<div className="h-screen flex items-center justify-center bg-slate-400">
			<form
				onSubmit={handleSubmit}
				className="w-50 p-3 bg-white rounded-md">
				<input
					className="w-full border rounded-md p-2"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email..."
				/>
				<button className="w-full mt-3 border rounded-md bg-orange-400 text-white">
					Đăng nhập
				</button>
			</form>
		</div>
	);
};

export default Login;
