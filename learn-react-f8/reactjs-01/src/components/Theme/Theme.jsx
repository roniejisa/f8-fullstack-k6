import React, { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import { AppContext } from "../../App";

const Theme = () => {
	return (
		<div>
			<Header />
			<Content />
		</div>
	);
};

export default Theme;
