"use client";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
const MenuMobile = () => {
    const { menu } = useSelector((state) => state.config);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        dispatch({ type: "config/setMenu", payload: !menu });
    };

    return (
        <div className="basis-24 md:hidden">
            <span className="border border-[var(--icon)] inline-block px-[10px] py-1">
                <FontAwesomeIcon className="text-3xl text-[var(--icon)]" icon={faBars} onClick={toggleMenu} />
            </span>
        </div>
    );
};

export default MenuMobile;
