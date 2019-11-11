import React, { Component } from "react";
import { Row } from "react-materialize";
import "./Reviews.css";
import displayStars from "../../utils/utils"

class Reviews extends Component {

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
                                <h6 className="col s4 material-icons right-align rating">{displayStars(item.rating)}</h6>
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