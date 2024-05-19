import React, { useContext } from "react";
import { AppContext } from "../core/Provider";
import { toast } from "react-toastify";

const ProductItem = ({ item }) => {
	const { _id, image, name, price } = item;
	const { cart, setCart } = useContext(AppContext);

	const handleAddCart = () => {
		let indexCart = cart.findIndex(({productId}) => productId === _id);
		let carts;
		if (indexCart !== -1) {
			cart[indexCart].quantity++;
			cart[indexCart].left--;
			carts = [...cart];
		} else {
			carts = [
				...cart,
				{
					quantity: 1,
					left: item.quantity--,
					name: name,
                    price: price,
					productId: item._id,
				},
			];
		}
        toast.success("Đã thêm sản phẩm vào giỏ hàng!");
		setCart(carts);
		localStorage.setItem("cart", JSON.stringify(carts));
	};

	return (
		<div className="bg-white p-3 rounded-md">
			<img src={image} className="w-full rounded-md" />
			<div className="">
				<h2 className="mt-3 text-left font-bold mb-3 text-lg">
					<a href="">{name}</a>
				</h2>
				<div className="flex justify-between items-center">
					<span className="text-orange-500 font-bold">${price}</span>
					<button
						className="p-2 bg-green-500 rounded-md text-white cursor-pointer"
						onClick={handleAddCart}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
