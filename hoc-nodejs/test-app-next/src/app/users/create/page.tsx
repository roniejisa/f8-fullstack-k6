"use client";
import { useRouter } from "next/navigation";
import { actionCreateUser } from "./action";
import { useState } from "react";

const CreateUser = () => {
    const router = useRouter();
    const message = useState({});
    return (
        <>
            <h1>Thêm người dùng</h1>
            <form
                action={async (form) => {
                    const data = await actionCreateUser(form);
                    if (data) {
                        router.push("/users");
                    }
                }}
            >
                <div>
                    <label>Tên</label>
                    <br />
                    <input type="text" name="fullname" placeholder="Tên" />
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <br />
                    <input type="text" name="password" placeholder="Mật khẩu" />
                </div>
                <div>
                    <label>Trạng thái</label>
                    <br />
                    <input type="checkbox" name="status" />
                </div>
                <button>Tạo</button>
            </form>
        </>
    );
};

export default CreateUser;
