const express = require('express');
var router = express.Router();
const RankModel = require('../models/ranks');
const RankController = require('../app/controllers/rankController');

router.get('/', RankController.showRanks)
router.post('/', RankController.addRanks)
router.put('/:id', RankController.updateRanks)
router.delete('/:id', RankController.deleteRanks)



module.exports = router