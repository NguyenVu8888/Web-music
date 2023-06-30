
const express = require('express');
var router = express.Router();
const ImageModel = require('../models/image')
const AlbumModel = require('../models/albums');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res, next) => {
  ImageModel.find({})
  .then(data=>{
    res.json(data)
  })
  .catch(err => {
    res.status(500).json('loi server')
  })
})
router.get('/:id', (req, res, next) => {
  var id = req.params.id
  ImageModel.find({_id:id})
  .then(data => {
      res.json(data)
  })
  .catch(err => {
      res.json('loi server')
  })
})
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const { originalname, String } = req.file;
  
      const image = new ImageModel({
        name: originalname,
        data: String,
      });
  
      const savedImage = await image.save();
      const album = await AlbumModel.findById(req.body.albumId);
      album.imageId = savedImage._id;
      await album.save();
      res.status(200).json({ success: true, image: savedImage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Server error' });
    }
  });


  module.exports = router