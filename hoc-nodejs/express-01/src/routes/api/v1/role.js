const express = require("express");
const roleController = require("../../../controllers/role.controller");

const router = express.Router();
router.post("/", roleController.create);
router.get("/", roleController.index);
router.patch("/:id", roleController.update);
router.get("/:id", roleController.findOne);
router.delete("/:id", roleController.destroy);

module.exports = router;
