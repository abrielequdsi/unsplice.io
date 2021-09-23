const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  profile: {
    firtName: String,
    lastName: String,
    instagram: String,
    github: String,
    linkedin: String,
    website: String
  },
  program: [String],
  cratedAt: String
})

module.exports = model('User', userSchema );