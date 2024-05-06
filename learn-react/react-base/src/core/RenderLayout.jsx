import { privateRoutes } from "../routes/privateRoutes";
import { publicRoutes } from "../routes/publicRoutes";
import { Routes } from "react-router-dom";
const RenderLayout = () => {
	return (
		<Routes>
			{publicRoutes}
            {privateRoutes}
			{/* <Route path="/" element={<Layout />}>
					{publicRoutes.routes.map(({ path, element }, index) => {
						const Component = element;
						return (
							<Route key={index} path={path} element={<Component />} />
						);
					})}
				</Route> */}
		</Routes>
	);
};

export default RenderLayout;
