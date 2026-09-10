const mongoose = require("mongoose");

//Criando (Schema) Users
const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
    required: true
  }
});

//Criando UserModel
const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;
