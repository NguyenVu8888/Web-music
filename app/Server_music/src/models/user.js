const mongoose = require("./db");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    imageUser: String,
    email: String,
    name: String,
    playlist: String,
    favorites: String,
    history: String,
    role: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "user",
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
