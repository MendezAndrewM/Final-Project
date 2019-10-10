import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";


const Card = (props) => {
    return (
        <Row>
            <Col s={8} offset="s2" className="card-box">
                <div>

                    <Row>

                        <Col s={6}>
                            <img className="responsive-img picture" src={props.image} alt={props.name} />
                        </Col>
                        <Col s={6}>
                            <h1 className="prof-name" alt={props.name}></h1>
                        </Col>

                    </Row>
                    <Row>
                        <Col s={12}>
                            <p>Name:</p> {props.name}
                            <p>Comments:</p> {props.comments}
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>


    )
};


export default Card;