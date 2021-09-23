const { model, Schema } = require('mongoose');

const programSchema = new Schema({
  name: String,
  desc: String,
  modules: [String],
  createdAt: String
})

module.exports = model('Program', programSchema);