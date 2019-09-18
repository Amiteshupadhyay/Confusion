var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});

module.export = mongoose.model('User',User);