const Transfer = require("../models/transfer.model");

function getPagination(query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const skip = (page - 1) * limit;

  return { page, limit, skip };
}

async function getAllTransfers() {
  return await Transfer.find().sort({ blockNumber: -1 });
}

async function getTransfersByAddress(address) {
  return await Transfer.find({
    $or: [{ from: address }, { to: address }],
  }).sort({ blockNumber: -1 });
}

async function getIncomingTransfers(address, query) {
  const { limit, skip } = getPagination(query);

  return await Transfer.find({ to: address })
    .sort({ blockNumber: -1 })
    .skip(skip)
    .limit(limit);
}

async function getOutgoingTransfers(address, query) {
  const { limit, skip } = getPagination(query);

  return await Transfer.find({ from: address })
    .sort({ blockNumber: -1 })
    .skip(skip)
    .limit(limit);
}

module.exports = {
  getAllTransfers,
  getTransfersByAddress,
  getIncomingTransfers,
  getOutgoingTransfers,
};
