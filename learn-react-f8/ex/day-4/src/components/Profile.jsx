import { useContext } from "react";
import { AppContext } from "../App";
import Logout from "./Logout";
import FormSupport from "./FormSupport";

const Profile = () => {
	const { user } = useContext(AppContext);
	return (
		<>
			<div
				style={{
					maxWidth: "300px",
					margin: "30px auto 0",
					border: "1px solid #ebebeb",
					borderRadius:"10px",
                    padding: "10px",
					textAlign: "center",
				}}>
				<div style={{
                    padding:"10px",
                    border:"1px solid #ebebeb",
                    borderRadius:"10px"
                }}>
					<img
						src={user.picture}
						width={50}
						height={50}
						style={{
							borderRadius: "50px",
						}}
					/>
					<h2>Xin chào {user.name}!</h2>
					<div>Vị trí: {user.locale === "vi" ? "Việt Nam" : ""}</div>
					<div>
						Email: <a href={`mailto:${user.email}`}>{user.email}</a>
					</div>
					<FormSupport />
				</div>
				<Logout />
			</div>
		</>
	);
};

export default Profile;
