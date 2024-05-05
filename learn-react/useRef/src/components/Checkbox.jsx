import React from "react";

const Checkbox = React.forwardRef(function Checkbox({name},ref) {
    return <input type="checkbox" ref={ref} name={name} />;
});

export default Checkbox;
