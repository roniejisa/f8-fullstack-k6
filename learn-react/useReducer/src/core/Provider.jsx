import { createContext } from "react";
import { initialState, reducer } from "./reducer";
import { useReducer } from "react";
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
// Bọc các component muốn nhận Global state
