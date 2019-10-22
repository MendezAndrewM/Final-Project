import React, { useState, useEffect } from "react";
import { Row, Col } from "react-materialize";
import {useParams} from "react-router-dom";

import Card from "../components/Card";


const properinos = {
    name: {
        firstName: "Jake",
        lastName: "hanes",

        },
    image: "https://gamepedia.cursecdn.com/dota2_gamepedia/d/d6/Lycan_icon.png",
    
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

const displayStars = num => {
    if (num < 0.3) { return "star_half" }  //Sets minimum rating as half_star
    else {
        const whole = Math.floor(num);
        const dec = (num - Math.floor(num));
        let stars = "";
        for (let i = 0; i < whole; i++) { stars += "star " };
        if (dec > 0.3) { stars += "star_half" };
        return stars;
    }
}
const coms = properinos.reviews.map((review)=>
    <li>
        <div>
            <h1>{review.location}</h1>
           <strong><p className="material-icons rating">{displayStars(review.rating)}</p></strong> 
        </div>
        
        <div>
            
            <p><strong>Comments:</strong> {review.comment}</p>
            <p><strong>Date: </strong>{review.date}</p>
        </div>
        <hr />
    </li>
)

const UserPage = (props) => {
    const [useUser, grabUser] = useState(1);
    const {name} = useParams()
    
    
    
    // need to control the userpage through state.
    return(
    
        <div>
            
            <Card
            name={name}
            src={properinos.image}
            alt={properinos.name}
            reviews={coms}
            
            />
            
        </div>
    )
    
}


                

                
            

export default UserPage;