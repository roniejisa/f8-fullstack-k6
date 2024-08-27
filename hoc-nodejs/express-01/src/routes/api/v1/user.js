const express = require("express");
const router = express.Router();
const { errorResponse } = require("../../../utils/response");
const userController = require("../../../controllers/user.controller");
const userRoleController = require("../../../controllers/user_role.controller");
const authApiMiddleware = require("../../../middlewares/auth-api.middleware");
const permissionMiddleware = require("../../../middlewares/permission.middleware");
// router.use((req, res, next) => {
//     const apiKey = req.headers["x-api-key"];
//     if (apiKey === "f8-traning") {
//         next();
//     } else {
//         return errorResponse(res, undefined, "Lỗi xác thực", 500);
//     }
// });
router.use(authApiMiddleware);

router.get("/", permissionMiddleware("users.create"), userController.findAll);
router.post("/", userController.create);
router.get("/:id", userController.findOne);
router.patch("/:id", userController.update);
router.delete("/:id", userController.delete);

router.get("/:id/roles", userRoleController.roles);
router.patch("/:id/roles", userRoleController.update);
router.delete("/:id/roles", userRoleController.destroy);
router.use((req, res) => {
    return errorResponse(res, undefined, "Dữ liệu không tồn tại", 400);
});
module.exports = router;
