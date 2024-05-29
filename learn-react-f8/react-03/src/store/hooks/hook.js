// Tạo hook để đọc state từ Global

import { useContext } from "react";
import { AppContext } from "../Provider";
import { removeUser } from "../actions/userAction";
import { setAuthenticated } from "../actions/authAction";

export const useSelector = (callback) => {
    if (typeof callback !== "function") {
        throw new Error("Callback phải là function");
    }
    const { state } = useContext(AppContext);
    return callback(state);
};

export const useDispatch = () => {
    const { dispatch } = useContext(AppContext);
    return dispatch;
};

export const useLogout = () => {
    const dispatch = useDispatch();
    return () => {
		localStorage.removeItem("token");
		dispatch(setAuthenticated(false));
        dispatch(removeUser());
    };
};
