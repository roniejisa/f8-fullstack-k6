"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToggleLightDark = () => {
    const theme = useSelector((state) => state.config.theme);
    const dispatch = useDispatch();
    const toggleDarkMode = () => {
        if (theme === "light") {
            dispatch({ type: "config/setTheme", payload: "dark" });
        } else {
            dispatch({ type: "config/setTheme", payload: "light" });
        }
    };

    useLayoutEffect(() => {
        if (theme === "light") {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
        document.cookie = `theme=${theme}; path=/;`;
    }, [theme]);

    return (
        <FontAwesomeIcon
            icon={theme === "light" ? faMoon : faSun}
            className="text-[var(--icon)] w-[25px] min-h-[25px] cursor-pointer"
            onClick={toggleDarkMode}
        />
    );
};

export default ToggleLightDark;
