import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export const useSelector = (callback) => {
    const {state} = useContext(ProductContext);
    return callback(state);
};