import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import styles from "./Slide.module.scss";
import clsx from "clsx";
import Tooltip from "./Tooltip";
import { toast } from "react-toastify";
import { useGame } from "../../hooks/game";
const getTotal = (number) => {
	const time = Math.ceil(Math.log2(number));
	return time;
};

const Slide = () => {
	const {
		total,
		setTotal,
		remain,
		setRemain,
		number,
		setNumber,
		setPlay,
	} = useGame((data) => data);
	const [numberSet, setNumberSet] = useState(
		() => +localStorage.getItem("number") || 100
	);

	const maxLength = useRef(import.meta.env.VITE_NUMBER_MAX);
	const listPoints = useRef([100, 512, 1024, 1536, 2048]);
	const slideRef = useRef({});
	const clientX = useRef(0);
	const widthProgress = useRef(0);

	useLayoutEffect(() => {
		const percent = (number / maxLength.current) * 100;
		const { progress, main } = slideRef.current;
		const width = (main.offsetWidth * percent) / 100;
		progress.style.width = width + "px";
		resetGame(number);
		handleTooltip();
	}, [number]);

	useEffect(() => {
		localStorage.setItem("number", number);
	}, [number]);
	const handleMouseDown = (e) => {
		const width = e.nativeEvent.offsetX;
		const { progress, main, btn } = slideRef.current;
		progress.style.width = width + "px";
		const percent = (width / main.offsetWidth) * 100;
		let number = Math.round((percent * maxLength.current) / 100);
		if (number <= 5) {
			number = 5;
		}
		widthProgress.current = width;
		clientX.current = e.clientX;
		setNumberSet(number);
		moveEvent();
		btn.classList.add(clsx(styles.focused));
	};

	const moveMove = (e) => {
		const width = e.clientX - clientX.current;
		const { progress, main, tooltip, btn } = slideRef.current;
		let widthCurrent = widthProgress.current + width;
		let percent = 0;
		if (widthCurrent > main.offsetWidth) {
			percent = 100;
			widthCurrent = main.offsetWidth;
		} else if (widthCurrent < 0) {
			percent = 0;
		} else {
			percent = (widthCurrent / main.offsetWidth) * 100;
		}

		let number = Math.round((percent * maxLength.current) / 100);
		if (number <= 5) {
			number = 5;
			widthCurrent = 0;
		}
		setNumberSet(number);

		// Kiểm tra điểm đầu và cuối
		handleTooltip();
		tooltip.classList.add(clsx(styles.show));
		progress.style.width = widthCurrent + "px";
		btn.classList.add(clsx(styles.focused));
	};
	const handleMouseMove = (e) => {
		e.stopPropagation();
		const { progress } = slideRef.current;
		clientX.current = e.nativeEvent.clientX;
		widthProgress.current = progress.offsetWidth;
		moveEvent();
	};

	const moveEvent = useCallback(() => {
		document.addEventListener("mousemove", moveMove);
		document.addEventListener("mouseup", eventMouseUp);
	}, [number]);

	const eventMouseUp = useCallback(() => {
		const { progress, main, tooltip, btn } = slideRef.current;
		const percent = (progress.offsetWidth / main.offsetWidth) * 100;
		let newNumber = Math.round((percent * maxLength.current) / 100);
		if (newNumber <= 5) {
			newNumber = 5;
		}

		document.removeEventListener("mousemove", moveMove);
		document.removeEventListener("mouseup", eventMouseUp);
		btn.classList.remove(clsx(styles.focused));
		tooltip.classList.remove(clsx(styles.show));
		if (newNumber === number) {
			return false;
		}
		resetGame(newNumber);
		setNumberSet(newNumber);
	});

	const resetGame = useCallback((newNumber) => {
		setNumber(newNumber);
		const total = getTotal(newNumber);
		setTotal(total);
		setRemain(total);
		setPlay(true);
		toast.info("Chào mừng bạn đến với trò chơi đoán số!");
	}, []);

	const handleTooltip = () => {
		const { tooltip, progress } = slideRef.current;
		const rect = tooltip.getBoundingClientRect();
		if (rect.width + progress.offsetWidth >= window.innerWidth) {
			const left =
				rect.width + progress.offsetWidth - 7 - window.innerWidth;
			tooltip.style.left = `calc(50% - ${left}px)`;
			tooltip.dataset.left = left;
			tooltip.firstElementChild.style.left = `calc(50% + ${left}px)`;
		} else if (
			progress.offsetWidth + rect.width < window.innerWidth &&
			tooltip.style.left
		) {
			tooltip.style.left = null;
			tooltip.firstElementChild.style.left = null;
		}
	};

	useEffect(() => {
		const { slideTop } = slideRef.current;
		const percent = (remain / total) * 100;
		slideTop.style.width = `${percent}%`;
	}, [remain, total]);

	return (
		<div className={clsx(styles.slide)}>
			<div
				className={clsx(styles.topSlide)}
				ref={(el) => (slideRef.current.slideTop = el)}></div>
			<div>
				<span className={clsx(styles.remain)}>
					Còn {remain}/{total} lần
				</span>
				<span className={clsx(styles.des)}>
					Bạn cần tìm kiếm một số từ 1 đến {number}
				</span>
			</div>
			<div
				className={clsx(styles.chooseNumber)}
				ref={(el) => (slideRef.current.main = el)}
				onMouseDown={handleMouseDown}
				onMouseEnter={handleTooltip}>
				<div
					className={clsx(styles.progress)}
					ref={(el) => (slideRef.current.progress = el)}>
					<div
						className={clsx(styles.btn)}
						ref={(el) => (slideRef.current.btn = el)}
						onMouseDown={handleMouseMove}>
						<Tooltip
							ref={(el) => (slideRef.current.tooltip = el)}
							number={numberSet}
						/>
					</div>
				</div>
				{listPoints.current.map((number, index) => {
					const percent = (number / maxLength.current) * 100;
					return (
						<div
							key={index}
							className={clsx(styles.point)}
							style={{
								left: `calc(${percent + "%"} - ${
									listPoints.current.length === index + 1 ? "50px" : "25px"
								})`,
								pointerEvents: "none",
							}}>
							<span>{number}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slide;
