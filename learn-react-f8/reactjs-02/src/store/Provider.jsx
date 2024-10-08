import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();
const Provider = ({ children, store }) => {
	const { rootReducer, initialState } = store;
	const [state, dispatch] = useReducer(rootReducer, initialState);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default Provider;

Provider.propTypes = {
	children: PropTypes.any,
	store: PropTypes.object.isRequired,
};
