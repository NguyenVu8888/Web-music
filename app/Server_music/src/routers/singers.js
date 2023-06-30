const express = require('express');
var router = express.Router()
const SingersController = require('../app/controllers/singerController')

router.get('/', SingersController.showSinger)
router.get('/:id', SingersController.showSingerId)
router.post('/', SingersController.addSinger)
router.put('/:id', SingersController.updateSinger)
router.delete('/:id', SingersController.deleteSinger)


module.exports = router