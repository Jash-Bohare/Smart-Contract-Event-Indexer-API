const Transfer = require("../models/Transfer");

async function getAllTransfers() {
  return await Transfer.find().sort({ blockNumber: -1 });
}

async function getTransfersByAddress(address) {
  return await Transfer.find({
    $or: [{ from: address }, { to: address }],
  }).sort({ blockNumber: -1 });
}

async function getIncomingTransfers(address) {
  return await Transfer.find({
    to: address,
  }).sort({ blockNumber: -1 });
}

async function getOutgoingTransfers(address) {
  return await Transfer.find({
    from: address,
  }).sort({ blockNumber: -1 });
}

module.exports = {
  getAllTransfers,
  getTransfersByAddress,
  getIncomingTransfers,
  getOutgoingTransfers,
};
