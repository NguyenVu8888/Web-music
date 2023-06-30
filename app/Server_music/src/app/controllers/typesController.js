const TypesModel = require('../../models/types')

class TypeController {
    showTypes(req, res, next) {
        TypesModel.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json('loi server')
            })
    }

    showTypesId(req, res, next) {

    }
    addTypes(req, res, next) {
        var { NameType, Describe, NameSong } = req.body
        TypesModel.create({
            NameType: NameType,
            Describe: Describe,
            NameSong: NameSong
        })
            .then(data => {
                res.json('them the loai thanh cong')
            })
            .catch(err => {
                res.status(500).json('them the loai that bai')
            })
    }
    updateTypes(req, res, next) {
        var id = req.params.id
        var { NewNameType, NewDescribe, NewNameSong } = req.body
        TypesModel.findByIdAndUpdate(id, {
            NameType: NewNameType,
            Describe: NewDescribe,
            NameSong: NewNameSong
        })
            .then(data => {
                res.json('cap nhat the loai thanh cong')
            })
            .catch(err => {
                res.status(500).json('loi server')
            })
    }
    deleteTypes(req, res, next) {
        var id = req.params.id
        TypesModel.deleteOne({ _id: id }).then(data => {
            res.json('xoa thanh cong')
        })
            .catch(err => {
                res.status(500).json('loi server, xoa that bai')
            })
    }
}

module.exports = new TypeController