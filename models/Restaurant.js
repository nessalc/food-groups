const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    website: String,
    phone: String,
    date: {
      type: Date,
      default: Date.now
    },
    social: {
      type: Map,
      of: String
    },
    hours: Object
  },
  { timestamps: true }
);

module.exports = mongoose.model('restaurant', RestaurantSchema);
