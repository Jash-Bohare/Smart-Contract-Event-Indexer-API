const {
  getAllTransfers,
  getTransfersByAddress,
  getIncomingTransfers,
  getOutgoingTransfers,
} = require("../services/queryTransfers.service");

async function getAll(req, res) {
  try {
    const data = await getAllTransfers();

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
}

async function getByAddress(req, res) {
  try {
    const { address } = req.params;

    const data = await getTransfersByAddress(address);

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
}

async function getOutgoing(req, res) {
  try {
    const { address } = req.params;

    const data = await getOutgoingTransfers(address);

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
}

async function getIncoming(req, res) {
  try {
    const { address } = req.params;

    const data = await getIncomingTransfers(address);

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
}

module.exports = { getAll, getByAddress, getOutgoing, getIncoming };
