const express = require("express");
const syncRoutes = require("./routes/sync.routes");
const transferRoutes = require("./routes/transfer.routes");
const statsRoutes = require("./routes/stats.routes");

const app = express();
app.use(express.json());

app.use("/api/sync", syncRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/stats", statsRoutes);

module.exports = app;
