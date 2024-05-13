"use client";
import React, { useState } from "react";
import useSWR from "swr";
const { API_ENDPOINT, API_PROVINCE } = process.env;
const Checkout = () => {
	const [provinceId, setProvinceId] = useState(null);
	const fetcher = (url) => fetch(url).then((res) => res.json());
	const { data: provinces } = useSWR(
		"http://localhost:3000/api/provinces",
		fetcher
	);
	const { data: districts } = useSWR(
		"http://localhost:3000/api/districts/" + provinceId,
		fetcher
	);
	// const handleChangeProvince =async (e) => {
	//     const response = await fetch("http://localhost:3000/api/districts/"+e.target.value);
	//     if(response.ok){
	//         const {data} = await response.json();
	//         setDistricts(data);
	//     }
	// }
	return (
		<div>
			<h1>Checkout</h1>
			<select onChange={(e) => setProvinceId(e.target.value)}>
				<option value="">Chọn Tỉnh/Thành phố</option>
				{provinces?.data.map(({ name_with_type: name, code }) => (
					<option value={code} key={code}>
						{name}
					</option>
				))}
			</select>
			<select>
				<option value="">Chọn Quận/ Huyện</option>
				{districts?.data.map(({ name_with_type: name, code }) => (
					<option value={code} key={code}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Checkout;
