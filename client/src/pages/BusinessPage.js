import React, { Component } from "react";
import { Row } from "react-materialize";

const rating = 3.5 //Only Here as placeholder. Rating will be pulled from API 

class BusinessPage extends Component {
    state = {
        // manage state here for components that do not exist outside this page
    }

    // Event handlers
    

    // Functions to add comments / ratings / reviews
    // via API calls 

    displayStars = (num) => {
        const whole = Math.floor(num);
        const dec = (num - Math.floor(num)); 
        const stars = ""
        for (let i=0; i<whole; i++) { stars += "star " }
        if (dec > 0.3) { star += "star_half" }
        return stars;
    }



    render() {
        return (
            <div className="wrapper">

                <Row>
                    <div className="bizBox col s10 m5 offset-m2 offset-s1">
                        <h3>Name of Business here</h3>
                        <p>(602)555-5555</p>
                        <p>1234 Fake Blvd, <br />Nowhere, AZ 85001 </p>
                    </div>
                    <div className="statBoxBox col s10 m5 offset-m2 offset-s1">
                        <span className="material-icons">{this.displayStars(rating)}</span>
                    </div>
                </Row>

            </div>
        )
    }
    

}

export default BusinessPage;