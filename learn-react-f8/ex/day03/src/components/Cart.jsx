import React, { useContext, useEffect } from "react";
import { AppContext } from "../core/Provider";
import client from "../api/apiClient";
import { getCookie } from "../utils/all";
import { toast } from "react-toastify";

const Cart = () => {
	const { cart, setCart, setLogged, setProducts,setLoading } = useContext(AppContext);

	useEffect(() => {
		const cart = localStorage.getItem("cart");
		if (cart) {
			setCart(JSON.parse(cart));
		}
	}, []);

	const handleOrder = async () => {
		client.hasToken();
        setLoading(true);
		const [response, data] = await client.post(
			"/orders",
            JSON.stringify(cart)
		);
		if (response.ok) {
            toast.info("Đã thanh toán!")
			setCart([]);
            setLoading(false);
		} else if (data.code === 401) {
            const email = getCookie("email");
			const [response, data] = await client.get("/api-key?email=" + email);
            if (response.ok) {
				document.cookie = `apiKey=${data.data.apiKey}`;
                handleOrder();
                setCart([]);
			}else{
                document.cookie = `apiKey=${data.data.apiKey};expires=${new Date('1970').toUTCString()}`;
                document.cookie = `email=${data.data.apiKey};expires=${new Date('1970').toUTCString()}`;
                localStorage.removeItem('cart');
                setLogged(false);
                setProducts([]);
                setLoading(false);
            }
		}
	};
	return (
		<div>
			{cart.length ? (
				<>
					<table className="bg-white w-full rounded-md mt-3">
						<thead className="border-b">
							<tr>
								<td className="p-2 font-bold text-slate-800">
									Tên sản phẩm
								</td>
								<td className="p-2 font-bold text-slate-800">Số lượng</td>
								<td className="p-2 font-bold text-slate-800">Còn lại</td>
								<td className="p-2 font-bold text-slate-800">Tổng tiền</td>
							</tr>
						</thead>
						<tbody>
							{cart.map(({ productId, name, quantity, left, price }) => (
								<tr key={productId}>
									<td className="p-2 text-slate-700 font-bold">{name}</td>
									<td className="p-2 text-slate-700">{quantity}</td>
									<td className="p-2 text-slate-700">{left}</td>
									<td className="p-2 text-slate-700">
										{price * quantity}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<button
						onClick={handleOrder}
						className="bg-green-600 text-white p-3 rounded-md mt-3">
						Thanh toán
					</button>
				</>
			) : (
				<h2 className="text-white text-lg mt-3 text-center">
					Chưa có gì trong giỏ hàng cả!
				</h2>
			)}
		</div>
	);
};

export default Cart;
