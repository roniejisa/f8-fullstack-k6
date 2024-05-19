import React, { useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {
	const {message, changeTheme} = useContext(AppContext);

	return (
		<div>
			<h2>Header F8</h2>
            <button onClick={changeTheme}>Dark Theme</button>
			<h2>{message}</h2>
		</div>
	);
};

export default Header;
