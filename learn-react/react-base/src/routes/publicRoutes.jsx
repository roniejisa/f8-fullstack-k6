import Home from "../pages/Home/Home";
import ProductDetail from "../pages/Products/ProductDetail";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { Route } from "react-router-dom";
import AuthLayout from "./../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import GuestMiddleware from "../middlewares/GuestMiddleware";
export const publicRoutes = (
	<>
		<Route element={<DefaultLayout />}>
			<Route path="/" index element={<Home />} />
			<Route path="/gioi-thieu" element={<About />} />
			<Route path="/san-pham">
				<Route index element={<Products />} />
				<Route path=":id" element={<ProductDetail />} />
			</Route>
		</Route>
		<Route element={<AuthLayout />}>
			<Route element={<GuestMiddleware />}>
				<Route path="/dang-nhap" element={<Login />} />
				<Route path="/dang-ky" element={<Register />} />
			</Route>
		</Route>
	</>
);
// layout: DefaultLayout,
// routes: [
// 	{
// 		path: "/",
// 		element: Home,
// 	},
// 	{
// 		path: "/gioi-thieu",
// 		element: About,
// 	},
// 	{
// 		path: "/san-pham",
// 		element: Products,
// 	},
// 	{
// 		path: "/san-pham/:id",
// 		element: ProductDetail,
// 	},
// ],
