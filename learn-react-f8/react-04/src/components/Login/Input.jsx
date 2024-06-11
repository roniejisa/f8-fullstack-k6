import { useId } from "react";
import PropTypes from "prop-types";
const Input = ({ label, type = "text", name, value, placeholder }) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} defaultValue={value} name={name} placeholder={placeholder} />
        </div>
    );
};

export default Input;
Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};
