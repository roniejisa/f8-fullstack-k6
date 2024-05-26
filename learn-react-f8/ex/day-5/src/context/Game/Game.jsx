import { createContext, useEffect } from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";
export const GameContext = createContext();
const Game = ({ children }) => {
	const [data, setData] = useState(() => {
		return JSON.parse(localStorage.getItem("data")) || [];
	});
	const [play, setPlay] = useState(false);
	const [total, setTotal] = useState(0);
	const [remain, setRemain] = useState(0);
	const [number, setNumber] = useState(
		() => +localStorage.getItem("number") || 100
	);

	useEffect(() => {
		if (data.length) {
			localStorage.setItem("data", JSON.stringify(data));
		} else {
			localStorage.removeItem("data");
		}
	}, [data]);
	return (
		<GameContext.Provider
			value={{
				data,
				setData,
				play,
				setPlay,
				total,
				setTotal,
				remain,
				setRemain,
				number,
				setNumber,
			}}>
			{children}
		</GameContext.Provider>
	);
};

export default Game;

Game.propTypes = {
	children: PropTypes.array,
};
