const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");
const userController = require("../controllers/user.controller");
const courseController = require("../controllers/course.controller");
const authController = require("../controllers/auth.controller");
const categoryController = require("../controllers/category.controller");
router.get("/", homeController.index);
router.get("/users", userController.index);
router.get("/users/:id", userController.getDetail);
router.post("/users", userController.create);
router.post("/users/:id", userController.update);
router.post("/users/:id/delete", userController.delete);
router.get("/users/:id/posts", userController.posts);
router.get("/courses", courseController.index);
router.get("/courses/:id", courseController.find);
router.post("/courses", courseController.create);
router.post("/courses/:id", courseController.update);
router.delete("/courses/ids", courseController.deleteIds);
router.delete("/courses/:id", courseController.delete);
router.get("/login", authController.loginForm);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/find-by-phone", userController.findByPhone);
router.get("/post/:id", userController.findByPost);
router.post("/create-post/:id", userController.createPost);
router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.find);
router.get("/categories/:id/by-post", categoryController.findByPost);
router.post("/categories/:id/create-post", categoryController.createPost);
router.post("/categories/:id/create-posts", categoryController.createPosts);
router.post("/categories/:id/set-posts", categoryController.setPosts);
router.post("/delete-post/:id", categoryController.deletePost);
module.exports = router;
