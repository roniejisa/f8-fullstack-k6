import './assets/css/style.css';
import { router } from "./utils/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import DefaultLayout from "./components/Layout/DefaultLayout";

export const App = () => {
	return router(
		[
			{
				path: "/",
				component: Home,
			},
			{
				path: "/gioi-thieu",
				component: About,
			},
			{
				path: "/san-pham",
				component: Products,
			},
			{
				path: "/san-pham/:id",
				component: Product,
			},
		],
		DefaultLayout
	);
};

App();
