const AlbumsModel = require("../../models/albums");

class AlbumsController {
  showAlbums(req, res, next) {
    AlbumsModel.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  showAlbumsId(req, res, next) {
    var id = req.params.id;
    AlbumsModel.find({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("loi server");
      });
  }

  addAlbums(req, res, next) {
    var { NameAlbum, NameSinger, releaseYear, imageAlbum, listSongs } =
      req.body;
    AlbumsModel.create({
      NameAlbum: NameAlbum,
      NameSinger: NameSinger,
      releaseYear: releaseYear,
      // imageAlbum: imageAlbum,
      listSongs: listSongs,
    })
      .then((data) => {
        res.json("them album thanh cong");
      })
      .catch((err) => {
        res.status(500).json("them album that bai");
      });
  }

  updateAlbums(req, res, next) {
    var id = req.params.id;
    var {
      NewNameAlbum,
      NewNameSinger,
      NewreleaseYear,
      NewimageAlbum,
      NewlistSongs,
    } = req.body;
    AlbumsModel.findByIdAndUpdate(id, {
      NameAlbum: NewNameAlbum,
      NameSinger: NewNameSinger,
      releaseYear: NewreleaseYear,
      imageAlbum: NewimageAlbum,
      listSongs: NewlistSongs,
    })
      .then((data) => {
        res.json("cap nhat album thanh cong");
      })
      .catch((err) => {
        res.status.json("cap nhat album that bai");
      });
  }

  deleteAlbums(req, res, next) {
    var id = req.params.id;
    AlbumsModel.deleteOne({
      _id: id,
    })
      .then((data) => {
        res.json("da xoa thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }
}

module.exports = new AlbumsController();
