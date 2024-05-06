import { forwardRef } from "react";

const ItemSlide = forwardRef(({ src, children }, ref) => {
	return (
		<span className="shrink-0 w-full relative" ref={ref}>
			<img className="w-full object-scale-down" src={src} alt="" />
			{children}
		</span>
	);
});

export default ItemSlide;
