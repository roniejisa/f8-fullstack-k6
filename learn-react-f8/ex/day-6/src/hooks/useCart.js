import { addCart, changeQuantity, clearCart, deleteCart, saveCart, updateCount } from "../functions/cartFunction";
import { useDispatch } from "./useDispatch";
import { toast } from "react-toastify";

export const useAddCart = (item) => {
    const updateCount = useUpdateCount();
    const dispatch = useDispatch();
    return () => {
        dispatch(addCart(item));
        toast.success("Thêm vào giỏ hàng thành công");
        updateCount();
    };
};

export const useUpdateCount = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(updateCount());
        dispatch(saveCart());
    };
};

export const useCartClear = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(clearCart());
    };
};

export const useCartDelete = () => {
    const dispatch = useDispatch();
    const updateCount = useUpdateCount();
    return (id) => {
        dispatch(deleteCart(id));
        updateCount();
    };
};

export const useCartUpdate = () => {
    const dispatch = useDispatch();
    const updateCount = useUpdateCount();

    return (id, qty, quantity) => {
        dispatch(changeQuantity(id, qty, quantity));
        updateCount();
    };
};
