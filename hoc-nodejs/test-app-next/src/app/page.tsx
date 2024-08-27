import { headers } from "next/headers";
import UserClient from "./components/UserClient";
import { checkPermission, getProfile } from "./utils/profile";
import Link from "next/link";

export default async function Home() {
    const profile = await getProfile();
    return (
        <main>
            Chào <b>{profile.fullname}</b>
            <table>
                <thead>
                    <tr>
                        <th>Quản lý</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quản lý tài khoản</td>
                        <td>{checkPermission("users.read") && <Link href={"/users"}>Xem</Link>}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
