import { Navigate, Outlet } from "react-router-dom";

const isLogin = true;
const AuthMiddleware = () => {
	return isLogin ? <Outlet /> : <Navigate to={"/auth/login"} />;
};

export default AuthMiddleware;
