/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./../request/getProduct";
import { useState } from "react";
import Paginate from "../components/Paginate/Paginate";
import ProductList from "../components/Product/ProductList";
import { useRef } from "react";
import { useDispatch } from "../hooks/useDispatch";
import { changeLoading } from "../functions/layoutFunction";
import Spinner from "../components/Loading/Spinner";
import { useSelector } from "./../hooks/useSelector";
const Product = () => {
    const loading = useSelector((state) => state.layout.loading);
    let { page } = useParams();
    page = +page || 1;
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const abortControllerRef = useRef(null);
    const dispatch = useDispatch();
    const updateProducts = async () => {
        dispatch(changeLoading(true));
        const products = await getProducts(page, abortControllerRef);
        if (products) {
            const { totalPage, listProduct } = products.data;
            if (total === 0) {
                setTotal(totalPage);
            }
            setProducts(listProduct);
        }
        return true;
    };

    useEffect(() => {
        updateProducts().then(() => {
            dispatch(changeLoading(false));
        });
    }, [page]);
    return (
        <div className="container">
            <div className="row g-3">
                <h1 className="text-center">Products</h1>
                <>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>
                            <ProductList products={products} />
                            <Paginate total={total} page={page} />
                        </>
                    )}
                </>
            </div>
        </div>
    );
};

export default Product;
