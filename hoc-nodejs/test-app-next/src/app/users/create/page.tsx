import { redirect } from "next/navigation";

const CreateUser = () => {
    const createUser = async (data: any) => {
        "use server";
        const body = Object.fromEntries([...data]);
        const response = await fetch(process.env.API_SERVER + "/users", {
            headers: {
                "x-api-key": "f8-traning",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(body),
        });
        const user = await response.json();
        if (response.ok) {
            redirect("/users");
        } else {
            console.log(user);
        }
    };
    return (
        <>
            <h1>Thêm người dùng</h1>
            <form action={createUser}>
                <div>
                    <label>Tên</label>
                    <br />
                    <input type="text" name="fullname" placeholder="Tên" />
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <br />
                    <input type="text" name="password" placeholder="Mật khẩu" />
                </div>
                <div>
                    <label>Trạng thái</label>
                    <br />
                    <input type="checkbox" name="status" />
                </div>
                <button>Tạo</button>
            </form>
        </>
    );
};

export default CreateUser;
