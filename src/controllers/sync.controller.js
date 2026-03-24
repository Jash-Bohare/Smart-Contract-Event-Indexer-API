const syncTransfers = require("../services/sync.service");

async function sync(req, res) {
  try {
    const { address } = req.params;

    const result = await syncTransfers(address);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = { sync };