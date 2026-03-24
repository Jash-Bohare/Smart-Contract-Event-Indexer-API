const express = require("express");
const { sync } = require("../controllers/sync.controller");

const router = express.Router();

router.post("/:address", sync);

module.exports = router;