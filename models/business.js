const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let imgPath = 'placeholder' <- do we need this?

const businessSchema = new Schema({
  //ID number associated with each business, for multiple locations of one chain
  id: { type: Number, required: true },
  // Name of business
  name: { type: String, required: true },
  // Image of business, stored in a string
  imageURL: { type: String, required: true },
  // Average user rating out of 5
  // avgRating: 
  //Average prices for similar services at competitors
   // priceCompare: 
  average: 
  // Phone number in a (###) - ### - #### format
  phone: { type: String, required: true },
  // Company website
  url: String,
  // Address of business
  address: { type: String, required: true }, 
  // Location of business on a map, stored in a link for clickable link
  map: { type: String, required: true },
  // Description of business
  description: { type: String, required: true },
  // Comments associated with specfic business
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  // date: { type: Date, default: Date.now }
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
