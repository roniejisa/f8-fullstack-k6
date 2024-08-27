"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUsers } from "./action";
import { getProfile } from "../utils/profile";

const UserClient = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [permissions, setPermission] = useState([]);
    useEffect(() => {
        getUsers()
            .then((res) => {
                if (!res) throw new Error("Đã có lỗi xảy ra");
                setUsers(res.data);
                setIsLoading(false);
            })
            .catch((res) => {
                setError(true);
            });
        getProfile().then((res) => {
            setPermission(res.permissions);
        });
    }, []);

    if (error) {
        return <h1>Không có quyền truy cập</h1>;
    }
    return (
        <div>
            {isLoading ? (
                <h1>Đang tải</h1>
            ) : (
                <>
                    <div className="flex justify-between">
                        <h1>Danh sách người dùng</h1>
                        {permissions.includes("users.create") && (
                            <Link className="border px-4 py-2 rounded-md bg-red-300 text-white" href={"/users/create"}>
                                Thêm người dùng
                            </Link>
                        )}
                    </div>
                    {users.map(({ fullname, id }) => (
                        <div className="border-b border-b-black flex p-2" key={id}>
                            <h1 className="flex-1">{fullname}</h1>
                            <div className="flex gap-2">
                                {permissions.includes("users.update") && (
                                    <Link className="border py-2 px-2" href={`/users/${id}`}>
                                        Sửa
                                    </Link>
                                )}
                                {permissions.includes("users.delete") && (
                                    <Link className="border py-2 px-2" href={`/users/${id}`}>
                                        Xóa
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default UserClient;
