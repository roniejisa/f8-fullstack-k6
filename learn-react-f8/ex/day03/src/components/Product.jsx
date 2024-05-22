import React, { useContext, useEffect } from "react";
import { AppContext } from "../core/Provider";
import client from "../api/apiClient";
import ProductItem from "./ProductItem";
import Cart from "./Cart";

const Product = () => {
	const { products, setProducts,loading,setLoading } = useContext(AppContext);
	const getProducts = async () => {
		client.hasToken();
		const [response, data] = await client.get("/products");
		if (response.ok) {
			setProducts(data.data.listProduct);
            setLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
        <>
            {loading && (<div className="rs-loading-main"><div className="rsl-wave"> <span className="rsl-wave--icon"></span> <span className="rsl-wave--icon"></span> <span className="rsl-wave--icon"></span> </div></div>)}
            <div className="max-w-screen-xl mx-auto">
                <div className="bg-slate-700 rounded-md p-[10px]">
                    <h3 className="text-white text-xl mb-3 text-center">Welcome to Shop!</h3>
                    <div className="grid grid-cols-5 gap-4">
                        {products.map((item) => (
                            <ProductItem key={item._id} item={item} />
                        ))}
                    </div>
                    {products.length && <Cart />}
                </div>
            </div>
        </>
	);
};

export default Product;
