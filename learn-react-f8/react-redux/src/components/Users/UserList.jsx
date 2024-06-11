import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../../redux_toolkit/middlewares/userMiddleware";
import { resetUser } from "../../redux_toolkit/slice/userSlice";

const UserList = () => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(0);
    const { data: users, status } = useSelector((state) => state.user.users);
    const { data: user, status: statusUser } = useSelector((state) => state.user.user);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    useEffect(() => {
        if (userId) {
            dispatch(getUser(userId));
        }
        return () => {
            dispatch(resetUser());
        };
    }, [userId, dispatch]);

    if (status === "failed") {
        return <h3>Đã có lỗi xảy ra</h3>;
    }
    if (statusUser === "failed") {
        return (
            <>
                <h3>Không tìm thấy người dùng</h3>
                <button onClick={() => setUserId(0)}>Quay lại</button>
            </>
        );
    }

    const handlePreviewUser = (id) => {
        setUserId(id);
    };
    return (
        <div>
            {userId === 0 ? (
                <>
                    <h2>Danh sách người dùng</h2>
                    {status === "pending" ? (
                        <p>Loading...</p>
                    ) : status === "idle" ? (
                        <></>
                    ) : (
                        status === "success" &&
                        users.map((user) => (
                            <div key={user.id} style={{ borderBottom: "1px solid black", marginBottom: "10px" }}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <button onClick={() => handlePreviewUser(user.id)}>Xem</button>
                            </div>
                        ))
                    )}
                </>
            ) : (
                <>
                    <h2>Chi tiết người dùng</h2>
                    {statusUser === "pending" ? (
                        <p>Loading...</p>
                    ) : statusUser === "idle" ? (
                        <></>
                    ) : (
                        <>
                            <p>Name: {user.name}</p>
                            <p>Name: {user.email}</p>
                            <div>
                                <img src={user.avatar} alt={user.name} />
                            </div>
                            <button onClick={() => setUserId(0)}>Quay lại</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default UserList;
