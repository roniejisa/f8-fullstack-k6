"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
	const pathname = usePathname();
	const isActive = (path) => {
		return path === pathname;
	};
	return (
		<ul className="menu">
			<li className={clsx(isActive("/") && "active")}>
				<Link href="/">Trang chủ</Link>
			</li>
			<li className={clsx(isActive("/san-pham") && "active")}>
				<Link href="/san-pham">Sản phẩm</Link>
			</li>
			<li className={clsx(isActive("/tin-tuc") && "active")}>
				<Link href="/tin-tuc">Tin tức</Link>
			</li>
		</ul>
	);
}
