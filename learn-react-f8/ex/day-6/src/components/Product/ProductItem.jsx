import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toKebabCase } from "react-roniejisa/utils/helper";
import { useAddCart } from "../../hooks/useCart";
import "./ProductItem.css";
const ProductItem = ({ item }) => {
    const { _id, name, price, image } = item;
    const navigate = useNavigate();
    const addToCart = useAddCart(item);
    return (
        <div className="col-3 cursor-pointer" onClick={() => navigate(`/detail/${toKebabCase(name)}/${_id}`)}>
            <div className="card">
                <div className="card-img">
                    <canvas width={310} height={310}></canvas>
                    <img className="card-img-top" src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/detail/${toKebabCase(name)}/${_id}`} className="text-decoration-none text-danger">
                            {name}
                        </Link>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <b className="card-text"><span className="text-danger">$</span>{new Intl.NumberFormat().format(price)}</b>
                        <button
                            className="btn btn-link"
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart();
                            }}
                        >
                            <svg stroke="currentColor" fill="#dc3545" strokeWidth="0" viewBox="0 0 256 256" id="shopping-cart" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductItem;
