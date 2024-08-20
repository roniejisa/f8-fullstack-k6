"use client";
import { httpClient } from "@/app/utils/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

let debounce: any = null;
const FormUpdate = ({ user }: any) => {
    const [message, setMessage] = useState<{
        type: "success" | "error";
        message: string;
    }>({
        type: "success",
        message: "",
    });
    const router = useRouter();
    const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
        clearInterval(debounce);
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        debounce = setTimeout(async () => {
            const body = Object.fromEntries(formData);
            const response = await httpClient("/users/" + user.data.id, "PATCH", body);
            const infoUpdate = await response.json();
            if (!response.ok) {
                const errorMessage: string = String(Object.entries(infoUpdate.errors)[0][1]) || "";
                setMessage({
                    type: "error",
                    message: errorMessage,
                });
                console.log();
                return infoUpdate;
            }
            setMessage({
                type: "success",
                message: "Cập nhật thành công",
            });
            setTimeout(() => {
                router.push("/");
            }, 2000);
        }, 500);
    };
    return (
        <form onSubmit={updateUser}>
            {message && (
                <p className={`${message.type == "success" ? "text-green-500" : "text-red-500"}`}>{message.message}</p>
            )}
            <div>
                <label>Tên</label>
                <br />
                <input
                    type="text"
                    className="border rounded-md px-3 py-2"
                    name="fullname"
                    defaultValue={user.data?.fullname}
                    placeholder="Tên"
                />
            </div>
            <div>
                <label>Email</label>
                <br />
                <input
                    className="border rounded-md px-3 py-2"
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={user.data?.email}
                />
            </div>
            <div>
                <label>Mật khẩu</label>
                <br />
                <input className="border rounded-md px-3 py-2" type="text" name="password" placeholder="Mật khẩu" />
            </div>
            <div>
                <label>Trạng thái</label>
                <br />
                <input type="checkbox" name="status" defaultChecked={user.data?.status == true} />
            </div>
            <button className="border bg-slate-900 text-white rounded-md px-5 py-2">Sửa</button>
        </form>
    );
};

export default FormUpdate;
