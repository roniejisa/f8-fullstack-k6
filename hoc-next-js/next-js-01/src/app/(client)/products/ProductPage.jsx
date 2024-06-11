import Link from "next/link";
import React from "react";

const getProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    return data;
};
const ProductPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1 className="text-3xl font-bold">Sản phẩm</h1>
            <div>
                {products.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <Link className="text-red-300" href={"/products/" + item.category.name + "/" + item.id}>
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
