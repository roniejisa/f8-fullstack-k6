import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Checkout = () => {
	const isLogin = true;
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/cam-on", {
			state: {
				id: 123,
			},
		});
	};

	return isLogin ? (
		<div>
			<h1 className="text-2xl font-bold">Checkout</h1>
			<button onClick={handleCheckout}>Đặt hàng</button>
		</div>
	) : (
		<Navigate to={"/login"} />
	);
};

export default Checkout;
