import { compileReducers } from "./core";
import { cartReducer, cartState } from "./reducers/cartReducer";
import { layoutReducer, layoutState } from "./reducers/layoutReducer";

export const reducer = compileReducers({
    layout: layoutReducer,
    cart: cartReducer,
});

export const initialState = {
    cart: cartState,
    layout: layoutState,
};