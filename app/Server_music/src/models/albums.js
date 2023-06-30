const mongoose = require("./db");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema(
  {
    NameAlbum: String,
    NameSinger: String,
    releaseYear: String,
    // imageAlbum: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'ImageModel' // Tên của collection chứa ảnh
    // }],
    listSongs: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Albums",
  }
);

const AlbumsModel = mongoose.model("Albums", AlbumSchema);

module.exports = AlbumsModel;
