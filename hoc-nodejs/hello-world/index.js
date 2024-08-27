const http = require("http");
const url = require("url");
// const time = require("./time");
const getPage = (path) => {
    let page;
    switch (path) {
        case "/":
            page = "pages/home";
            break;
        case "/about":
            page = "pages/about";
            break;
        case "/products":
            page = "pages/products";
            break;
        default:
            page = "pages/404";
            break;
    }
    if (page) {
        return require(`./${page}`);
    }
};

const getApi = (path) => {
    switch (path) {
        case "/api/users":
            return require("./api/users");
        default:
            return null;
    }
};
const server = http.createServer((req, res) => {
    // res.write(`<h1>Học Back-end không khó! ${time} </h1>`, "utf-8");
    const urlParse = url.parse(req.url);
    const pathName = urlParse.pathname;
    if (pathName.startsWith("/api")) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        return res.end(JSON.stringify(getApi(pathName)));
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(getPage(pathName));
});

server.listen(3333, "localhost", () => {
    console.log("Server is running on http://localhost:3333");
});
