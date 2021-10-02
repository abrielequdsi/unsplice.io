const { model, Schema } = require('mongoose');
const contentSchema = require('./content.model');

const moduleSchema = new Schema({
  name: String,
  moduleCode: String,
  desc: String,
  progress: Number,
  contents: [contentSchema],
  createdAt: String,
});

module.exports = model('Module', moduleSchema);
