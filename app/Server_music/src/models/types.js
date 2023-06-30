const mongoose = require('./db');



const Schema = mongoose.Schema;

const TypesSchema = new Schema({
    NameType: String,
    Describe: String,
    NameSong: String,
    createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date, default:Date.now},
  
}, {
  collection: 'Types'
});


const TypesModel = mongoose.model('Types', TypesSchema);

module.exports = TypesModel;