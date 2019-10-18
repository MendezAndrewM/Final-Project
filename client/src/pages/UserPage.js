import React, { Component } from "react";
import { Row, Col } from "react-materialize";

import Card from "../components/Card";


const properinos = {
    name: "Jake Hanes",
    image: "https://dw8stlw9qt0iz.cloudfront.net/CfRlDncfJl_fzKm0Qi9BB5ySOhQ=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/8d6472ac-5757-497c-dabf-d497522d21d2.png",
    
    reviews: [
        {
            location: "Wal-Mart",
            rating: 5,
            comment: "omg this place is great",
            date: "05-23-2019"
        },
        {
            location: "Sam's",
            rating: 0,
            comment: "wtf they ripped me off",
            date: "01-01-2018"
        },
        {
            location: "Jiffy Lube",
            rating: 5,
            comment: "wldkmwadmwapfpamfpasmcpaomfpam",
            date: "05-08-2019"
        }
    ]

};
const coms = properinos.reviews.map((review)=>
    <li>
        <div>
            <h1>{review.location}</h1>
           <strong><p>{review.rating}</p></strong> 
        </div>
        
        <div>
            
            <p><strong>Comments:</strong> {review.comment}</p>
            <p><strong>Date: </strong>{review.date}</p>
        </div>
        <hr />
    </li>
)

class UserPage extends Component {

    // need to control the userpage through state.
render() {

    return (
        <div>
            
            <Card
            name={properinos.name}
            src={properinos.image}
            alt={properinos.name}
            reviews={coms}
            />
            
        </div>
    )
    
    
}
    
    
}


                

                
            

export default UserPage;