import React, { createContext, useState } from "react";
export const AppContext = createContext();

const Provider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [logged, setLogged] = useState(false);
	const [cart, setCart] = useState([]);
	return (
		<AppContext.Provider
			value={{
				products,
				setProducts,
				loading,
				setLoading,
				logged,
				setLogged,
				cart,
				setCart,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default Provider;
