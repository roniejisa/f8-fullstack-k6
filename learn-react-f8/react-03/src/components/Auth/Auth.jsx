import Login from "./Login";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "../../store/hooks/hook";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { setUser } from "../../store/actions/userAction";
import { setAuthenticated } from "../../store/actions/authAction";
const Auth = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const loginApi = `https://api.escuelajs.co/api/v1`;
    const profileApi = "/auth/profile";
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const getProfile = async () => {
        const token = localStorage.getItem("token");
        try {
            const { access_token } = JSON.parse(token);
            try {
                const response = await fetch(`${loginApi}${profileApi}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    localStorage.removeItem("token");
                    return data.message;
                }
                dispatch(
                    setUser({
                        ...data,
                    })
                );
            } catch (e) {
                localStorage.removeItem("token");
                return e.message;
            }
        } catch (e) {
            return e.message;
        }
    };
    useEffect(() => {
        if (!localStorage.getItem("token")) return setLoading(false);
        getProfile().then(() => {
            setLoading(false);
        });
    }, [isAuthenticated]);
    if (isLoading) {
        return (
            <>
                <div className="text-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
    return <div className="container">{isAuthenticated ? <Dashboard /> : <Login />}</div>;
};

export default Auth;

// Kiểm tra trạng thái login

// - Đã login => Gọi component Dashboard
// - Hiển thị thông tin user đã đăng nhập và nút đăng xuất
// - Xây dựng chức năng đăng xuất
// - Chưa Login -> Gọi component Login
