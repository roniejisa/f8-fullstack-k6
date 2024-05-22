import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import Login from "./components/Login";
import { AppContext } from "./core/Provider";
import Product from "./components/Product";
import { getCookie } from "./utils/all";
import client from "./api/apiClient";
import { toast } from "react-toastify";

const App = () => {
	const { logged, setLogged } = useContext(AppContext);
	const [isCheck, setCheck] = useState(true);
	const getUsers = async () => {
		client.hasToken();
		const [response, data] = await client.get("/users/profile");
		if (!response.ok) {
			const checkRefresh = await client.refreshToken();
			if (checkRefresh) {
				getUsers();
			} else {
				return false;
			}
		}
		return data;
	};
	useEffect(() => {
		const email = getCookie("email");
		const apiKey = getCookie("apiKey");
		if (email && apiKey && !logged) {
			getUsers().then((res) => {
				if (res) {
					setCheck(false);
					toast(res.data.emailId.name);
					setLogged(true);
				}
			});
		}
	}, []);
	if (isCheck) {
		return <></>;
	}
	return <>{logged ? <Product /> : <Login />}</>;
};

export default App;
