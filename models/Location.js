const mongoose = require('mongoose');
require('mongoose-type-url');
require('mongoose-type-phone');

/*
This schema is for a restaurant's specific location. If any field is defined
here, on the specific page for the location it will override (or sit
alongside) the corporate defined value.
*/
const LocationSchema = mongoose.Schema(
  {
    website: mongoose.SchemaTypes.Url,
    address: String,
    phone: mongoose.SchemaTypes.Phone,
    social: {
      type: Map,
      of: String,
    },
    hours: Object,
    menu: [
      {
        item: {
          //name of the item, like "Fajita Diablo" or "Spaghetti"
          type: String,
          trim: true,
          required: true,
        },
        category: {
          //category of the item, like "appetizer" or "entrée"
          type: String,
          trim: true,
          lowercase: true,
        },
        menu: {
          //what menu is this on, like "breakfast" or "dessert"
          type: String,
          trim: true,
          lowercase: true,
        },
        price: {
          //how much does it cost?
          type: Number,
          min: 0,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('location', LocationSchema);
