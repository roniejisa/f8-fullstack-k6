import Image from "next/image";
import React from "react";
const getProduct = async (id) => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/"+id);
    const data = await response.json();
    return data;
};
const ProductDetail =async ({ category, slug }) => {
    const product = await getProduct(slug);
    const image = JSON.parse(product.images[0])[0];
    return (
        <>
            <h1>Chuyên mục: {product.category.name}</h1>
            <h3>Sản phẩm: {product.title}</h3>
            <div>{product.description}</div>
            <div>
                <Image src={image} alt={product.title} width={200} height={75} priority />
            </div>
        </>
    );
};

export default ProductDetail;
