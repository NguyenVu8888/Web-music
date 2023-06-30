const MvsModel = require("../../models/mv");

class MvController {
  showMv(req, res, next) {
    MvsModel.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  showMvId(req, res, next) {
    var id = req.params.id;
    MvsModel.find({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("loi server");
      });
  }

  addMv(req, res, next) {
    var {
      nameMv,
      author,
      imageMv,
      videoMv,
      timeMv,
      production,
      likeMv,
      shareMv,
      createdAt,
      updatedAt,
    } = req.body;
    MvsModel.create({
      nameMv: nameMv,
      author: author,
      imageMv: imageMv,
      videoMv: videoMv,
      timeMv: timeMv,
      production: production,
      likeMv: likeMv,
      shareMv: shareMv,
      createdAt: createdAt,
      updatedAt: updatedAt,
    })
      .then((data) => {
        res.json("them mv thanh cong");
      })
      .catch((err) => {
        res.status.json("them mv that bai");
      });
  }

  updateMv(req, res, next) {
    var id = req.params.id;
    var {
      NewNameMv,
      NewAuthor,
      NewImageMv,
      NewVideoMv,
      NewTimeMv,
      NewProductionMv,
      NewLikeMv,
      NewShareMv,
    } = req.body;
    MvsModel.findByIdAndUpdate(id, {
      nameMv: NewNameMv,
      author: NewAuthor,
      imageMv: NewImageMv,
      videoMv: NewVideoMv,
      timeMv: NewTimeMv,
      production: NewProductionMv,
      likeMv: NewLikeMv,
      shareMv: NewShareMv,
    })
      .then((data) => {
        res.json("update thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }

  deleteMv(req, res, next) {
    var id = req.params.id;
    MvsModel.deleteOne({
      _id: id,
    })
      .then((data) => {
        res.json("xoa thanh cong");
      })
      .catch((err) => {
        res.status(500).json("xoa that bai");
      });
  }
}

module.exports = new MvController();
