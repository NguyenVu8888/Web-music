const PlaylistModel = require("../../models/playlists");

class PlaylistController {
  showPlaylist(req, res, next) {
    PlaylistModel.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  addPlaylist(req, res, next) {
    var { NamePlaylist, Creator, category, imagePlaylist, ListSong } = req.body;
    PlaylistModel.create({
      NamePlaylist: NamePlaylist,
      Creator: Creator,
      category: category,
      imagePlaylist: imagePlaylist,
      ListSong: ListSong,
    })
      .then((data) => {
        res.json("them playlist thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  updatePlaylist(req, res, next) {
    var id = req.params.id;
    var {
      NewNamePlaylist,
      NewCreator,
      Newcategory,
      NewimagePlaylist,
      NewListSong,
    } = req.body;
    PlaylistModel.findByIdAndUpdate(id, {
      NamePlaylist: NewNamePlaylist,
      Creator: NewCreator,
      category: Newcategory,
      imagePlaylist: NewimagePlaylist,
      ListSong: NewListSong,
    })
      .then((data) => {
        res.json("cap nhat playlist thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  deletePlaylist(req, res, next) {
    var id = req.params.id;
    PlaylistModel.deleteOne({ _id: id })
      .then((data) => {
        res.json("xoa thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  showPlaylistId(req, res, next) {
    var id = req.params.id;
    PlaylistModel.find({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("loi server");
      });
  }
}

module.exports = new PlaylistController();
