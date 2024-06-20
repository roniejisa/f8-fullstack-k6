"use client";
import React, { useId } from "react";

const InputEl = ({ data, children }) => {
    const id = useId();
    return (
        <div className="mt-2">
            <label htmlFor={id} className="text-xl text-[var(--text)] py-[10px] block">
                {data.label}
            </label>
            {children}
            <input
                type={data.type}
                id={id}
                className="p-[10px] outline-none rounded-[3px] bg-transparent text-[var(--text-input)] border border-[var(--border-input-color)] w-full"
                placeholder={data.placeholder || ""}
            />
        </div>
    );
};

export default InputEl;
