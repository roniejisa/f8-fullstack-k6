import React, { useContext, useEffect } from "react";
import Login from "./components/Login";
import { AppContext } from "./core/Provider";
import Product from "./components/Product";
import { getCookie } from "./utils/all";

const App = () => {
	const { logged, setLogged } = useContext(AppContext);
	useEffect(() => {
		const email = getCookie("email");
		const apiKey = getCookie("apiKey");
		if (email && apiKey) {
			setLogged(true);
		}
	}, []);
	return <>{logged ? <Product /> : <Login />}</>;
};

export default App;
