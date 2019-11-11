const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  _id: Schema.Types.ObjectId,
  author:{type: String},
  businessId: String,
  comment:{type: String },
  service:{type: String },
  payment:{type: String},  
  rating:{type: Number}
});


const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;