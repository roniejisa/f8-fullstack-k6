export const userState = {
    data: {},
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case "user/set":
            return { ...state, data: action.payload };
        case "user/remove":
            return { ...state, data: {} };
        default:
            return state;
    }
};
