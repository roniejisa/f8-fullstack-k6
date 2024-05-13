import React from "react";
import "./loading.css";
import { useSelector } from "../core/hook";
const Loading = () => {
	const isLoading = useSelector((state) => state.isLoading);
	return (
		<>
			{isLoading && (
				<div className="rs-loading-main">
					<div className="rsl-wave">
						<span className="rsl-wave--icon"></span>
						<span className="rsl-wave--icon"></span>
						<span className="rsl-wave--icon"></span>
					</div>
				</div>
			)}
		</>
	);
};

export default Loading;
