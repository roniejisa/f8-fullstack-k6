import React from "react";
import PropTypes from "prop-types";
const HeaderInner = ({title,onGetData}) => {
	return (
		<>
			<h3>Header F8</h3>
			<h2>{title}</h2>
		</>
	);
};

export default HeaderInner;

HeaderInner.propTypes = {
	title: PropTypes.string.isRequired,
    onGetData: PropTypes.func
};

/**
 * ProtoTypes.array
 * ProtoTypes.bool,
 * PropTypes.func,
 * PropTypes.number,
 * PropTypes.string,
 * PropTypes.symbol,
 * PropTypes.node,
 * PropTypes.element,
 * PropTypes.elementType,
 */