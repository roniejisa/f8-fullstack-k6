import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window && window.scroll(0, 0);
		console.log("Scroll Top");
	}, [pathname]);
};

export default ScrollTop;
