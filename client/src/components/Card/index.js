import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";


const Card = (props) => {
    return (
        <Row className="resizer">
            <Col s={10} offset="s1" className="card-box">
                <div>

                    <Row>

                        <Col s={6}>
                            <img className="responsive-img picture" src={props.image} alt={props.name} />
                        </Col>
                        <Col s={6}>
                            <h1 className="prof-name">{props.name}</h1>
                        </Col>

                    </Row>
                    <Row>
                        <Col s={12}>
                            <p><strong>Name:</strong> {props.name}</p>
                            <p><strong>Comments:</strong> {props.comments}</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>


    )
};


export default Card;