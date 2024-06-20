"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NavMenu = ({ params }) => {
    const { menu } = useSelector((state) => state.config);
    return (
        <nav
            className={`absolute md:relative ${
                menu ? "show" : ""
            } top-full left-0 invisible opacity-0 md:visible md:opacity-100`}
        >
            <ul className="md:flex">
                <li>
                    <Link href="/">Trang chủ</Link>
                </li>
                <li>
                    <Link href="#dat-lich">Đặt lịch</Link>
                </li>
                <li>
                    <Link href="#uu-dai">Ưu đãi</Link>
                </li>
                <li>
                    <Link href="#dich-vu">Dịch vụ</Link>
                </li>
                <li>
                    <Link href="#thu-vien">Thư viện</Link>
                </li>
                <li>
                    <Link href="#danh-gia">Đánh giá</Link>
                </li>
                <li>
                    <Link href="#lien-he">Liên hệ</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
