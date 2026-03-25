const express = require("express");
const {
  getAll,
  getByAddress,
  getIncoming,
  getOutgoing,
} = require("../controllers/transfer.controller");

const router = express.Router();

router.get("/", getAll);
router.get("/:address", getByAddress);
router.get("/:address/incoming", getIncoming);
router.get("/:address/outgoing", getOutgoing);

module.exports = router;
