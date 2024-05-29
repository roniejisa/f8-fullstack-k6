import { combineReducers } from "./core";
import { authReducer, authState } from "./reducers/authReducer";
import { userReducer, userState } from "./reducers/userReducer";

export const mainReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

export const initialState = {
    auth: authState,
    user: userState,
};


//Mục tiêu: Có được 1 hàm reducer sau khi đã nối và 1 object initialState sau khi đã nối
//Để phân biệt reducer này với reducer kia cần đặt 1 key

/*
- ReducerA và stateA
- ReducerB và stateB
- ReducerC và stateC

=> rootReducer và rootInitalState = ReducerA và stateA + ReducerB và stateB ReducerC và stateC
*/