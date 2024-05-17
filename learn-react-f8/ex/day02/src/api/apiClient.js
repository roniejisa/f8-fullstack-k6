import { client } from "../../utils/client";
client.apiEndpoint = "https://api-todo-ebon.vercel.app/api/v1";

client.hasToken = () => {
	const token = localStorage.getItem("token");
	client.setHeaders({
		"X-Api-Key": token,
	});
};

client.refreshToken = async () => {
	const email = localStorage.getItem("email");
	const [response, data] = await client.get("/api-key?email=" + email);
	if (response.ok) {
		localStorage.setItem("token", data.data.apiKey);
		return true;
	} else {
		localStorage.removeItem("email");
		localStorage.removeItem("token");
		return false;
	}
};

export default client;
