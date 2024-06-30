// models/Account.js
const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  accountName: String,
  type: String,
  description: String
});

module.exports = mongoose.model('Account', AccountSchema);
