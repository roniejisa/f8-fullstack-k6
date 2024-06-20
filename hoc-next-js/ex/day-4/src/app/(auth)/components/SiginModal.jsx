"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
const providers = [
    {
        name: "GitHub",
        id: "github",
        icon: faGithub,
    },
    {
        name: "Google",
        id: "google",
        icon: faGoogle,
    },
];

const ModalSignIn = ({ children }) => {
    const modalLogin = useSelector((state) => state.config.modalLogin);
    const user = useSelector((state) => state.config.user);
    const dispatch = useDispatch();
    return (
        <div
            className={`fixed z-[9999] inset-0 bg-[#00000050] flex justify-center items-center ${
                modalLogin ? "show" : "invisible opacity-0"
            }`}
            onClick={() => dispatch({ type: "config/setModalLogin", payload: false })}
        >
            <div className="max-w-[400px] w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col bg-white p-4 rounded-lg shadow-2xl ">
                    <div className="flex justify-center items-center relative">
                        <h4 className="text-2xl">Đăng nhập</h4>
                        <button
                            className="absolute top-0 right-0"
                            onClick={() => dispatch({ type: "config/setModalLogin", payload: false })}
                        >
                            &times;
                        </button>
                    </div>
                    {children}
                    <span className="text-[var(--text)] text-center mt-3">-- Đăng nhập với --</span>
                    <div className="mt-4">
                        {providers.map((provider) => (
                            <button
                                key={provider.id}
                                onClick={() =>
                                    user && user.provider === provider.id ? signOut() : signIn(provider.id)
                                }
                                className="w-full items-center hover:bg-[var(--border-input-color-hover)] hover:text-black justify-center relative flex py-2 bg-[var(--border-input-color)] my-2 px-2 text-[var(--modal-text-btn)]"
                            >
                                <FontAwesomeIcon icon={provider.icon} className="mr-2" />
                                {user && user.provider === provider.id
                                    ? "Đang đăng nhập"
                                    : `Login with ${provider.name}`}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSignIn;
