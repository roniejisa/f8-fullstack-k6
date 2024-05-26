import { useContext } from "react";
import { ThemeContext } from "../context/Theme/ThemeContext";

export const useTheme = () => {
	const { theme } = useContext(ThemeContext);
	return theme;
};

export const useSetTheme = () => {
	const { setTheme } = useContext(ThemeContext);
	return setTheme;
};