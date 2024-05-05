import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Image = forwardRef(function Image({ src }, ref) {
	const imageRef = useRef();
	useImperativeHandle(ref, () => {
		return {
			zoomIn: () => {
				imageRef.current.style.width = "400px";
			},
			zoomOut: () => {
				imageRef.current.style.width = "100px";
			},
			reset: () => {
				imageRef.current.style.width = null;
			},
		};
	});

	return <img ref={imageRef} src={src} />;
});

export default Image;
