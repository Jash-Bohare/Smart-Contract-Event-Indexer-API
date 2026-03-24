const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema(
  {
    from: String,
    to: String,
    amount: String,
    txHash: {
      type: String,
      unique: true,
    },
    blockNumber: Number,
    timestamp: String,
    asset: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transfer", transferSchema);