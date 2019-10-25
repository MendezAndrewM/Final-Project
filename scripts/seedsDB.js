const mongoose = require("mongoose");
const db = require("../models/");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/finalProject"
);

// start of usershit
// const userSeed = [
//   {
//     id: 1,
//     name: "Lycan",
//     imageURL: "https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/f/fe/Cosmetic_icon_Mark_of_the_Blood_Moon.png/200px-Cosmetic_icon_Mark_of_the_Blood_Moon.png?version=2bce134eb0d67be1a26bbb15d3b1c826",
//     // reviews: [
//     //   {
//     //     location: "secret shop",
//     //     rating: 5,
//     //     comment: "RAWR",
//     //     date: "01-05-1993"

//     //   },
//     //   {
//     //     location: "secret shop",
//     //     rating: 5,
//     //     comment: "RAWR",
//     //     date: "01-05-1993"
//     //   },
//     //   {
//     //     location: "secret shop",
//     //     rating: 5,
//     //     comment: "RAWR",
//     //     date: "01-05-1993"
//     //   }
//     // ]
//   },
//   {
//     id: 2,
//     name: "Lina",
//     imageURL: "http://1.bp.blogspot.com/-VWNJJHCbj5o/UC8CasU4_xI/AAAAAAAAAfw/w1fpppIGKho/s400/dota2_lina.jpg",
//     // reviews: [
//     //   {
//     //     location: "Secret shop",
//     //     rating: 4,
//     //     comment: "hot",
//     //     date: "09-19-2019"
//     //   },
//     //   {
//     //     location: "secret shop",
//     //     rating: 4,
//     //     comment: "hot",
//     //     date: "09-19-2019"
//     //   },
//     //   {
//     //     location: "secret shop",
//     //     rating: 4,
//     //     comment: "hot",
//     //     date: "09-19-2019"
//     //   },
//     // ]
//   },
//   {
//     id: 3,
//     name: "Pudge",
//     imageURL: "https://steamcdn-a.akamaihd.net/apps/570/icons/econ/items/pudge/arcana/pudge_arcana_back_large.1d6857a5b278ba1a3e5381b76344fcf206052983.png",
//     // reviews: [
//     //   {
//     //     location: "secret shop",
//     //     rating: 4,
//     //     comment: "chop chop",
//     //     date: "09-30-2019"
//     //   },
//     //   {
//     //     location: "secret shop",
//     //     rating: 4,
//     //     comment: "chop chop",
//     //     date: "09-30-2019"
//     //   },
//     //   {
//     //     location: "secret shop",
//     //     rating: 4,
//     //     comment: "chop chop",
//     //     date: "09-30-2019"
//     //   },
//     // ]
//   },
// ];

// db.userSchema
//   .remove({})
//   .then(() => db.userSchema.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// end of user shit

// start of business shit

