import { Route, Routes } from "react-router-dom";
import LoginMiddleware from "./middlewares/LoginMiddleware";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DefaultLayout from "./components/Layout/DefaultLayout";

const App = () => {
    return (
        <Routes>
            <Route element={<LoginMiddleware />}>
                <Route element={<DefaultLayout />}>
                    <Route path="/" index element={<Home />} />
                </Route>
            </Route>
            <Route path="/dang-nhap" element={<Login />} />
        </Routes>
    );
};

export default App;
