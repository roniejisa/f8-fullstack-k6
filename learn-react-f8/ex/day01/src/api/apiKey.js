import { toast } from "react-toastify";
import { todoApi } from "./todoApi";

export const getApiKey = async () => {
	let email = localStorage.getItem("email");
	if (!email) {
		return await checkEmail();
	}
	return true;
};

function checkEmail() {
	return new Promise(async (resolve) => {
		const checkMail = prompt("Nhập email hợp lệ: ");
		const [response, data] = await todoApi().get(
			`/api-key?email=${checkMail}`
		);

		if (response.ok) {
			localStorage.setItem("email", checkMail);
			localStorage.setItem("key", data.data.apiKey);
			resolve(true);
		} else {
			toast.error(data.message);
			resolve(false);
		}
	});
}

export const refreshApiKey = () => {
	return new Promise(async (resolve) => {
		let email = localStorage.getItem("email");
		const [response, data] = await todoApi().get(
			`/api-key?email=${email}`
		);
		if (response.ok) {
			localStorage.setItem("key", data.data.apiKey);
			resolve(true);
		} else {
			localStorage.remove("email");
			localStorage.remove("key");
			resolve(false);
		}
	});
};
