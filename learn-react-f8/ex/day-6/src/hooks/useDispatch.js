import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export const useDispatch = () => {
    const { dispatch } = useContext(ProductContext);
    return dispatch;
};