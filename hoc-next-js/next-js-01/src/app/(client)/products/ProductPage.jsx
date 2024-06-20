import Link from "next/link";
import React from "react";
import Form from "./components/Form";

const getProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    return data;
};

const ProductPage = async ({ searchParams }) => {
    const { status, keyword } = searchParams;
    const products = await getProducts();
    return (
        <div>
            <h1 className="text-3xl font-bold">Sản phẩm</h1>
            <Form />
            <h2>Trạng thái: {status}</h2>
            <h2>Từ khóa: {keyword}</h2>
            <div className="grid grid-cols-12">
                {products.map((item) => {
                    return (
                        <div key={item.id} className="col-span-3">
                            <h3>{typeof item.title === "string" ? item.title : ""}</h3>
                            <p>{item.description || ""}</p>
                            <Link className="text-red-300" href={"/products/" + item.category.name + "/" + item.id}>
                                Xem chi tiết
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductPage;
