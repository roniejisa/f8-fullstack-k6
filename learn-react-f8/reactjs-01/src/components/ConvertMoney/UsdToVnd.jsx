import React from "react";

const UsdToVnd = ({ onChange, data }) => {
	return (
		<div>
			<input
				type="text"
				id="usd"
				value={data.usd}
				onChange={onChange}
				placeholder="USD"
			/>
		</div>
	);
};

export default UsdToVnd;
