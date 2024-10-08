export const client = {
	apiEndpoint: null,
	body: {},
	headers: {},
	setHeaders: function (objHeader) {
		client.headers = { ...client.headers, ...objHeader };
	},
	clearBody: function () {
		client.body = {};
	},
	setBody: function (body) {
		client.body = { ...client.body, body };
	},
	send: async function (method, url, data = {}, type = "json") {
		let body = { ...client.body, ...data };
		if (type === "json") {
			body = JSON.stringify(body);
			client.headers["Content-Type"] = "application/json";
		}
		let options = {
			method,
			headers: client.headers,
		};

		if (method !== "GET") {
			options.body = body;
		}

		try {
			const response = await fetch(client.apiEndpoint + url, options);
			const data = await response.json();
			return [response, data];
		} catch (e) {
			return [
				response,
				{
					error: true,
				},
			];
		}
	},
	get: async function (url) {
		return client.send("GET", url);
	},
	post: async function (url, data) {
		return client.send("POST", url, data);
	},
	patch: async function (url, data) {
		return client.send("PATCH", url, data);
	},
	delete: async function (url) {
		return client.send("DELETE", url);
	},
};
