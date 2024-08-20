import { httpClient } from "@/app/utils/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound, redirect } from "next/navigation";
import { updateUser } from "./action";
import FormUpdate from "./FormUpdate";

type userData = {
    id: number;
    fullname: string;
    email: string;
    password: string;
    status: boolean | null;
};
type ResponseData = {
    id: string | number;
    success: boolean;
    data: userData | null;
};

async function getUser(id: string | number) {
    const response = await httpClient(`/users/${id}`);
    return response.json();
}
const User = async ({
    params,
}: Readonly<{
    params: Params;
}>) => {
    const { id } = params;
    const user: ResponseData = await getUser(id);
    if (!user.success) {
        return notFound();
    }

    return (
        <>
            <h1>Sửa người dùng</h1>
            <FormUpdate user={user} />
        </>
    );
};

export default User;
