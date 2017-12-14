const mongoose = require('mongoose');
const { Schema } = mongoose;
// same of Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  email: String,
  password: String
});



mongoose.model('users', userSchema);
