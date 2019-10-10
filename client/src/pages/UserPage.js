import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";


const properinos = {
    name: "Jake Hanes",
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj2rvSlt5LlAhVCqZ4KHfUvCSsQjRx6BAgBEAQ&url=https%3A%2F%2Fvaaju.com%2Faustriaeng%2Fhelp-theres-a-face-in-my-icon%2F&psig=AOvVaw2xOhWUtxemyJ3WnLYJaSmf&ust=1570822315896561",
    comments: "hello this is a comment",

};

class UserPage extends Component {
    // need to control the userpage through state.
render() {

    return (
        <div>
            
            <Card
            name={properinos.name}
            src={properinos.image}
            alt={properinos.name}
            comments={properinos.comments}
            />
            
        </div>
    )
    
    
}
    
    
}


                

                
            

export default UserPage;