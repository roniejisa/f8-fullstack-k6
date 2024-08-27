const express = require("express");
const authController = require("../../../controllers/auth.controller");
const authApiMiddleware = require("../../../middlewares/auth-api.middleware");
const router = express.Router();

router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);
router.post("/revoke-token", authController.revokeToken);
router.get("/profile", authApiMiddleware, authController.profile);
router.post("/logout", authApiMiddleware, authController.logout);
module.exports = router;
