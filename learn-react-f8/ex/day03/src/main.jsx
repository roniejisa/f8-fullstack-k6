import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style.scss";
import Provider from "./core/Provider.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<App />
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</Provider>
	</React.StrictMode>
);
