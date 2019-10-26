const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  
  author:{type: String},
  comment:{type: String },
  service:{type: String },
  payment:{type: String},  
  rating:{type: Number}
});


const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;