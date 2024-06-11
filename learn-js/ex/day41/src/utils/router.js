import Navigo from "navigo";
import Error from "../pages/Error";
const mainNavigo = new Navigo("/f8-fullstack-k6/learn-js/ex/day41/dist/");
mainNavigo.navigate
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
