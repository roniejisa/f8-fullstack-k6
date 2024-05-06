import React from "react";
import "./AuthLayout.scss";
import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
	return <div>
        <Outlet />
    </div>;
};

export default AuthLayout;
