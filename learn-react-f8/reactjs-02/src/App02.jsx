import { createContext, useReducer } from "react";
import Todo from "./components/Todos/Todo";
import { initialState, reducer } from "./utils/reducer01";
export const AppContext = createContext();
const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<AppContext.Provider
				value={{
					state,
					dispatch,
				}}>
				<Todo />
			</AppContext.Provider>
		</>
	);
};

export default App;
