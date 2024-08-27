require("dotenv").config();
const express = require("express");
const port = 1234;
const app = express();
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
const flash = require("connect-flash");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
var expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", path.join(__dirname, "views/layouts/default"));
app.use(express.static("public"));
app.use(flash());

//app.method(path, callback <=> handler)
//method: get, post, delete, put, patch
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cookieParser()); // Xử lý cookie
app.use(cors());
app.use(
    session({
        secret: "F8_FULLSTACK_K6",
        resave: false,
        saveUninitialized: true,
        name: "rss",
        // cookie: { secure: true }
    })
);
app.use(webRouter);
app.use("/api", apiRouter);

app.use(
    morgan("common", {
        stream: fs.createWriteStream("./logs/access.log", { flags: "a" }),
    })
);
// Xử lý lỗi 404
app.use((req, res, next) => {
    res.render("errors/error", {
        error: "Không tìm thấy trang",
    });
});

// Xử lý lỗi mặc định
app.use((err, req, res, next) => {
    res.status(500);
    res.render("errors/error", {
        error: err,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
