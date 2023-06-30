const mongoose = require('./db');

const Schema = mongoose.Schema;

const RankSchema = new Schema({
    TopPopular: String,
    TopSinger: String,
    TopLike: String,
    TopListen: String,
    createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date, default:Date.now},

  
}, {
  collection: 'Ranks'
});


const RankModel = mongoose.model('Ranks', RankSchema);

module.exports = RankModel;