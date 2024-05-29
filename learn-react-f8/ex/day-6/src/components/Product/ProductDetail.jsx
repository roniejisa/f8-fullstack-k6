import { useState } from "react";
import { useEffect } from "react";
import { getProduct } from "../../request/getProduct";
import { useSelector } from "../../hooks/useSelector";
import Spinner from "../Loading/Spinner";
import { useDispatch } from "../../hooks/useDispatch";
import { changeLoading } from "../../functions/layoutFunction";
import { useNavigate, useParams } from "react-router-dom";
import { useAddCart } from "../../hooks/useCart";

const ProductDetail = () => {
    const { id } = useParams();
    const loading = useSelector((state) => state.layout.loading);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const addToCart = useAddCart(product);
    const getDetailProduct = async () => {
        dispatch(changeLoading(true));
        const product = await getProduct(id);
        setProduct(product.data);
    };
    useEffect(() => {
        getDetailProduct().then(() => {
            dispatch(changeLoading(false));
        });
    }, []);
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex justify-content-center p-3 align-items-center border border-danger border-2 rounded mx-auto">
                                    <img
                                        loading="lazy"
                                        src={product.image}
                                        className="rounded img"
                                        alt={product.name}
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="d-flex flex-column gap-1 justify-content-center">
                                    <h1 className="text-danger">{product.name}</h1>
                                    <h3>{product.brand}</h3>
                                    <blockquote>{product.description}</blockquote>
                                    <p>Category: {product.category}</p>
                                    <div>
                                        <button className="btn btn-danger" onClick={() => navigate("/")}>
                                            Go Home
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <b className="d-block fs-1">
                                            <span className="text-danger">$</span>
                                            {new Intl.NumberFormat().format(product.price)}
                                        </b>
                                        <button className="btn btn-danger mt-2" onClick={() => addToCart()}>
                                            Thêm giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductDetail;
