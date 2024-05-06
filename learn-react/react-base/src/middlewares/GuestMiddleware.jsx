import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const isLogin = true;
const GuestMiddleware = () => {
	return !isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default GuestMiddleware;
