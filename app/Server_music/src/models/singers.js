const mongoose = require('./db');

const Schema = mongoose.Schema;

const SingerSchema = new Schema({
  nameSingers: String,
  Birthday: Date,
  nationality: String,
  imageSinger: String,
  nameSong: String,
  createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date, default:Date.now},

  
}, {
  collection: 'Singers'
});


const SingersModel = mongoose.model('Singers', SingerSchema);

module.exports = SingersModel;