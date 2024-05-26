import { useGame } from "../../hooks/game";
import clsx from "clsx";
import styles from "./TableResult.module.scss";
import { useEffect, useRef } from "react";
const getRate = (objResult) => {
	if (!objResult.win) {
		return 0;
	}
	return Math.round(
		((objResult.total - objResult.count + 1) / objResult.total) * 100
	);
};
const TableResult = () => {
	const { data,setData } = useGame((data) => data);
	const resultRef = useRef();
	useEffect(() => {
		const handleMove = (e) => {
			if (e.keyCode === 39) {
				console.log(2);
				resultRef.current.scrollBy({
					left: resultRef.current.offsetWidth,
					behavior: "smooth",
				});
			}
			if (e.keyCode === 37) {
				resultRef.current.scrollBy({
					left: -resultRef.current.offsetWidth,
					behavior: "smooth",
				});
			}
		};

		window.addEventListener("keyup", handleMove);
		return () => {
			window.removeEventListener("keyup", handleMove);
		};
	}, []);
	return (
		<>
			{data.length > 0 && (
				<div className={clsx(styles.container)}>
					<button
                        className={clsx("delete")}
						onClick={() => {
							if (confirm("Bạn có muốn xóa lịch sử hem 😊")) {
								setData([]);
							}
						}}>
						Xóa
					</button>
					<div className={clsx(styles.resultContainer)} ref={resultRef}>
						{data.map((item, index) => {
							const objResult = item.reduce((obj, current) => {
								if (!obj.count) {
									obj.count = 1;
								} else {
									obj.count++;
								}

								if (current.win) {
									obj.win = true;
								}

								if (current.total) {
									obj.total = current.total;
								}

								return obj;
							}, {});
							return (
								<div key={index} className={clsx(styles.tableContainer)}>
									<table className={clsx(styles.table)}>
										<thead>
											<tr>
												<th>Lần đoán</th>
												<th>Số nhập vào</th>
											</tr>
										</thead>
										<tbody>
											{item.map(({ number }, i) => (
												<tr key={i}>
													<td>{i + 1}</td>
													<td>{number}</td>
												</tr>
											))}
										</tbody>
									</table>
									<div className={clsx(styles.resultInfo)}>
										<span>
											Lần chơi thứ {data.length - index}/{data.length}
										</span>
										<span>Số lần nhập tối đa: {objResult.total}</span>
										<span
											className={clsx(
												objResult.win ? styles.win : styles.lose
											)}>
											Tỷ lệ đúng {getRate(objResult)}%
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default TableResult;
