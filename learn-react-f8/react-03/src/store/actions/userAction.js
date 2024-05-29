export const setUser = (payload) => {
    return {
        type: "user/set",
        payload,
    };
}

export const removeUser = () =>{
    return {
        type: "user/remove",
    };
}