"use client";
import React, { useLayoutEffect, useRef } from "react";

const TitleSection = ({ title }) => {
    const titleRef = useRef();
    useLayoutEffect(() => {
        const arrayString = title.split("");
        titleRef.current.innerHTML = arrayString
            .map((char) => {
                if (char === " ") return "&nbsp;";
                return `<span class="bg-[#ffa50033] rounded-md px-[10px] py-[2px] text-[35px] text-orange uppercase" >${char}</span>`;
            })
            .join("");
    }, []);

    return <h2 className="flex gap-2 justify-center py-[25px]" ref={titleRef}></h2>;
};

export default TitleSection;
