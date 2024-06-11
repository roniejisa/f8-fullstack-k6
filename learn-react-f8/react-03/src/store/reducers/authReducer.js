export const authState = {
    isAuthenticated: localStorage.getItem("token") !== null || false,
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "auth/setAuthenticated":
            return { ...state, isAuthenticated: action.payload };
        default:
            return state;
    }
};
