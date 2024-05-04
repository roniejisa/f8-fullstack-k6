import React from "react";

const Title = React.forwardRef(function Title(props, ref) {
	return <div ref={ref}>Title</div>;
});

export default Title;
