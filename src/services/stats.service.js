const Transfer = require("../models/transfer.model");

async function getStats(address) {
  try {
    const transfers = await Transfer.find({
      $or: [{ from: address }, { to: address }],
    });

    let totalReceived = 0;
    let totalSent = 0;

    const counterpartyMap = {};

    for (let tx of transfers) {
      const amount = Number(tx.amount) || 0;

      if (tx.to.toLowerCase() === address.toLowerCase()) {
        totalReceived += amount;

        const counterparty = tx.from;
        counterpartyMap[counterparty] =
          (counterpartyMap[counterparty] || 0) + 1;
      }

      if (tx.from.toLowerCase() === address.toLowerCase()) {
        totalSent += amount;

        const counterparty = tx.to;
        counterpartyMap[counterparty] =
          (counterpartyMap[counterparty] || 0) + 1;
      }
    }

    let mostFrequentCounterparty = null;
    let maxCount = 0;

    for (let addr in counterpartyMap) {
      if (counterpartyMap[addr] > maxCount) {
        maxCount = counterpartyMap[addr];
        mostFrequentCounterparty = addr;
      }
    }

    const netFlow = totalReceived - totalSent;

    return {
      totalReceived,
      totalSent,
      netFlow,
      mostFrequentCounterparty,
    };
  } catch (err) {
    console.error("Stats Error:", err.message);
    throw err;
  }
}

module.exports = getStats;
