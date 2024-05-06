import React from "react";
import { useNavigate } from "react-router-dom";
const AuthIndex = () => {
    const navigate = useNavigate();
	return (
		<div>
			<h1 className="font-bold text-2xl">
				Chào mừng bạn đến với trang đăng nhập
			</h1>
			<button onClick={() => navigate("/auth/login")}>Login</button>
			<button onClick={() => navigate("/auth/register")}>Register</button>
		</div>
	);
};

export default AuthIndex;
