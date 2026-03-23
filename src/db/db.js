require("dotenv").config()
const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connected successfully");
}

module.exports = connectDB;