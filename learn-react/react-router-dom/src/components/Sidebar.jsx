import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Sidebar = () => {
	const activeMenu = ({ isActive }) => {
		return isActive ? "nav-active" : "";
	};

	const CustomLink = ({ children, to, ...props }) => {
		const resolved = useResolvedPath(to);
		const match = useMatch({ path: resolved.pathname, end: true });
		return (
			<li className={match ? "nav-active" : ""}>
				<Link to={to} {...props}>
					{children}
				</Link>
			</li>
		);
	};
	return (
		<>
			<h1 className="font-bold text-2xl">Menu</h1>
			{/* <ul>
				<li>
					<NavLink to="/" className={activeMenu}>
						Trang chủ
					</NavLink>
				</li>
				<li>
					<NavLink to="/gioi-thieu" className={activeMenu}>
						Giới thiệu
					</NavLink>
				</li>
				<li>
					<NavLink to="/san-pham" className={activeMenu}>
						Sản phẩm
					</NavLink>
				</li>
			</ul> */}
			{/* CustomLink */}
			<ul className="sticky top-0">
				<CustomLink to="/">Trang chủ</CustomLink>
				<CustomLink to="/gioi-thieu">Giới thiệu</CustomLink>
				<CustomLink to="/san-pham">Sản phẩm</CustomLink>
				<CustomLink to="/dat-hang">Đặt hàng</CustomLink>
			</ul>
		</>
	);
};

export default Sidebar;
