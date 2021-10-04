const { model, Schema } = require('mongoose');

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  institution: string;
  role: string;
  picture: string;
  socialLinks: {
    instagram: string;
    github: string;
    linkedin: string;
    website: string;
  };
  programCodes: string[];
  createdAt: string;
}

const userSchema: User = new Schema({
  email: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  institution: { type: String },
  role: { type: String },
  picture: { type: String },
  socialLinks: {
    instagram: String,
    github: String,
    linkedin: String,
    website: String,
  },
  programCodes: [String],
  createdAt: String,
});

module.exports = model('User', userSchema);
