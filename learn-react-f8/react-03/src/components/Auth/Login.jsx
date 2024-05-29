import { useDispatch } from "../../store/hooks/hook";
import { setAuthenticated } from "../../store/actions/authAction";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginRequest } from "../../request/loginRequest";
const Login = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const loginApi = `https://api.escuelajs.co/api/v1`;
    const getTokenApi = "/auth/login";
    const [isLoading, setLoading] = useState(true);
    const [msg, setMsg] = useState("");
    const getToken = async (data) => {
        setLoading(true);
        let token = localStorage.getItem("token") || null;
        if (token) return JSON.parse(localStorage.getItem("token"));
        token = await loginRequest(`${loginApi}${getTokenApi}`, data);
        if (!token) {
            setMsg("Email hoặc mật khẩu không đúng");
            return false;
        }
        localStorage.setItem("token", JSON.stringify(token));
        return token;
    };

    

    const onSubmit = async (data) => {
        const token = await getToken(data);
        if (token) {
            dispatch(setAuthenticated(true));
        }
        setLoading(false);
    };
    
    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center">Đăng nhập</h2>
            {msg && <p className="text-center text-danger">{msg}</p>}
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        defaultValue={""}
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email không đúng định dạng",
                            },
                        })}
                    />
                    {errors.email?.type === "required" && <span>{errors.email?.message}</span>}
                    {errors.email?.type === "pattern" && <span>{errors.email?.message}</span>}
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        defaultValue={""}
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.message && <span>{errors.password?.message}</span>}
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary mt-3">Đăng nhập</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
