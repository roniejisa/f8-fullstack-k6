"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ToggleSearch = () => {
    const search = useSelector((state) => state.config.search);
    const dispatch = useDispatch();

    const handleToggleSearch = () => {
        dispatch({ type: "config/setSearch", payload: !search });
    };
    return (
        <FontAwesomeIcon
            icon={faSearch}
            className="text-[var(--icon)] cursor-pointer w-[25px] min-h-[25px]"
            onClick={handleToggleSearch}
        />
    );
};

export default ToggleSearch;
