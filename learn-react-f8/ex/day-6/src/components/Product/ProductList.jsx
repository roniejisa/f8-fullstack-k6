import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <ProductItem key={product._id} item={product} />
            ))}
        </>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductList;
