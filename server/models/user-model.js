const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: { type: String, required: true },
  district: String,
  state: String,
  resetPasswordToken: String,
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

// Compare passwords
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate JWT token
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
