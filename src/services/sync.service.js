const getTransfers = require("./transfers.service");
const saveTransfers = require("./saveTransfers.service");

async function syncTransfers(address) {
  try {
    const transfers = await getTransfers(address);

    await saveTransfers(transfers);

    const total =
      transfers.outgoing.length + transfers.incoming.length;

    return {
      message: "Sync successful",
      totalFetched: total,
      outgoing: transfers.outgoing.length,
      incoming: transfers.incoming.length,
    };
  } catch (err) {
    console.error("Sync Error:", err.message);
    throw err;
  }
}

module.exports = syncTransfers;