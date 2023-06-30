const RankModel = require('../../models/ranks');

class RankController {
    showRanks(req, res, next) {
        RankModel.find({})
        .then(data=>{
            res.json(data);
        })
        .catch(err => {
            res.status(500).json('loi server')
        })
    }

    addRanks(req, res, next) {
        var{TopPopular, TopSinger, TopLike, TopListen} = req.body
        RankModel.create({
            TopPopular: TopPopular,
            TopSinger: TopSinger,
            TopLike: TopLike,
            TopListen: TopListen
        })
        .then(data => {
            res.json('them rank thanh cong')
        })
        .catch(err =>{
            res.status(500).json('loi server, them rank that bai')
        })
    }

    updateRanks(req, res, next) {
        var id = req.params.id
        var{NewTopPopular, NewTopSinger, NewTopLike, NewTopListen} = req.body
            RankModel.findByIdAndUpdate(id,{
                TopPopular: NewTopPopular,
                TopSinger: NewTopSinger,
                TopLike: NewTopLike,
                TopListen: NewTopListen
            })
            .then(data => {
                res.json('cap nhat rank thanh cong')
            })
            .catch(err => {
                res.status(500).json('cap nhat rank that bai')
            })
    }

    deleteRanks(req, res, next) {
        var id = req.params.id
        RankModel.deleteOne({_id:id})
        .then(data => {
            res.json('xoa thanh cong')
        })
        .catch(err => {
            res.status(500).json('xoa that bai')
        })
    }
}

module.exports = new RankController;