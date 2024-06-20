import React from "react";
import ProductPage from "../ProductPage";
import ProductDetail from "../ProductDetail";

const ProductsPage = ({ params, searchParams }) => {
    const { slug } = params;
    return <>{slug ? <ProductDetail category={slug[0]} slug={slug[1]} /> : <ProductPage searchParams={searchParams}/>}</>;
};
export default ProductsPage;
