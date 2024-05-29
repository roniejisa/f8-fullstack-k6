export const authState = {
    isAuthenticated: () => localStorage.getItem("token") !== null || false,
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "auth/setAuthenticated":
            console.log(action.payload);
            return { ...state, isAuthenticated: action.payload };
        default:
            return state;
    }
};
