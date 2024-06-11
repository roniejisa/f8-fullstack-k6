import PropTypes from "prop-types";
import { memo } from "react";
const Reset = ({ onClick }) => {
    console.log("Reset");
    return (
        <div>
            <button onClick={onClick}>Reset</button>
        </div>
    );
};

export default memo(Reset);

Reset.propTypes = {
    onClick: PropTypes.func,
};
