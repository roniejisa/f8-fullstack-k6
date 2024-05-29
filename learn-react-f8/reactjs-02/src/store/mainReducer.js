import { combineReducers } from "./core";
import { authReducer, authState } from "./reducers/authReducer";

export const mainReducer = combineReducers({
    auth: authReducer,
});

export const initialState = {
    auth: authState,
};