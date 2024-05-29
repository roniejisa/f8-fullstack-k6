import { useLogout, useSelector } from "../../store/hooks/hook";

const Dashboard = () => {
    const { name } = useSelector((state) => state.user.data);
    const logout = useLogout();

    return (
        <div>
            <h2>Chào mừng bạn đã quay trở lại!</h2>
            <li>Chào bạn: {name}</li>
            <li>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        logout();
                    }}
                >
                    Đăng xuất
                </a>
            </li>
        </div>
    );
};

export default Dashboard;
