import clsx from "clsx";
import styles from "./TheNumber.module.scss";
import Slide from "../Slide/Slide";
import FormNumber from "../FormNumber";
import Game from "../../context/Game/Game";
import TableResult from "../TableResult";
const TheNumber = () => {
	return (
		<div className={clsx(styles.TheNumber)}>
			<div className={clsx(styles.main)}>
				<h2 className={clsx(styles.h2)}>
					Chào mừng bạn đến với trò chơi đoán số!
				</h2>
				<Game>
					<Slide />
					<FormNumber />
                    <TableResult />
				</Game>
			</div>
		</div>
	);
};

export default TheNumber;
