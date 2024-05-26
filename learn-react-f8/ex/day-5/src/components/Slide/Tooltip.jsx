import { forwardRef } from "react";
import styles from "./Slide.module.scss";
import clsx from "clsx";
import PropTypes from 'prop-types';
const Tooltip = forwardRef(function Tooltip({number},ref) {
	return (
		<span
			className={clsx(styles.tooltip)}
			ref={ref}>
			{number}
            <span></span>
		</span>
	);
});

export default Tooltip;

Tooltip.propTypes = {
    number: PropTypes.number,
}