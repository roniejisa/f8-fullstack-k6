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

client.refreshToken = async () => {
	const email = getCookie("email");
	const [response, data] = await client.get("/api-key?email=" + email);
	if (response.ok) {
		document.cookie = `apiKey=${data.data.apiKey}`;
        return true;
	} else {
		document.cookie = `apiKey=${data.data.apiKey};expires=${new Date(
			"1970"
		).toUTCString()}`;
		document.cookie = `email=${data.data.apiKey};expires=${new Date(
			"1970"
		).toUTCString()}`;
        return false;
	}
};

export default client;
