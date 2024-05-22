import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
export const AppContext = createContext();
function App() {
	const { isLoading, isAuthenticated, user } = useAuth0();
	const [loading, setLoading] = useState(isLoading);
	useEffect(() => {
		setLoading(isLoading);
	}, [isLoading]);

	if (loading) {
		return (
			<>
				<div className="rs-loading-main">
					<div className="rsl-wave">
						{" "}
						<span className="rsl-wave--icon"></span>{" "}
						<span className="rsl-wave--icon"></span>{" "}
						<span className="rsl-wave--icon"></span>{" "}
					</div>
				</div>
			</>
		);
	}

	if (isAuthenticated) {
		return (
			<>
				<AppContext.Provider
					value={{
						user,
						setLoading,
					}}>
					<Profile />
				</AppContext.Provider>
			</>
		);
	} else {
		return <Login />;
	}
}

export default App;
