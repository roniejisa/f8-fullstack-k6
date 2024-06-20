"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ToggleLogin = ({ user }) => {
    const modalLogin = useSelector((state) => state.config.modalLogin);
    const dispatch = useDispatch();
    const handleShowModalLogin = () => {
        dispatch({ type: "config/setModalLogin", payload: !modalLogin });
        dispatch({ type: "config/setUser", payload: user });
    };

    return (
        <>
            {!user ? (
                <FontAwesomeIcon
                    icon={faUser}
                    className="text-[var(--icon)] cursor-pointer w-[25px] min-h-[25px]"
                    onClick={handleShowModalLogin}
                />
            ) : (
                <button onClick={handleShowModalLogin}>
                    <Image src={user.image} width={40} height={40} alt={user.name} className="rounded-full" />
                </button>
            )}
        </>
    );
};

export default ToggleLogin;
