const getTransfers = require("./transfers.service");
const saveTransfers = require("./saveTransfers.service");

async function syncTransfers(address) {
  try {
    const transfers = await getTransfers(address);

    await saveTransfers(transfers);

    return {
      message: "Transfers synced successfully",
      count: transfers.length,
    };
  } catch (err) {
    console.error("Sync Error:", err.message);
    throw err;
  }
}

module.exports = syncTransfers;