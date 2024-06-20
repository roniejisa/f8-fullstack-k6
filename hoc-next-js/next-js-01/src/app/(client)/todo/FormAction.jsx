"use client";

import { useEffect, useRef, useFormState, useState } from "react";
import { handleSubmit } from "./action";

const FormAction = () => {
    // const handleSubmit = async (form) => {
    //     "use server";
    //     const content = form.get('content');
    //     console.log(content);
    // };
    const [msg, setMsg] = useState("");
    const formRef = useRef();
    return (
        <>
            <form
                action={async (form) => {
                    const status = await handleSubmit(form);
                    if (status) {
                        formRef.current.reset();
                        return setMsg("Thêm thành công");
                    }
                    return setMsg("Thêm thất bại");
                }}
                ref={formRef}
                className="flex flex-col"
            >
                <input type="text" name="content" className="border outline-none p-2 rounded-lg" />
                <button type="submit">Thêm todo</button>
                <p>{msg && msg}</p>
            </form>
        </>
    );
};

export default FormAction;
