const mongoose = require("./db");

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema(
  {
    NamePlaylist: String,
    Creator: String,
    category: String,
    imagePlaylist: String,
    ListSong: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Playlists",
  }
);

const PlaylistModel = mongoose.model("Playlists", PlaylistSchema);

module.exports = PlaylistModel;
