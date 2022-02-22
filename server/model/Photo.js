const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  description: String,
  photo: {
    type: Buffer
  }
});

PhotoSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.photo;
  return result;
};

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;