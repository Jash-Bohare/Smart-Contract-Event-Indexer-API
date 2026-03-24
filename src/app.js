const express = require("express");
const syncRoutes = require("./routes/sync.routes");

const app = express();
app.use(express.json());

app.use("/api", syncRoutes);

module.exports = app;
