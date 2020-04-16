const mongoose = require('mongoose');
require('mongoose-type-url');
require('mongoose-type-phone');

/*
This schema is for a restaurant as a corporate entity. Even if there's only
one location and all business is conducted there, it'll need a record here.
The related LocationSchema will contain information about individual
locations.
*/
const RestaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: mongoose.SchemaTypes.Url,
    address: String,
    phone: mongoose.SchemaTypes.Phone,
    social: {
      type: Map,
      of: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('restaurant', RestaurantSchema);
