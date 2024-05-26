import { useEffect, useMemo, useRef, useState } from "react";
import { useGame } from "../../hooks/game";
import { toast } from "react-toastify";
import clsx from "clsx";
import styles from "./FormNumber.module.scss";

const FormNumber = () => {
	const inputRef = useRef();
	const {
		number,
		setRemain,
		setPlay,
		play,
		remain,
		setData,
		data,
		total,
	} = useGame((data) => data);
	const [value, setValue] = useState("");
	const [dataCurrent, setDataCurrent] = useState([]);
	const result = useMemo(() => {
		return Math.floor(Math.random() * (number - 1) + 1);
	}, [number, play]);

	useEffect(() => {
		if (inputRef.current) {
			setValue("");
			inputRef.current.placeholder = "Thử một số";
		}
	}, [number]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value === "") {
			return toast.error("Vui lòng nhập số!");
		}
		// Kiểm tra trùng số thì báo cho người chơi biết
		if (
			dataCurrent.length > 0 &&
			dataCurrent.filter((item) => item.number === value).length > 0
		) {
			return toast.warning("Số này đã thử rồi, vui lòng thử số khác");
		}
		let win = false;

		// Kiểm tra hết lượt
		if (remain - 1 === 0 && value !== result) {
			+value > result
				? toast.error("Đáng lẽ bạn phải giảm xuống 1 chút")
				: toast.error("Đáng lẽ bạn phải tăng lên 1 chút");
		} else if (+value > result) {
			toast.warning("Giảm xuống 1 chút!");
		} else if (value < result) {
			toast.warning("Tăng lên 1 chút!");
		} else {
			win = true;
		}
		let newData = {
			number: value,
		};

		if (dataCurrent.length === 0) {
			newData.total = total;
		}

		if (win) {
			newData.win = true;
			toast.success("Bạn đoán đúng rùi 😍");
		}

		if (win || remain - 1 === 0) {
			setPlay(false);
			const newDataCurrent = [
				...dataCurrent,
				{ ...newData, number: value },
			];
			setData([[...newDataCurrent], ...data]);
		} else {
			setRemain(remain - 1);
			setDataCurrent([...dataCurrent, { ...newData }]);
		}
		setValue("");
	};

	const checkOrSetValue = (data) => {
		if (data === "" || (data >= 1 && data <= number)) {
			inputRef.current.placeholder = value;
			setValue(data);
		} else {
			toast.dark("Vui lòng nhập số từ 1 đến " + number);
		}
	};
	const handleChange = (e) => {
		if (
			/[0-9]/.test(e.nativeEvent.data) ||
			e.nativeEvent.inputType === "deleteContentBackward"
		) {
			checkOrSetValue(e.target.value);
		}
	};

	const handlePlayAgain = () => {
		setPlay(true);
		setRemain(total);
		setDataCurrent([]);
		setValue("");
		toast.info("Chào mừng bạn đến với trò chơi đoán số!");
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (
				e.keyCode === 40 ||
				e.keyCode == 38 ||
				(e.keyCode >= 49 && e.keyCode <= 57)
			) {
				e.preventDefault();
				inputRef.current.focus();
				const currentValue = +inputRef.current.value;
				let newValue = currentValue;
				if (e.keyCode === 40 || e.keyCode == 38) {
					newValue =
						e.keyCode === 40 ? currentValue - 1 : currentValue + 1;
				} else {
					newValue = +(newValue + e.key);
				}
				checkOrSetValue(newValue);
			}
			if (e.keyCode === 13 && !play) {
				handlePlayAgain();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [play]);

	return (
		<>
			{play ? (
				<>
					<h3 className={clsx(styles.title)}>Hãy thử nhập 1 số</h3>
					<form onSubmit={handleSubmit}>
						<input
							className={clsx(styles.input)}
							type="text"
							value={value}
							placeholder="Thử một số"
							onChange={handleChange}
							ref={inputRef}
						/>
					</form>
				</>
			) : (
				<button onClick={handlePlayAgain}>Chơi lại</button>
			)}
		</>
	);
};

export default FormNumber;
