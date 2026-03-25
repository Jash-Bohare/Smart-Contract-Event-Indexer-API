const express = require("express");
const syncRoutes = require("./routes/sync.routes");
const transferRoutes = require("./routes/transfer.routes");

const app = express();
app.use(express.json());

app.use("/api/sync", syncRoutes);
app.use("/api/transfers", transferRoutes);

module.exports = app;
