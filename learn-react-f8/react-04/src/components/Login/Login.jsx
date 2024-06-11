import Input from "./Input";

const Login = () => {
    return (
        <form>
            <Input type="email" label="Email" name="email" placeholder="Email..." />
            <Input type="password" label="Password" name="password" placeholder="Password..." />
            <button>Đăng nhập</button>
        </form>
    );
};

export default Login;
