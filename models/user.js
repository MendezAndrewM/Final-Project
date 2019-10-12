const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //ID number associated with each user
  id: { type: Number, required: true },
  //Username of user
  name: { type: String, required: true },
  //Profile Picture, stored in url
  imageURL: { type: String, required: true },
  // Comments is stored in an objectid, with the date of the comment as a property of the comment
  comments: { type: Schema.Types.ObjectId, ref: 'Comment' }, 
              date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
