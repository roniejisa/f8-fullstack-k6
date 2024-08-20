"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const getUsers = async () => {
    const response = await fetch(process.env.API_SERVER + "/users", {
        headers: {
            "x-api-key": "f8-traning",
        },
        cache: "no-cache",
    });
    return response.json();
};

const UserClient = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        getUsers()
            .then((res) => {
                setUsers(res.data);
                setIsLoading(false);
            })
            .catch((res) => {
                setError(true);
            });
    }, []);

    if (error) {
        return <h1>Đã có lỗi xảy ra</h1>;
    }
    return (
        <div>
            {isLoading ? (
                <h1>Đang tải</h1>
            ) : (
                <>
                    <h1>Danh sách người dùng</h1>
                    {users.map(({ fullname, id }) => (
                        <div className="border-b border-b-black" key={id}>
                            <h1>{fullname}</h1>
                            <div className="grid">
                                <Link href={`/users/${id}`}>Sửa</Link>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default UserClient;
