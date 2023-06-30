const express = require('express');
var router = express.Router();
const PlaylistController = require('../app/controllers/playlistController')

router.get('/', PlaylistController.showPlaylist)
router.get('/:id', PlaylistController.showPlaylistId)
router.post('/', PlaylistController.addPlaylist)
router.put('/:id', PlaylistController.updatePlaylist)
router.delete('/:id', PlaylistController.deletePlaylist)



module.exports = router

