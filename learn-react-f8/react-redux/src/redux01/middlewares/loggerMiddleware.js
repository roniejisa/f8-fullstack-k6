// Cấu trúc của Middleware

export const loggerMiddleware = (store) => {
    console.log("store" ,store);
    return (next) => {
        console.log("next" , next);
        return (action) => {
            // console.log("next", next);
            // console.log("store", store);
            // console.log("action",action);
            // console.log("old state", store.getState());
            let result = next(action);
            // console.log("next state", store.getState());
            return result;
        };
    };
};