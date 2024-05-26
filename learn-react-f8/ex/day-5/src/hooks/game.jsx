import { useContext } from "react";
import { GameContext } from "../context/Game/Game";

export const useGame = (callback) => {
	const data = useContext(GameContext);
	return callback(data);
};