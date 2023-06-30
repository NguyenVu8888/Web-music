const express = require('express');
var router = express.Router();
const TypesController = require('../app/controllers/typesController')

router.get('/', TypesController.showTypes)
router.post('/', TypesController.addTypes)
router.put('/:id', TypesController.updateTypes)
router.delete('/', TypesController.deleteTypes)

module.exports = router