const UserModel = require("../../models/user");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const pageSize = 10;

class AccountController {
  // [get] /account
  show(req, res, next) {
    UserModel.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("err show in server");
      });
  }
  // ---------
  showId(req, res, next) {
    var id = req.params.id;
    UserModel.find({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("loi server");
      });
  }
  // ----------
  register(req, res, next) {
    var {
      email,
      name,
      username,
      imageUser,
      password,
      playlist,
      favorites,
      history,
      role,
    } = req.body;

    UserModel.findOne({ username: username })
      .then((data) => {
        if (data) {
          res.json("user nay da ton tai");
        } else {
          return UserModel.create({
            name: name,
            email: email,
            username: username,
            password: password,
            imageUser: imageUser,
            playlist: playlist,
            favorites: favorites,
            history: history,
            role: role,
          })
            .then((data) => {
              res.json("tao tk thành công");
            })
            .catch((err) => {
              res.status(500).json("tạo tk thất bại");
            });
        }
      })
      .catch((err) => {
        res.status(500).json("err server");
      });
  }
  // -------
  loginShow(req, res) {
    res.sendFile(path.join(__dirname, "../../../login.html"));
  }
  // ------------
  login(req, res, next) {
    const { username, password } = req.body;

    UserModel.findOne({
      username: username,
      password: password,
    })
      .then((data) => {
        if (data) {
          var token = jwt.sign({ _id: data._id }, "password");
          return res.json({
            message: "thanh cong",
            token: token,
            role: data.role,
            id: data._id,
            name: data.name,
            image: data.imageUser,
          });
        } else {
          res.status(300).json("username hoac password khong dung");
        }
      })
      .catch((err) => {
        res.status(500).json("co loi ben server");
      });
  }
  // ---------------
  private(req, res, next) {
    try {
      var token = req.cookies.token;
      var result = jwt.verify(token, "password");
      if (result) {
        next();
      }
    } catch (err) {
      return res.json("ban can phai login");
    }
    (req, res, next) => {
      res.json("welcome");
    };
  }
  // ---------
  updateId(req, res, next) {
    var id = req.params.id;
    var {
      newPassword,
      newUsername,
      newImageUser,
      newEmail,
      newName,
      newPlaylist,
      newFavorites,
      newHistory,
      newRole,
    } = req.body;
    UserModel.findByIdAndUpdate(id, {
      username: newUsername,
      password: newPassword,
      imageUser: newImageUser,
      email: newEmail,
      name: newName,
      playlist: newPlaylist,
      favorites: newFavorites,
      history: newHistory,
      role: newRole,
    })
      .then((data) => {
        res.json("update thanh cong");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }
  // -----------
  deleteAccount(req, res, next) {
    var id = req.params.id;
    UserModel.deleteOne({
      _id: id,
    })
      .then((data) => {
        res.json("xoa thanh cong");
      })
      .catch((err) => {
        res.status(500).json("xoa that bai");
      });
  }
  // ------------
  pagination(req, res, next) {
    var page = req.query.page;
    if (page) {
      page = parseInt(page);
      if (page <= 1) {
        page = 1;
      }
      var skip = (page - 1) * pageSize;

      UserModel.find({})
        .skip(skip)
        .limit(pageSize)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    } else {
      UserModel.find({})
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
  }
  // search ----
  searchAccount(req, res, next) {
    var q = req.query.q;

    UserModel.find({
      $or: [
        { username: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
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

module.exports = new AccountController();
