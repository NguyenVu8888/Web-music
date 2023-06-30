const express = require("express");
const SongsModel = require("../../models/songs");
const ImageModel = require("../../models/image");

class SongController {
  showSong(req, res, next) {
    SongsModel.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  showSongId(req, res, next) {
    var id = req.params.id;
    SongsModel.findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  addSong(req, res, next) {
    var {
      nameSong,
      singer,
      imageSong,
      sourceSong,
      lyrics,
      listen,
      production,
      createdAt,
      updatedAt,
    } = req.body;
    if (req.file) {
      sourceSong = req.file.path;
    }

    SongsModel.create({
      nameSong: nameSong,
      singer: singer,
      imageSong: imageSong,
      sourceSong: sourceSong,
      lyrics: lyrics,
      listen: listen,
      production: production,
      createdAt: createdAt,
      updatedAt: updatedAt,
    })
      .then((data) => {
        res.json("them thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  updateSong(req, res, next) {
    var id = req.params.id;
    var {
      NewnameSong,
      Newsinger,
      NewimageSong,
      NewsourceSong,
      Newlyrics,
      Newlisten,
      Newproduction,
    } = req.body;

    SongsModel.findByIdAndUpdate(id, {
      nameSong: NewnameSong,
      singer: Newsinger,
      imageSong: NewimageSong,
      sourceSong: NewsourceSong,
      lyrics: Newlyrics,
      listen: Newlisten,
      production: Newproduction,
    })
      .then((data) => {
        res.json("chinh sua thanh cong");
      })
      .catch((err) => {
        res.status(500).json("chinh sua that bai");
      });
  }

  deleteSong(req, res, next) {
    var id = req.params.id;
    SongsModel.findByIdAndDelete(id)
      .then((data) => {
        res.json("xoa thanh cong");
      })
      .catch((err) => {
        res.status(500).json("xoa that bai");
      });
  }

  // search ----
  searchSong(req, res, next) {
    var q = req.query.q;

    SongsModel.find({
      $or: [
        { nameSong: { $regex: q, $options: "i" } },
        { singer: { $regex: q, $options: "i" } },
      ],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("Lỗi server");
      });
  }
}

module.exports = new SongController();
