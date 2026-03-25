require("dotenv").config();
const axios = require("axios");
const { ethers } = require("ethers");

const ALCHEMY_URL = process.env.RPC_URL;

async function fetchTransfers(params) {
  const response = await axios.post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "alchemy_getAssetTransfers",
    params: [params],
  });

  const res = response.data;

  if (res.error) throw new Error(res.error.message);

  return res.result.transfers;
}

async function getTransfers(address) {
  try {
    if (!ethers.isAddress(address)) {
      throw new Error("Invalid address");
    }

    const baseParams = {
      fromBlock: "0x0",
      toBlock: "latest",
      excludeZeroValue: true,
      withMetadata: true,
      category: ["external", "erc20"],
      maxCount: "0xA",
    };

    const [outgoing, incoming] = await Promise.all([
      fetchTransfers({ ...baseParams, fromAddress: address }),
      fetchTransfers({ ...baseParams, toAddress: address }),
    ]);

    return {
      outgoing,
      incoming,
    };
  } catch (err) {
    console.error("Fetch Transfers Error:", err.message);
    throw err;
  }
}

module.exports = getTransfers;