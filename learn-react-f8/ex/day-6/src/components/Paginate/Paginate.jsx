import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Paginate = ({ page, total }) => {
    // Khoảng cách đầu , cuối là 4
    /**
     * 1,
            2,
            3,
            4,
            5,
            page > 9 ? "PREV" : page - 3,
            page - 3,
            page - 2,
            page - 1,
            page, 

            Xác định ... sẽ bằng số lần đếm của sãy bắt bắt đầu 
     */
    const newPage = [
        ...new Set([
            1,
            2,
            3,
            4,
            5,
            page > 8 ? "PREV" : 5,
            page - 2,
            page - 1,
            page,
            page + 1,
            page + 2,
            page < total - 7 ? "NEXT" : page + 2,
            total - 4,
            total - 3,
            total - 2,
            total - 1,
            total,
        ]),
    ];
    const renderPages = () => {
        return (
            <>
                {+page - 1 > 0 && (
                    <Link
                        className="p-2 px-3 rounded border text-decoration-none text-white bg-danger"
                        to={`/products/${+page - 1}`}
                    >
                        {"<"}
                    </Link>
                )}
                {newPage.map((pageNumber) => {
                    if (pageNumber > 0 && pageNumber <= total) {
                        return (
                            <Link
                                key={pageNumber}
                                to={`/products/${pageNumber}`}
                                className={`p-2 px-3 rounded border text-decoration-none ${
                                    page === pageNumber ? "bg-success text-white" : "text-white bg-danger"
                                }`}
                            >
                                {pageNumber}
                            </Link>
                        );
                    } else if (typeof pageNumber === "string") {
                        return <span key={pageNumber}>...</span>;
                    }
                })}
                {+page < total && (
                    <Link
                        className="p-2 px-3 rounded border text-decoration-none text-white bg-danger"
                        to={`/products/${+page + 1}`}
                    >
                        {">"}
                    </Link>
                )}
            </>
        );
    };
    return <div className="text-center d-flex gap-2 justify-content-center">{renderPages()}</div>;
};

Paginate.propTypes = {
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default Paginate;
