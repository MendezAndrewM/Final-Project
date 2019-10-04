import React from "react";
import {Row, Col, CardPanel} from "react-materialize";
import "./style.css";


const Card = (props) => {
    return(
        <Row>
        <Col m={6} s={12}>
        <CardPanel className="teal">
        <span className="white-text">
        For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
        </span>
        </CardPanel>
        </Col>
        </Row>
    )
};

export default Card;