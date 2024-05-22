import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/style.css";
const root = createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain="dev-kltwcgr0lfhr8nm0.us.auth0.com"
		clientId="D45DwpesLtxI7ABtj25AaH9i09t7QSW9"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<App />
		<ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
	</Auth0Provider>
);
