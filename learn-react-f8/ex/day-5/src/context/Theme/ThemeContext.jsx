import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const ThemeContext = createContext();
const Theme = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);
	useEffect(() => {
		if (theme === "light") {
			document.querySelector("html").dataset.theme = "light";
		} else {
			document.querySelector("html").dataset.theme = "dark";
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default Theme;
Theme.propTypes = {
	children: PropTypes.array,
};
