import React, { Component } from "react";
import { Row, Col } from "react-materialize";

import Card from "../components/Card";


const properinos = {
    name: "Jake Hanes",
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiT-Ou-nZPlAhUMt54KHcabD_8QjRx6BAgBEAQ&url=https%3A%2F%2Fsolarsystem.nasa.gov%2Fsolar-system%2Fsun%2Foverview%2F&psig=AOvVaw3Rhxp5xlfgY1ydTewAitjy&ust=1570849753573127",
    comments: ["omg this place is great", "wtf they ripped me off", "they dont work on teslas"],

};

class UserPage extends Component {
    // need to control the userpage through state.
render() {

    return (
        <div>
            
            <Card
            name={properinos.name}
            image={properinos.image}
            alt={properinos.name}
            comments={properinos.comments}
            />
            
        </div>
    )
    
    
}
    
    
}


                

                
            

export default UserPage;