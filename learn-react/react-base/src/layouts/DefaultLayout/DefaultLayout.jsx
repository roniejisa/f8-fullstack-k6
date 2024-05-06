import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./DefaultLayout.scss";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
	return (
		<>
			<Header />
			<main>
                <Outlet />
			</main>
			<Footer />
		</>
	);
};

export default DefaultLayout;
