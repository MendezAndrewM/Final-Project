const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const businessSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  images: [{src: String}],
  rating: Number,
  phone: String,
  url: String,
  description: String,
  googleMaps: String,
  address: {
    full: String,
    street: String,
    citystate: String,
    zipcode: String
  },
  servicesProvided: [{service: String, price: String}],
  // reviews: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Review"
  //   }
  // ]

})


const Business = mongoose.model("Business", businessSchema);
module.exports = Business;






///////////||||||||||||||||||||||||||||||||\\\\\\\\\\\
//////                                           \\\\\\
////                  Old Version                   \\\\
//                                                     \\

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// // let imgPath = 'placeholder' <- do we need this?


// const businessSchema = new Schema({
//   //ID number associated with each business, for multiple locations of one chain
//   _id: Schema.Types.ObjectId,
//   // Name of business
//   name: { type: String },
//   // Image of business, stored in a string
//   imageURL: { type: String},
//   // Average user rating out of 5
//   avgRating: {type: Number},
//   //Average prices for similar services at competitors
//    // priceCompare: todo
  
//   // Phone number in a (###) - ### - #### format
//   phone: { type: String },
//   // Company website
//   url: String,
//   // Address of business
//   address: {
//     full: String,
//     street: String,
//     citystate: String,
//     zipcode: String
//   }, 
//   // Location of business on a map, stored in a link for clickable link
//   map: { type: String },
//   // Description of business
//   description: { type: String },
//   // Comments associated with specfic business
//   reviews: [
//     {
      
//       type: Schema.Types.ObjectId,
     
//       ref: "Review"
//     }
//   ]
  
  
// });



// const Business = mongoose.model("Business", businessSchema);

// module.exports = Business;

