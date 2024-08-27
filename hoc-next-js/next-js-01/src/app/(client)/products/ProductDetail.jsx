import { notFound } from "next/navigation";
import React from "react";
export const getProduct = async (id) => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/"+id);
    if(response.status === 400){
        return false;
    }
    const data = await response.json();
    return data;
};
const ProductDetail =async ({ category, slug }) => {
    const product = await getProduct(slug);
    if(!product) return notFound();
    return (
        <>
            <h1>Chuyên mục: {product.category.name}</h1>
            <h3>Sản phẩm: {product.title}</h3>
            <div>{product.description}</div>
            
        </>
    );
};

export default ProductDetail;
