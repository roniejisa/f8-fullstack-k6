import { createContext } from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";

export const ProductContext = createContext();
const ProductProvider = ({ store, children }) => {
    const { initialState, reducer } = store;
    const [state, dispatch] = useReducer(reducer, initialState);
    return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

ProductProvider.propTypes = {
    children: PropTypes.array,
    store: PropTypes.shape({
        initialState: PropTypes.object.isRequired,
        reducer: PropTypes.func.isRequired,
    }).isRequired,
};
