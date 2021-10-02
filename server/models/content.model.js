const { model, Schema } = require('mongoose');

const contentSchema = new Schema({
  number: Number,
  title: String,
  desc: String,
  completed: Boolean,
  notionContent: String,
  createdAt: String,
});

module.exports = model('Content', contentSchema);
