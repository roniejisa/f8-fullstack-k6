import InputEl from "@/app/components/Input";
import { getCsrfToken } from "next-auth/react";
import { SubmitButton } from "./buttonSubmitForm";
const FormSignInEmail = async () => {
    const csrfToken = await getCsrfToken();
    const handleSubmit = async () => {
        "use server";
        // ("/api/auth/signin/email");
    };
    return (
        <form action={handleSubmit} className="flex flex-col">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <InputEl data={{ label: "Email", type: "email", placeholder: "Email" }} />
            <InputEl data={{ label: "Mật khẩu", type: "password", placeholder: "Mật khẩu" }} />
            <SubmitButton />
        </form>
    );
};

export default FormSignInEmail;
