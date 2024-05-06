import React, {
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import ItemSlide from "./ItemSlide";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
let initialX = 0;
let typeChange = false;
let drag = false;
let index = 1;
let constAutoPlay = null;
let REMOVE_AUTO_PLAY = true;
let timeOut;
const Slider = ({ auto = 0, children }) => {
	const slideRef = useRef({});
	const [autoPlay, setAutoPlay] = useState(auto);
	const [indexDot, setIndexDot] = useState(index);
	const [images, setImages] = useState([img1, img2, img3, img4, img5]);
	const changeImage = (type, removeAutoPlay = false) => {
		clearTimeout(timeOut);
		timeOut = setTimeout(() => {
			index = type === "next" ? index + 1 : index - 1;
			changeIndex();
		}, 300);
		if (auto && removeAutoPlay) {
			setAutoPlay(0);
			setTimeout(() => {
				setAutoPlay(auto);
			}, auto);
		}
	};

	const handleMove = (e) => {
		if (drag) {
			const { slideInner } = slideRef.current;
			slideInner.style.transition = null;
			const widthSlider = slideInner.offsetWidth;
			const changeWidth = e.clientX - initialX;
			let translateXCurrent = -(index * widthSlider) + changeWidth;
			slideInner.style.transform = `translateX(${translateXCurrent}px)`;
			const rate = widthSlider / 10;
			if (e.clientX > initialX && Math.abs(changeWidth) > rate) {
				typeChange = "prev";
			} else if (e.clientX <= initialX && Math.abs(changeWidth) > rate) {
				typeChange = "next";
			} else {
				typeChange = "";
			}
		}
	};

	const handleMouseDown = (e) => {
		e.preventDefault();
		if (e.button === 0) {
			initialX = e.clientX;
			drag = true;
			setAutoPlay(0);
		}
	};

	const handleMouseUp = () => {
		if (drag && typeChange) {
			index = typeChange === "next" ? index + 1 : index - 1;
		}
		if (drag) {
			changeIndex();
		}
		drag = false;
		setAutoPlay(auto);
	};

	const changeIndex = (isAddTransition = true) => {
		const { slideInner } = slideRef.current;
		if (isAddTransition) {
			slideInner.style.transition = "300ms ease";
		} else {
			slideInner.style.transition = null;
		}
		const imageLength = slideInner.children.length;
		const widthSlider = slideInner.offsetWidth;
		if (index > imageLength - 1) {
			index = images.length - 1;
		}
		if (index < 0) {
			index = 0;
		}
		setIndexDot(index);
		const translateWidth = index * widthSlider;
		slideInner.style.transform = `translateX(-${translateWidth}px)`;
	};

	const handleTransitionEnd = () => {
		if (index == images.length - 1) {
			index = 1;
			changeIndex(false);
		}

		if (index === 0) {
			index = images.length - 2;
			changeIndex(false);
		}
	};
	useLayoutEffect(() => {
		changeIndex(false);
	}, []);

	useEffect(() => {
		if (autoPlay) {
			constAutoPlay = setInterval(() => {
				changeImage("next");
			}, autoPlay);
		}
		return () => {
			clearInterval(constAutoPlay);
		};
	}, [autoPlay]);

	useEffect(() => {
		setImages([images[images.length - 1], ...images, images[0]]);
		document.addEventListener("mousemove", handleMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	return (
		<div
			ref={(el) => (slideRef.current.slider = el)}
			className="relative overflow-hidden select-none"
			onMouseDown={handleMouseDown}
			onTransitionEnd={handleTransitionEnd}>
			<div
				className="flex select-none"
				ref={(el) => (slideRef.current.slideInner = el)}>
				{images.map((image, i) => {
					return (
						<ItemSlide
							key={i}
							ref={(el) => {
								if (!slideRef.current.itemsEl) {
									slideRef.current.itemsEl = {};
								}
								slideRef.current.itemsEl[i] = el;
							}}
							src={image}>
							{children}
						</ItemSlide>
					);
				})}
			</div>
			<div className="absolute bottom-4 gap-2 flex left-[50%] translate-x-[-50%]">
				{images.map((_, i) => {
					return (
						i !== 0 &&
						i !== images.length - 1 && (
							<button
								key={i}
								ref={(el) => {
									if (!slideRef.current.dots) {
										slideRef.current.dots = {};
									}
									slideRef.current.dots[i] = el;
								}}
								onMouseDown={(e) => {
									e.stopPropagation();
									index = i;
									changeIndex();
								}}
								className={`${
									i === indexDot ||
									(i === 1 && indexDot === images.length - 1) ||
									(i === images.length - 2 && indexDot === 0)
										? "bg-orange-400 w-8"
										: ""
								} h-4 w-4 bg-none border-[1px] border-orange-400 rounded-full`}></button>
						)
					);
				})}
			</div>
			<div>
				<button
					onMouseDown={(e) => {
						e.stopPropagation();
						changeImage("prev", REMOVE_AUTO_PLAY);
					}}
					className="p-3 absolute top-[50%] rounded-md translate-y-[-50%] left-1 group transition-[background] duration-300 hover:bg-[rgba(0,0,0,.5)]"
					ref={(el) => (slideRef.current.prevEl = el)}>
					<svg
						className="w-[20px] h-[20px] fill-red-300"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512">
						<path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
					</svg>
				</button>
				<button
					onMouseDown={(e) => {
						e.stopPropagation();
						changeImage("next", REMOVE_AUTO_PLAY);
					}}
					className="p-3 absolute top-[50%] rounded-md translate-y-[-50%] right-1 group transition-[background] duration-300 hover:bg-[rgba(0,0,0,.5)]"
					ref={(el) => (slideRef.current.nextEl = el)}>
					<svg
						className="w-[20px] h-[20px] fill-red-300"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512">
						<path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Slider;
