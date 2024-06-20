"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="mt-4 btn" disabled={pending}>
            Đăng nhập
        </button>
    );
}
