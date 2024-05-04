import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Message = () => {
	const { data } = useContext(AppContext);
	return <h2>{data.message}</h2>;
};

export default Message;
