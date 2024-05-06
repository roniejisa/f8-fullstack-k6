export const client = {
	serverApi: import.meta.env.VITE_SERVER_API,
	post: async (url) => {
		console.log(client.serverApi);
		return 1;
	},
};
