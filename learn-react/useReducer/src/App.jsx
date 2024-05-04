import React, { useReducer } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
const App = () => {
	return (
		<>
			<h1>userReducer</h1>
			<Counter />
            <Todo  />
		</>
	);
};

export default App;
