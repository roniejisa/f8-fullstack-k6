import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./context/Theme/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/global.scss";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Theme>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Theme>
  </React.StrictMode>
);
