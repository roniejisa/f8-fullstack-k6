import { useContext, useId, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { AppContext } from "../App";
import { toast } from "react-toastify";

const FormSupport = () => {
	const { user,setLoading } = useContext(AppContext);
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");
	const contentRef = useRef();
	const emailRef = useRef();
	const emailId = useId();
	const contentId = useId();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email.length) {
			toast.error("Vui lòng nhập địa chỉ Email!");
			emailRef.current.focus();
			return false;
		}

		if (!content.length) {
			toast.error("Vui lòng nhập nội dung!");
			contentRef.current.focus();
			return false;
		}
		try {
			setLoading(true);
			await emailjs.send(
				"roniejisa",
				"roniejisa",
				{
                    from_name: user.name,
					to_email: email,
					message: content,
				},
				{
					publicKey: "HlZc-mFVTz380RCS-",
				}
			);

			toast.success("Đã gửi email thành công!");
		} catch (err) {
			if (err instanceof EmailJSResponseStatus) {
				toast.error("Gửi mail không thành công: " + err + "!");
				return;
			}
            toast.error("Gửi mail không thành công: " + err + "!");
		}
		setLoading(false);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div
				style={{
					textAlign: "left",
				}}>
				<label htmlFor={emailId}>Email nhận</label>
				<input
					ref={emailRef}
					type="text"
					id={emailId}
					style={{
						width: "100%",
					}}
					placeholder="Nhập Email của bạn!"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div
				style={{
					textAlign: "left",
				}}>
				<label htmlFor={contentId}>Tin nhắn:</label>
				<textarea
					ref={contentRef}
					placeholder="Cần hỗ trợ?"
					id={contentId}
					style={{
						width: "100%",
					}}
					onChange={(e) => setContent(e.target.value)}
					value={content}></textarea>
			</div>
			<button
				style={{
					width: "100%",
					border: "none",
					background: "green",
					padding: "10px 20px",
					borderRadius: "6px",
					cursor: "pointer",
					color: "#fff",
				}}>
				Gửi yêu cầu trợ giúp!
			</button>
		</form>
	);
};

export default FormSupport;
