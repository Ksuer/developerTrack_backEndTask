const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  
  last_name: {
    type: String,
    required: true
  },
  
  major: {
    type: String,
    required: true
  },
  
  university: {
    type: String,
    required: true
  },
  
  file: {
    type: Object
  }

});

//creating module in mongo, then this model can be called in other files
module.exports = User = mongoose.model('user', UserSchema);