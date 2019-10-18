import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";


const Card = (props) => {
    return (
        <Row className="resizer">
            <Col s={10} offset="s1" className="card-box">
                <div>
                    <Row>
    
                    <Row>
                        <h1 className="prof-name">{props.name}</h1>
                    </Row>
                        <Col s={6}>
                            <img className="responsive-img picture" src={props.src} alt={props.name}/>
                        </Col>
                        <Col s={6}>
                            
                        </Col>

                    </Row>
                    <Row>
                        <Col classname="review-box" s={12}>
                            
                            <p><strong>Reviews History:</strong></p>
                            <ul>
                                <li className="review-list">{props.reviews}</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>


    )
};


export default Card;