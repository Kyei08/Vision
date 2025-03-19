const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // NOTE: Hash passwords in production!
  name: { type: String, default: 'New User' },
  // Add more fields as needed (profile picture, followers, etc.)
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);