export const addCart = (item) => {
    return {
        type: "cart/addProduct",
        payload: item,
    };
};

export const updateCount = () => {
    return {
        type: "cart/updateCount",
    };
};

export const saveCart = () => {
    return {
        type: "cart/save",
    };
};

export const clearCart = () => {
    return {
        type: "cart/clear",
    };
};

export const deleteCart = (id) => {
    return {
        type: "cart/delete",
        payload: id,
    };
};

export const changeQuantity = (id, qty, quantity) => {
    return {
        type: "cart/changeQuantity",
        payload: { id, qty, quantity },
    };
};
