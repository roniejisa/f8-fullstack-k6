import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const LoginMiddleware = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/dang-nhap");
        } else {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);
    return (
        <>
            <Outlet />
        </>
    );
};

export default LoginMiddleware;
