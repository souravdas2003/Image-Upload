const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
