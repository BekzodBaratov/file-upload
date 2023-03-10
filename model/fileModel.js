const { Schema, model } = require("mongoose");

const schema = new Schema({
  filename: { type: String, required: "File name is required" },
  path: { type: String, required: "Path is required" },
  size: { type: String, required: "Size is required" },
  uuid: { type: String, required: "UUID is required" },
  sender: { type: String },
  reciever: { type: String },
});

module.exports = model("files", schema);
