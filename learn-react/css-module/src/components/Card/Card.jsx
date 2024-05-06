import React from "react";
import clsx from "clsx";
import style from "./Card.module.scss";
const Card = () => {
	return (
		<div className={style.card}>
			<h1>Sản phẩm</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
				rerum, placeat eligendi necessitatibus voluptatibus consequuntur
				impedit. Consequatur neque, sequi dignissimos atque qui,
				perferendis commodi, odit voluptas nihil excepturi illum nisi.
			</p>
			<button className={clsx(style.btn, style.card)}>
				Xem chi tiết
			</button>
		</div>
	);
};

export default Card;
