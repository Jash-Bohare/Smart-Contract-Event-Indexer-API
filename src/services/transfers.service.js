require("dotenv").config();
const axios = require("axios");
const { ethers } = require("ethers");

const ALCHEMY_URL = process.env.RPC_URL;

async function getTransfers(address) {
  try {
    if (!ethers.isAddress(address)) {
      throw new Error("Invalid wallet address");
    }

    const response = await axios.post(ALCHEMY_URL, {
      jsonrpc: "2.0",
      id: 1,
      method: "alchemy_getAssetTransfers",
      params: [
        {
          fromBlock: "0x0",
          toBlock: "latest",
          fromAddress: address,
          excludeZeroValue: true,
          withMetadata: true,
          category: ["external", "erc20"],
          maxCount: "0xA",
        },
      ],
    });

    const res = response.data;

    if (res.error) {
      throw new Error(res.error.message);
    }

    return res.result.transfers;
  } catch (err) {
    console.error("Fetch Transfers Error:", err.message);
    throw err;
  }
}

module.exports = getTransfers;
