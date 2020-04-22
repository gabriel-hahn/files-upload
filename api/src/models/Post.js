const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String,
  key: String,
  url: String,
  size: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
