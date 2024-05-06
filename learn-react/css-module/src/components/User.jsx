import React from "react";
import PropTypes from "prop-types";
const User = ({name,onGetData,children}) => {
	return <div onClick={onGetData}>{name}
        {children}
    </div>;
};

User.propTypes = {
	name: PropTypes.string.isRequired,
    onGetData: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default User;
