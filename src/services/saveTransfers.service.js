const Transfer = require("../models/transfer.model");

async function saveTransfers({ outgoing, incoming }) {
  try {
    const allTransfers = [...outgoing, ...incoming];

    for (let tx of allTransfers) {
      await Transfer.updateOne(
        { txHash: tx.hash },
        {
          from: tx.from,
          to: tx.to,
          amount: tx.value || "0",
          txHash: tx.hash,
          blockNumber: parseInt(tx.blockNum, 16),
          timestamp: tx.metadata?.blockTimestamp || null,
          asset: tx.asset || "ETH",
        },
        { upsert: true }
      );
    }
  } catch (err) {
    console.error("Save Transfers Error:", err.message);
    throw err;
  }
}

module.exports = saveTransfers;