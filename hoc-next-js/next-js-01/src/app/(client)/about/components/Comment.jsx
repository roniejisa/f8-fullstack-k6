"use client";

import { useRef } from "react";
import AboutNavigation from "./AboutNavigation";

const Comment = ({ data }) => {
    const bodyRef = useRef();
    
    return (
        <div>
            <p ref={bodyRef}>{data.body || ""}</p>
            <button
                className=" hover:text-red-500 p-2 rounded-md bg-red-200"
                onClick={() => {
                    if (!bodyRef.current.style.display) {
                        bodyRef.current.style.display = "none";
                    } else {
                        bodyRef.current.style.display = null;
                    }
                }}
            >
                Rút gọn
            </button>
            <AboutNavigation />
        </div>
    );
};

export default Comment;
