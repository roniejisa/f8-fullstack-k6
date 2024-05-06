import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./pages/auth/Auth";
import AuthIndex from "./pages/auth";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/orders/Orders";
import OrderCompleted from "./pages/orders/OrderCompleted";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import ScrollTop from "./components/ScrollTop";
const LazyAbout = React.lazy(() => import("./pages/About"));

const App = () => {
	return (
		<>
			<div className="flex">
				<div className="basis-3/12">
					<Sidebar />
				</div>
				<div className="basis-9/12">
					<ScrollTop />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/gioi-thieu"
							element={
								<React.Suspense fallback={<p>Loading...</p>}>
									<LazyAbout />
								</React.Suspense>
							}
						/>
						<Route path="/san-pham">
							<Route index element={<Product />} />
							<Route path=":path.html" element={<ProductDetail />} />
						</Route>
						<Route path="/dat-hang" element={<Checkout />} />
						<Route path="/cam-on" element={<ThankYou />} />
						<Route path="/auth" element={<Auth />}>
							{/* <Route index element={<AuthIndex />} /> */}
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
						</Route>
						<Route path="/orders" element={<AuthMiddleware />}>
							<Route index element={<Orders />} />
							<Route path="completed" element={<OrderCompleted />} />
						</Route>
						<Route path="*" element={<Error />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default App;

/**
 *
 * /admin/
 * /admin/users
 * /admin/users/add
 * /admin/users/update
 * /admin/users/delete
 *
 *
 * /auth/login
 * /auth/register
 * /auth/profile
 */
