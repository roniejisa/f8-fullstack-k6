import React from "react";
import ProductPage from "../ProductPage";
import ProductDetail, { getProduct } from "../ProductDetail";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {
    const { slug } = params;
    if (!slug) {
        return {
            title: `Sản phẩm`,
        };
    }
    const id = slug[1];
    const product = await getProduct(id);
    if(!product) return notFound();
    return {
        title: `${product.title}`,
    }
}

const ProductsPage = ({ params, searchParams }) => {
    const { slug } = params;
    return <>{slug ? <ProductDetail category={slug[0]} slug={slug[1]} /> : <ProductPage searchParams={searchParams}/>}</>;
};
export default ProductsPage;
