import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./components/Product/ProductDetail";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:page" element={<Product />} />
                <Route path="/detail/:slug/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
