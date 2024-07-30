const express = require("express");
const router = express.Router();
router.get("/users", (req,res) => {
    return res.json({
        status:200,
        message:"hehe"
    })
})
module.exports = router;