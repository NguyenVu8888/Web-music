const mongoose = require('./db');


const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    name: String,
    data: String,
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now},
  }, {
    collection: 'Images'
  });
  
  const ImageModel = mongoose.model('ImageModel', ImageSchema);
  
  module.exports = ImageModel;



