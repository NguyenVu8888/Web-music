const mongoose = require("./db");

const Schema = mongoose.Schema;

const MvsSchema = new Schema(
  {
    nameMv: String,
    author: String,
    imageMv: String,
    videoMv: String,
    timeMv: String,
    production: String,
    likeMv: String,
    shareMv: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Mvs",
  }
);

const MvsModel = mongoose.model("Mvs", MvsSchema);

module.exports = MvsModel;
