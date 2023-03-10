const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.MONGODB, {});
  const connection = mongoose.connection;
  connection.once("open", () => console.log(`Connected to DB`));
  connection.on("error", () => console.log("Connection error"));
};
