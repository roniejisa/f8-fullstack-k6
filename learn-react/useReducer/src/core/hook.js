//custom hook

import { useContext } from "react"
import { ProviderContext } from "./Provider"

export const useSelector = (callback) => {
    const { state } = useContext(ProviderContext);
    return callback(state);
}

export const useDispatch = () => {
    const { dispatch } = useContext(ProviderContext);
    return dispatch;
}