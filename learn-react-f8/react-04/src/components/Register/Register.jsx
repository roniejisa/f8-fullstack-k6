import { useId } from "react";

const Register = () => {
    const id = useId()
    return (
        <form>
            <div>
                <label htmlFor={id}>Name</label>
                <input type="text" id={id} name="name" placeholder="Name..." />
            </div>
            <div>
                <label htmlFor={id}>Email</label>
                <input type="email" id={id} name="email" placeholder="Email..." />
            </div>
            <div>
                <label htmlFor={id}>Mật khẩu</label>
                <input type="password" id={id} name="password" placeholder="Password..." />
            </div>
            <button>Đăng ký</button>
        </form>
    );
};

export default Register;
