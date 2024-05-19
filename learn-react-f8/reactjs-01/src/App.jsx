import React, { createContext, useEffect, useState } from "react";
import Theme from "./components/Theme/Theme";
export const AppContext = createContext();
import "./assets/style.css";
const App = () => {
	const [message, setMessage] = useState("Hello anh em F8");
	const [isDark, setDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
		}
	}, [isDark]);
	return (
		<AppContext.Provider
			value={{
				message,
				changeMessage: () => {
					setMessage("Hi");
				},
				isDark,
				changeTheme: () => setDark(!isDark),
			}}>
			<Theme />
		</AppContext.Provider>
	);
};

// Cách 1: Dùng props
// Cách 2: Dùng Context API
/*
    Tạo object Context bằng cách sử dụng hàm React.createContext()
    Provider: Gửi dữ liệu từ context tới các component con
    Consumer: Lấy dữ liệu từ component
+ Xác định được context cần lấy dữ liệu
+ Gọi component Consumer để lấy dữ liệu hoặc thông qua hook useContext
*/

export default App;
