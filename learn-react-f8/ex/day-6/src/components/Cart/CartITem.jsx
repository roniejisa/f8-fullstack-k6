import { useRef } from "react";
import PropTypes from "prop-types";
import { useCartDelete, useCartUpdate } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { toKebabCase } from "react-roniejisa/utils/helper";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
    const inputRef = useRef();
    const handleDelete = useCartDelete();
    const handleChange = useCartUpdate();
    const navigate = useNavigate();

    const handleDeleteCartItem = () => {
        toast(`Bạn có chắc chắn muốn xóa sản phẩm ${item.name} không`, {
            type: "warning",
            autoClose: 2000,
            onClick: () => {
                handleDelete(item._id);
                toast.success(`Đã xóa sản phẩm ${item.name} thành công!`);
            },
        });
    };

    const handlePushCartItem = () => {
        handleChange(item._id, item.qty + 1, item.quantity - 1);
        inputRef.current.value++;
        toast.success("Thay đổi số lượng thành công");
    };

    const handleMinusCartItem = () => {
        if (inputRef.current.value - 1 === 0) {
            toast(`Bạn có chắc chắn muốn xóa sản phẩm ${item.name} không`, {
                type: "warning",
                autoClose: 2000,
                onClick: () => {
                    handleDelete(item._id);
                    toast.success(`Đã xóa sản phẩm ${item.name} thành công!`);
                },
            });
        } else {
            handleChange(item._id, inputRef.current.value - 1, item.quantity + 1);
            inputRef.current.value--;
            toast.success("Thay đổi số lượng thành công");
        }
    };
    return (
        <div className="d-flex flex-column rounded-4 border-2 p-3 border">
            <div className="d-flex gap-3">
                <div className="d-flex flex-column gap-4 justify-content-between">
                    <span
                        className="cursor-pointer"
                        onClick={() => navigate(`/detail/${toKebabCase(item.name)}/${item._id}`)}
                    >
                        <img src={item.image} alt={item.name} className="rounded" />
                    </span>
                    <div>
                        <button
                            className="border border-danger text-danger fw-bold"
                            onClick={() => handleMinusCartItem()}
                        >
                            -
                        </button>
                        <input
                            type="text"
                            className="w-25 border border-danger text-center"
                            defaultValue={item.qty}
                            ref={inputRef}
                            style={{
                                pointerEvents: "none",
                            }}
                        />
                        <button
                            className="border border-danger text-danger fw-bold"
                            onClick={() => handlePushCartItem()}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex-fill d-flex flex-column justify-content-center gap-3">
                    <div className="d-flex gap-3">
                        <span className="text-danger fw-bold">{item.name}</span>
                        <span>{item.brand}</span>
                    </div>
                    <div className="d-flex fs-2">
                        <span className="text-danger">$</span>
                        {new Intl.NumberFormat().format(item.price)}
                    </div>
                    <h4>Còn lại: {item.quantity}</h4>
                </div>
                <div className="d-flex justify-content-end align-items-end fs-2">
                    <span className="text-danger">$</span>
                    {new Intl.NumberFormat().format(item.price * item.qty)}
                </div>
                <div className="d-flex justify-content-end align-items-end">
                    <button className="btn btn-danger" onClick={() => handleDeleteCartItem()}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
CartItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
    }).isRequired,
};
export default CartItem;
