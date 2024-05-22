import { useAuth0 } from "@auth0/auth0-react";
const Logout = () => {
	const { logout } = useAuth0();
    const handleLogout = () => {
        logout({
            logoutParams:{
                returnTo:window.location.origin
            }
        })
    }
	return (
		<button
            style={
                {
                    width:"100%",
                    border:"none",
                    outline:"none",
                    padding:"10px 12px",
                    background:"orange",
                    color:"#fff",
                    borderRadius:"6px",
                    cursor:"pointer",
                }
            }
			onClick={handleLogout}>
			Đăng xuất
		</button>
	);
};

export default Logout;
