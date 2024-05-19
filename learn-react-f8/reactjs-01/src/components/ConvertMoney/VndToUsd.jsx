import React from "react";

const VndToUsd = ({onChange, data}) => {
	return (
		<div>
			<input type="text" id="vnd" value={data.vnd} onChange={onChange} placeholder="VND"/>
		</div>
	);
};

export default VndToUsd;
