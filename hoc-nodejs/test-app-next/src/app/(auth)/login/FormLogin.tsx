"use client";
import React, { useState } from "react";
import { loginAction } from "./action";
import { useRouter } from "next/navigation";

const FormLogin = () => {
    const router = useRouter();
    const [message, setMessage] = useState({
        type: "success",
        message: "",
    });
    return (
        <form
            action={async (form: FormData) => {
                const status = await loginAction(form);
                if (status) {
                    setMessage({
                        type: "error",
                        message: "Đăng nhập thành công",
                    });
                    return router.push("/");
                }
                setMessage({
                    type: "error",
                    message: "Đăng nhập thành công",
                });
            }}
        >
            {message.message && <h3>{message.message}</h3>}
            <div>
                <label>Email</label>
                <br />
                <input type="text" className="border px-3 py-2" name="email" placeholder={"Email"} />
            </div>
            <div>
                <label>Password</label>
                <br />
                <input type="text" className="border px-3 py-2" name="password" placeholder={"Password"} />
            </div>
            <button className="border px-3 py-2 bg-green-300 mt-2">Đăng nhập</button>
        </form>
    );
};

export default FormLogin;
