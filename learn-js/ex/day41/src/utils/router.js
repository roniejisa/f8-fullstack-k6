import Navigo from "navigo";
import Error from "../pages/Error";
const mainNavigo = new Navigo("/");
const app = document.querySelector("#app");

export const router = (routes, defaultLayout) => {
	for (const { path, component } of routes) {
		mainNavigo.on(path, (data) => {
			app.innerHTML = defaultLayout().replace(/\{main\}/, component(data));
		});
	}
    mainNavigo.notFound(data => {
        app.innerHTML = Error();
    })
	mainNavigo.resolve();
};
