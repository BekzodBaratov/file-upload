const express = require("express");
const router = express.Router();
const controller = require("../controller/fileController");

router.post("/", controller.fileUpload);

module.exports = router;
