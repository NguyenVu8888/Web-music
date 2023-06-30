const express = require('express');
var router = express.Router();
const AlbumsController = require('../app/controllers/albumController')


router.get('/', AlbumsController.showAlbums);
router.get('/:id', AlbumsController.showAlbumsId)
router.post('/', AlbumsController.addAlbums)
router.put('/:id', AlbumsController.updateAlbums)
router.delete('/:id', AlbumsController.deleteAlbums)




module.exports = router