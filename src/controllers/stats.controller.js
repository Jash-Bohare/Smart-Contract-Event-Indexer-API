const getStats = require("../services/stats.service");
const { ethers } = require("ethers");

async function getStatsController(req, res) {
  try {
    const { address } = req.params;

    if (!ethers.isAddress(address)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address",
      });
    }

    const stats = await getStats(address);

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = { getStatsController };