import { changeLoading } from "../functions/layoutFunction";
import { useDispatch } from "./useDispatch";

export const useLoading = () => {
    const dispatch = useDispatch();
    return (loading) => {
        dispatch(changeLoading(loading));
    };
};
