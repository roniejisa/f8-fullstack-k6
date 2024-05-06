import React, { useEffect } from "react";
import RenderLayout from "./core/RenderLayout";
import { client } from "./utils/clientUtils";
import { getTodo } from "./services/todoService";
console.log(client.post("test"));
const App = () => {
	useEffect(async () => {
		const { data } = await getTodo();
	});
	return <RenderLayout />;
};

export default App;