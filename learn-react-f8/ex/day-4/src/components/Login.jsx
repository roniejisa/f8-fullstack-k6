import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithPopup } = useAuth0();
	return (
		<div
			style={{
                border:"1px solid #333",
                padding:"10px",
                borderRadius:"6px",
				maxWidth: "400px",
				margin: "0 auto",
				textAlign: "center",
			}}>
			<div>Cảm ơn bạn đã sử dụng dịch vụ của F8</div>
			<div>
				Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu
				hỏi tại đây!
			</div>
			<button
				style={{
					width: "100%",
					border: "none",
					outline: "none",
					padding: "10px 12px",
					background: "orange",
					color: "#fff",
					borderRadius: "6px",
					cursor: "pointer",
				}}
				onClick={loginWithPopup}>
				Đăng nhập || Đăng ký
			</button>
		</div>
	);
};

export default Login;
