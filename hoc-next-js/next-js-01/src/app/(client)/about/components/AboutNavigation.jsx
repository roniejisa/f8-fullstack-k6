"use client";
import { useRouter } from "next/navigation";
const AboutNavigation = () => {
    const router = useRouter();
    return (
        <div className="flex justify-between">
            <button onClick={() => router.push("/about/contact-us")}>Đọc tiếp</button>
        </div>
    );
};

export default AboutNavigation;
