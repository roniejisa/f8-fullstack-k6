'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navigation = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <ul>
            <li>
               <Link className={pathname === "/" ? "active" : ""} href="#">Menu</Link>
            </li>
            <li>
               <Link className={pathname.startsWith("/products") ? "active" : ""} href="/products">Sản phẩm</Link>
            </li>
            <li>
               <Link className={pathname === "/about" ? "active" : ""} href="/about">Giới thiệu</Link>
            </li>
            <li>
               <Link className={pathname === "/about/about-us" ? "active" : ""} href="/about/about-us">Về chúng tôi</Link>
            </li>
            <li>
               <Link className={pathname === "/about/contact-us" ? "active" : ""} href="/about/contact-us">Liên hệ với chúng tôi</Link>
            </li>
        </ul>
    );
};

export default Navigation;
