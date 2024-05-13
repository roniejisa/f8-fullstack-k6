"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ProductForm = () => {
	const router = useRouter();
	const pathname = usePathname();
	const handleSubmit = (e) => {
		e.preventDefault();
		const params = new URLSearchParams();
		for (const [key, data] of [...new FormData(e.target)]) {
			params.append(key, data);
		}
		router.push(pathname + "?" + params.toString());
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<select name="status" className="border">
				<option value="all">Tất cả</option>
				<option value="active">Kích hoạt</option>
				<option value="inactive">Chưa kích hoạt</option>
			</select>
			<input
				type="search"
				className="border"
				name="query"
				placeholder="Từ khóa..."
			/>
			<button>Tìm kiếm</button>
		</form>
	);
};

export default ProductForm;
