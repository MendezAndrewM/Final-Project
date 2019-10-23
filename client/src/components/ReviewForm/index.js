import React, { Component } from "react";
import { Row, Col } from "react-materialize";
// import Reviews from "./Reviews/Reviews.js";
import "./style.css"

class ReviewForm extends Component {
  render() {
    return (
      <Row>
        <Col s={12}>
          <Row>
            <Col s={6} className="input-field">
              <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
              <label for="textarea1">Comment</label>
            </Col>
          </Row>
          <Row>
            <Col s={6} className="input-field">
              <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
              <label for="textarea2">Service Provided</label>
            </Col>
          </Row>
          <Row>
            <Col s={6} className="input-field">
              <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
              <label for="textarea2">What did you pay</label>
            </Col>
          </Row>
          <Row className="wrapper">
            <Col s={1}>
              
              <div>
                <label>
                  <input className="with-gap" value="0" name="group3" type="radio"/>
                  <span>0</span>
                </label>
              </div>
            </Col>  
            <Col s={1}>
              <div>
                <label>
                  <input className="with-gap" value="1" name="group3" type="radio"/>
                  <span>1</span>
                </label>
              </div>
            </Col>
            <Col s={1}>
              <div>
                <label>
                  <input className="with-gap" value="2" name="group3" type="radio"/>
                  <span>2</span>
                </label>
              </div>
            </Col>
            <Col s={1}>
              <div>
                <label>
                  <input className="with-gap" value="3" name="group3" type="radio"/>
                  <span>3</span>
                </label>
              </div>
            </Col>
            <Col s={1}>

              <div>
                <label>
                  <input className="with-gap" value="4" name="group3" type="radio"/>
                  <span>4</span>
                </label>
              </div>
            </Col>
            <Col s={1}>

              <div>
                <label>
                  <input className="with-gap" value="5" name="group3" type="radio"/>
                  <span>5</span>
                </label>
              </div>
            </Col>
            
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ReviewForm;
