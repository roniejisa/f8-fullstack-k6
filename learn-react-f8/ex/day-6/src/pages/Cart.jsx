import { useSelector } from "../hooks/useSelector";
import CartItem from "../components/Cart/CartITem";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Loading/Spinner";
import { useCartClear } from "../hooks/useCart";
import { useLoading } from "../hooks/useLayout";
import { useEffect } from "react";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const loading = useSelector((state) => state.layout.loading);
    const navigate = useNavigate();
    const clearCart = useCartClear();
    const changeLoading = useLoading();
    const handleSubmit = () => {
        changeLoading(true);
        clearCart();
        setTimeout(() => {
            changeLoading(false);
        }, 1000);
        toast.success("Thanh toán thành công");
    };
    useEffect(() => {
        changeLoading(false);
    }, []);
    return (
        <div className="container">
            <h1 className="text-center">Giỏ hàng</h1>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {products.length > 0 ? (
                        <>
                            <div className="d-flex gap-4 flex-column">
                                {products.map((item) => (
                                    <CartItem item={item} key={item._id} />
                                ))}
                            </div>
                            <div>
                                <h2 className="text-center">
                                    Total price: <span className="text-danger">$</span>
                                    {Intl.NumberFormat().format(
                                        products.reduce((total, item) => total + item.price * item.qty, 0)
                                    )}
                                </h2>
                            </div>
                            <div className="d-flex rounded overflow-hidden">
                                <button onClick={() => navigate("/")} className="btn btn-warning rounded-0 w-25">
                                    Go Home
                                </button>
                                <button onClick={handleSubmit} className="btn  btn-success rounded-0 flex-fill">
                                    Checkout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="d-flex flex-column gap-3 align-items-center">
                                <h1>Chưa có sản phẩm nào trong giỏ hàng</h1>
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="red"
                                        strokeWidth="0"
                                        version="1.1"
                                        viewBox="0 0 16 16"
                                        id="sad-icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM4.998 12.199l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.413 0.973 4.288 2.427l-1.286 0.772c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699z"></path>
                                    </svg>
                                </div>
                                <button onClick={() => navigate("/")} className="btn btn-success rounded-0 w-25">
                                    Go Home
                                </button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;
