const express = require("express");
const permissionController = require("../../../controllers/permission.controller");

const router = express.Router();
router.post("/", permissionController.create);

module.exports = router;
