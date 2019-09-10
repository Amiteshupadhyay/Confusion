const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromoSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  image: {
    type: String,
    require: true
  },
  label: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  featured: {
    type: Boolean,
    default: false
  }
});

var Promo = mongoose.model('promo', PromoSchema);
module.exports = Promo;
