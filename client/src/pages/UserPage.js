import React, { Component } from "react";
import { Row, Col } from "react-materialize";

import Card from "../components/Card";


const properinos = {
    name: "Jake Hanes",
    image: "https://www.buffed.de/screenshots/430x/2019/09/Samwise-Icon-pc-games.png",
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