import React, { useEffect } from "react";

const User = ({
	error: isError,
	loading: isLoading,
	dataUsers: users,
}) => {
	useEffect(() => {
		console.log("Users Mounting");
		return () => {
			console.log("Unmouting");
		};
	}, []);
	return (
		<>
			<h1>Users</h1>
			{isError ? (
				<h3>Đã có lỗi xảy ra</h3>
			) : (
				<>
					{isLoading ? (
						<h3>Đang tải....</h3>
					) : (
						users.map(({ id, name }) => <h4 key={id}>{name}</h4>)
					)}
				</>
			)}
		</>
	);
};

export default User;
