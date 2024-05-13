import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const ProviderContext = createContext();

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ProviderContext.Provider
			value={{
				state,
				dispatch,
			}}>
			{children}
		</ProviderContext.Provider>
	);
};

export default Provider;
