import React, { Component } from "react";
import { Row } from "react-materialize";
import "./Reviews.css";

class Reviews extends Component {

    displayStars = num => {
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

    render() {
        const { reviews } = this.props

        return (<div>
            <Row>
                <div className="reviewBox col s12 m8 offset-m2">

                    <h3>Reviews</h3>
                    {reviews.map(item =>
                        <div className="reviewBox col s12">
                            <Row>
                                <h5 className="col s8">{item.title}</h5>
                                <h6 className="col s4 material-icons right-align rating">{this.displayStars(item.rating)}</h6>
                                <h6 className="col s9" >Service Provided: {item.service}</h6>
                                <h6 className="col s3 right-align" >Price: ${item.price}</h6>
                            </Row>
                            <Row>
                                <p>{item.content}</p>
                            </Row>
                        </div>
                    )}
                </div>
            </Row>
        </div>)
    }
}

export default Reviews;