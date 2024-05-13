import { client } from "../../../assets/utils/client";
export const todoApi = (hasApiKey = true) => {
	client.apiEndpoint = "https://api-todo-ebon.vercel.app/api/v1";
	if (hasApiKey) {
		let key = localStorage.getItem("key");
		client.setHeaders({ "X-Api-Key": key });
	}
	return client;
};

export const getTodos = () => {
	return todoApi(true).get("/todos");
};
