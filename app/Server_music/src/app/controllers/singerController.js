const SingersModel = require('../../models/singers')

class SingersController {
    showSinger(req, res, next) {
        SingersModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json('loi server')
            })
    }

    showSingerId(req, res, next) {
        var id = req.params.id
        SingersModel.find({ _id: id })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json('loi server')
            })
    }

    addSinger(req, res, next) {
        var { nameSingers, Birthday, nationality, imageSinger, nameSong } = req.body
        SingersModel.create({
            nameSingers: nameSingers,
            Birthday: Birthday,
            nationality: nationality,
            imageSinger: imageSinger,
            nameSong: nameSong,
        })
            .then(data => {
                res.json('them singer thanh cong')
            })
            .catch(err => {
                res.status(500).json('loi server')
            })
    }

    updateSinger(req, res, next) {
        var id = req.params.id
        var { NewnameSingers, NewBirthday, Newnationality, NewimageSinger, NewnameSong } = req.body

        SingersModel.findByIdAndUpdate(id, {
            nameSingers: NewnameSingers,
            Birthday: NewBirthday,
            nationality: Newnationality,
            imageSinger: NewimageSinger,
            nameSong: NewnameSong
        })
            .then(data => {
                res.json('up date singer thanh cong')
            })
            .catch(err => {
                res.status(500).json('loi server')
            })
    }
    
    deleteSinger(req, res, next) {
        var id = req.params.id
        SingersModel.deleteOne({
            _id: id,
        })
            .then(data => {
                res.json('xoa thanh cong')
            })
            .catch(err => {
                res.status(500).json('xoa that bai')
            })
    }
}


module.exports = new SingersController

