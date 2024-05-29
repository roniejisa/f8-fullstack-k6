export const layoutState = {
    loading: true,
};

export const layoutReducer = (state = layoutState, action) => {
    switch (action.type) {
        case "layout/setLoading":
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};
