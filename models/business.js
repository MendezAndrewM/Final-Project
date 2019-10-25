const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let imgPath = 'placeholder' <- do we need this?

const businessSchema = new Schema({
  //ID number associated with each business, for multiple locations of one chain
  _id: Schema.Types.ObjectId,
  // Name of business
  name: { type: String, required: true },
  // Image of business, stored in a string
  imageURL: { type: String, required: true },
  // Average user rating out of 5
  avgRating: {type: Number},
  //Average prices for similar services at competitors
   // priceCompare: todo
  
  // Phone number in a (###) - ### - #### format
  phone: { type: String, required: true },
  // Company website
  url: String,
  // Address of business
  address: {
    full: String,
    street: String,
    citystate: String,
    zipcode: String
  }, 
  // Location of business on a map, stored in a link for clickable link
  map: { type: String, required: true },
  // Description of business
  description: { type: String, required: true },
  // Comments associated with specfic business
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  
  // date: { type: Date, default: Date.now }
});

const reviewSchema = new Schema({
  location: [{ type: Schema.Types.ObjectId, ref: 'Business' }],
  author:{type: String},
  comment:{type: String, required: true},
  service:{type: String, required: true},
  payment:{type: String, required: true},  
  rating:{type: Number, required: true}
})

const Review = mongoose.model("Review", reviewSchema);
const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
module.exports = Review;
