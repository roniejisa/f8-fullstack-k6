import { client } from "../utils/clientUtils";

export const getTodo = async () => {
	return await client.post("test");
};