const businessSeed = [
  {
    id: 1,
    name: "Wal-mart",
    imageURL: "https://www.google.com/maps/uv?hl=en&pb=!1s0x872baf2236b8cc33%3A0x10495f383901c67f!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNXn9EDKEodpOAgMaWduBG5fHh167zwmzOgq2eP%3Dw350-h236-n-k-no!5swalmart%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipNXn9EDKEodpOAgMaWduBG5fHh167zwmzOgq2eP",
    avgRating: 3,
    phone: "480-892-3814",
    url: "https://www.walmart.com/store/5428/mesa-az/details",
    address: {
      full: "1710 S Greenfield Rd Mesa, Az 85206",
      street: "1710 S Greenfield Rd",
      cityState: "Mesa, Az",
      zipcode:"85206"
      }, 
    map: "https://www.google.com/search?rlz=1C1OKWM_enUS847US847&sxsrf=ACYBGNQoiMhukeab2IZ_5ggF_t0N8RtaxQ:1570907796599&q=walmart&npsic=0&rflfq=1&rlha=0&rllag=33385920,-111750975,4850&tbm=lcl&ved=2ahUKEwiNsMPJt5flAhWbJzQIHf31DKQQtgN6BAgVEAQ&tbs=lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4&rldoc=1#rlfi=hd:;si:,33.3816365585445,-111.73853038741885;mv:[[33.40163196651206,-111.68677336856558],[33.36343204096816,-111.77277492737699],null,[33.38253410151596,-111.72977414797128],14];tbs:lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4",
    description: "Local wal-mart",
    reviews: db.Review
  },
  {
    id: 2,
    name: "Ase Auto Tech",
    imageURL: "https://lh5.googleusercontent.com/p/AF1QipPxvyEnTtRPV_sKYRp6DbIT01xTvPWE8rdXBUYJ=w121-h121-n-k-no",
    avgRating: 4,
    phone: "(480) 984-5259",
    url: "na",
    address: {
      full: "10001 E Main St Mesa, AZ 85207",
      street: "10001 E Main St",
      cityState: "Mesa, AZ",
      zipcode:"85207"
    }, 
    map: "https://www.google.com/search?rlz=1C1OKWM_enUS847US847&tbm=lcl&sxsrf=ACYBGNSTNiAfKwRETiyJJlG18Mw7jIXC1g%3A1570907846147&ei=xiaiXdfQCNH19AOImYagBA&q=sam+auto&oq=sam+auto&gs_l=psy-ab.3..0l10.2053.4236.0.5135.10.10.0.0.0.0.127.865.7j2.9.0....0...1c.1.64.psy-ab..1.9.864...35i39k1j0i131k1j0i10i67k1j0i67k1j0i131i67k1.0.Iq9fKAdGOTQ#rlfi=hd:;si:;mv:[[33.41586352042389,-111.6121588713022],[33.41347690781688,-111.61753396872791],null,[33.41467022231876,-111.61484642001506],18]",
    description: "blah blah blah",
    reviews: db.Review
  },
  {
    id: 3,
    name: "Mesa Auto Works",
    imageURL: "https://www.google.com/maps/uv?hl=en&pb=!1s0x872ba586da5c9699:0xffc1f4eb6161b00f!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipMoY94ok94PdgejSU7xHCHxlpbNQvEq0S-MQgTS%3Dw175-h117-n-k-no!5sauto+repair+near+me+-+Google+Search&imagekey=!1e10!2sAF1QipMoY94ok94PdgejSU7xHCHxlpbNQvEq0S-MQgTS",
    avgRating: 4,
    phone: "(480) 969-1954",
    url: "https://mesaautoworks.com/",
    address: {
      full: "1636 N Banning Mesa, Az 85205",
      street: "1636 N Banning",
      cityState: "Mesa, Az",
      zipcode:"85205"
    },
    map: "https://www.google.com/search?rlz=1C1OKWM_enUS847US847&tbm=lcl&sxsrf=ACYBGNRQb-s4mk9MNM6OWlvgMys6SmsFQA%3A1570908574605&ei=nimiXcHJJMa70PEPkJGMuA4&q=auto+repair+near+me&oq=auto+repa&gs_l=psy-ab.3.1.0l10.4296.6218.0.7736.5.5.0.0.0.0.146.550.1j4.5.0....0...1c.1.64.psy-ab..0.5.548...0i67k1j0i10k1j0i20i263k1.0.1CG8OU7Edk8#rlfi=hd:;si:18429280441965064207;mv:[[33.44964122071061,-111.71359986245767],[33.440098091297884,-111.73471406382993],null,[33.44486978723741,-111.7241569631438],16]",
    description: "its in mesa",
    reviews: db.Review,
      
    
     
  },
];

db.Business
  .remove({})
  .then(() => db.Business.collection.insertMany(businessSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// business stuff


// review stuff

const reviewSeed = [
  {
    location:"Wal-mart",
    author: "jake",
    comment: "this place takes awhile",
    service: "oil change",
    payment: "$40.00",
    rating: 3
  },
  {
    location:"Wal-mart",
    author: "tom",
    comment: "this place rocks",
    service: "tires",
    payment: "$140.00",
    rating: 5
  },
  {
    location:"Wal-mart",
    author: "andrew",
    comment: "this place takes awhile",
    service: "oil change",
    payment: "$45.00",
    rating: 2
  },
  {
    location:"Sam's Auto",
    author: "Jake",
    comment: "this place is the best",
    service: "oil change",
    payment: "$30.00",
    rating: 5
  },
  {
    location:"Sam's Auto",
    author: "jake",
    comment: "this place always does a great job",
    service: "engine swap",
    payment: "$2500.00",
    rating: 5
  },
  {
    location:"Mesa Auto Works",
    author: "jake",
    comment: "i feel like i got shafted",
    service: "engine swap",
    payment: "$5600.00",
    rating: 2
  },

];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });