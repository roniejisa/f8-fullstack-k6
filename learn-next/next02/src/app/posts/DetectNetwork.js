"use client";

import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const DetectNetWork = () => {
	useEffect(() => {
		window.addEventListener("online", () => {
			toast.success("Đã kết nối Internet");
		});

		window.addEventListener("offline", () => {
			toast.error("Mất kết nối Internet");
		});
		return () => {
			console.log(1);
		};
	}, []);
	return (
		<ToastContainer
			position="bottom-left"
			autoClose={false}
            hideProgressBar={false}
			rtl={false}
			theme="light"
		/>
	);
};

export default DetectNetWork;
