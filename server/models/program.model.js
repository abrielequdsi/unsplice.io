const { model, Schema } = require('mongoose');

const programSchema = new Schema({
  name: String,
  programCode: String,
  desc: String,
  moduleCodes: [String],
  createdAt: String
})

module.exports = model('Program', programSchema);