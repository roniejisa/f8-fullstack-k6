import React, { useRef } from "react";
import Image from "./Image";

const ImageBox = () => {
    const imageRef = useRef();
    const handleZoomIn = () => {
        console.log(imageRef);
        imageRef.current.zoomIn();
    }
    const handleZoomOut = () => {
        imageRef.current.zoomOut();
    }
    const handleReset = () => {
        imageRef.current.reset();
    }
	return (
		<>
			<Image ref={imageRef} src="https://picsum.photos/150"/>
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
            <button onClick={handleReset}>Reset</button>
		</>
	);
};

export default ImageBox;
