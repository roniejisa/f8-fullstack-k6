// GET API: /api-key
import { getCookie } from "../utils/all";
import { client } from "./../../../assets/utils/client";

client.apiEndpoint = "https://api-exercise-sopi.vercel.app/api/v1";

client.hasToken = () => {
	const apiKey = getCookie("apiKey");
	client.setHeaders({
		"X-Api-Key": apiKey,
	});
};

client.refreshToken = () => {
	const email = localStorage.getItem("email");
};

export default client;
