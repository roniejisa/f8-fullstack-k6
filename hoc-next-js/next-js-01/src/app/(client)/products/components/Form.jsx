"use client";

import { usePathname, useRouter } from "next/navigation";

const Form = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const params = new URLSearchParams(formData).toString();
        router.push(pathname + "?" + params);
    };
    return (
        <form className="grid grid-cols-12" onSubmit={handleSubmit}>
            <div className="col-span-3">
                <select name="status" className="w-full p-2 outline-none border" id="">
                    <option value="all">Tất cả trạng thái</option>
                    <option value="active">Chưa kích hoạt</option>
                    <option value="inactive">Chưa kích hoạt</option>
                </select>
            </div>
            <div className="col-span-7">
                <input
                    type="text"
                    className="border w-full p-2 rounded-md outline-none"
                    name="keyword"
                    placeholder="Tiếm sản phẩm"
                />
            </div>
            <div className="grid col-span-2">
                <button className="text-white bg-purple-400 p-2 rounded-md">Tìm kiếm</button>
            </div>
        </form>
    );
};

export default Form;
