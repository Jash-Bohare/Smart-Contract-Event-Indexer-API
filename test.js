require("dotenv").config();
const getTransfers = require("./src/services/transfers.service");

async function test() {
  const address = "0xc57aB1ceF012CC669C89cA4Efd929b807BD15a4c"; // put any Sepolia address

  const data = await getTransfers(address);

  console.log("Transfers:", data);
}

test();