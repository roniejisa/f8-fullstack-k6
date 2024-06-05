import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../store/middlewares/authMiddleware.js";
const Login = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(getToken(email));
    };

    useEffect(() => {
        if (isAuthenticated) {
            toast.success("Đăng nhập thành công");
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <form className="h-screen flex flex-col items-center justify-center bg-teal-300" onSubmit={handleSubmit}>
            <h1 className="text-xl mb-3">Enter the Email!</h1>
            <input
                type="text"
                className=" p-2 rounded-md outline-none border-none placeholder:text-white bg-teal-400 focus:outline-teal-500 duration-200 transition-[outline,color]"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </form>
    );
};

export default Login;
