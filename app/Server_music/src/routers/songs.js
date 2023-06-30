const express = require("express");
var router = express.Router();
const SongController = require("../app/controllers/songsController");
const upload = require("../middleware/upload");

router.get("/", SongController.showSong);

router.post("/", upload.single("sourceSong"), SongController.addSong);

router.get("/search", SongController.searchSong);

router.get("/:id", SongController.showSongId);

router.put("/:id", SongController.updateSong);

router.delete("/:id", SongController.deleteSong);

module.exports = router;
