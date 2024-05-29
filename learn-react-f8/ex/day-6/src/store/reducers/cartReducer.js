let cartData = localStorage.getItem("cart");
if (cartData === "undefined" || cartData === null) {
    localStorage.removeItem("cart");
    cartData = {};
} else {
    cartData = JSON.parse(cartData);
}
export const cartState = {
    products: cartData.products || [],
    count: cartData.count || 0,
};

export const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case "cart/addProduct":
            // eslint-disable-next-line no-case-declarations
            const indexProduct = state.products.findIndex((item) => item._id === action.payload._id);
            if (indexProduct !== -1) {
                return {
                    ...state,
                    products: [
                        ...state.products.filter((item) => item._id !== action.payload._id),
                        {
                            ...state.products[indexProduct],
                            qty: state.products[indexProduct].qty + 1,
                            quantity: state.products[indexProduct].quantity - 1,
                        },
                    ],
                };
            }

            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        ...action.payload,
                        qty: 1,
                    },
                ],
            };

        case "cart/updateCount":
            return {
                ...state,
                count: state.products.reduce((total, item) => total + item.qty, 0),
            };
        case "cart/save":
            localStorage.setItem("cart", JSON.stringify(state));
            return {
                ...state,
            };
        case "cart/delete":
            return { ...state, products: state.products.filter((item) => item._id !== action.payload) };
        case "cart/changeQuantity":
            return {
                ...state,
                products: [
                    ...state.products.map((item) => {
                        if (item._id === action.payload.id) {
                            item.qty = action.payload.qty;
                            item.quantity = action.payload.quantity;
                        }
                        return item;
                    }),
                ],
            };
        case "cart/clear":
            localStorage.removeItem("cart");
            return {
                ...state,
                products: [],
                count: 0,
            };
        default:
            return state;
    }
};
