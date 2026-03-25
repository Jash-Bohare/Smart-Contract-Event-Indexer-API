const express = require("express");
const { getStatsController } = require("../controllers/stats.controller");

const router = express.Router();

router.get("/:address", getStatsController);

module.exports = router;
