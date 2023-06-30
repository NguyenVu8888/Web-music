const express = require('express');
var router = express.Router();
const MvController = require('../app/controllers/mvController')


router.get('/', MvController.showMv)
router.get('/:id', MvController.showMvId)
router.post('/', MvController.addMv)
router.put('/:id', MvController.updateMv)
router.delete('/:id', MvController.deleteMv)








module.exports = router