export const setAuthenticated = (payload) => {
    return {
        type: "auth/setAuthenticated",
        payload,
    };
};