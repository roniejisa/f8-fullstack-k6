import React, { useRef, useState } from "react";
import VndToUsd from "./VndToUsd";
import UsdToVnd from "./UsdToVnd";

const ConvertMoney = () => {
	const usdRef = useRef(25449.05);
	const [convert, setConvert] = useState({
		vnd: 0,
		usd: 0,
	});
	const handleChangeVnd = (e) => {
		const vnd = ("" + e.target.value).replaceAll(".", "");
		const config = {
			style: "currency",
			currency: "VND",
			maximumFractionDigits: 9,
		};
		const format = new Intl.NumberFormat("vi-VN", config).format(vnd);
		let usd = vnd / usdRef.current;
		usd = usd > 1 ? usd.toFixed(2) : usd.toFixed(6);
		setConvert({ ...convert, vnd: format.replace(" ₫", ""), usd });
	};

	const handleChangeUsd = (e) => {
		const usd = ("" + e.target.value).replaceAll(".", "");
		const vnd = usd * usdRef.current;
		setConvert({ ...convert, usd, vnd: vnd.toFixed(2) });
	};
	return (
		<div>
			<VndToUsd onChange={handleChangeVnd} data={convert} />
			<UsdToVnd onChange={handleChangeUsd} data={convert} />
		</div>
	);
};

export default ConvertMoney;
