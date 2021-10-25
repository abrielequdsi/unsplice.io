const { model, Schema } = require('mongoose');

// check what is "desc" and change name if necessary

const programSchema = new Schema({
  name: String,
  programCode: String,
  desc: String,
  moduleCodes: [String],
  createdAt: String,
});

module.exports = model('Program', programSchema);
