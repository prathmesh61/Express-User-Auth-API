const mongoose = require("mongoose");
const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connection SUCCESSFULLY:");
  } catch (error) {
    console.log("connection fail:", error);
  }
};
exports = module.exports = { connectionDB };
