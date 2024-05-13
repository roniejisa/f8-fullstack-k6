import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export const metadata = {
	title: "Sản phẩm",
};

const Product = ({ searchParams: { status, query } }) => {
    return (
		<>
			<h2>Status: {status}</h2>
			<h2>Query: {query}</h2>
            <ProductForm />
			{status === "active" && <ProductList />}
		</>
	);
};

export default Product;
