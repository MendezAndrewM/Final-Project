import React, { Component } from "react";
import { Row } from "react-materialize";
import "./BusinessHeader.css"

// Props used: 
    // img1
    // img2
    // header
    // phone
    // streetAddress
    // cityState
    // rating

class BusinessHeader extends Component {


    clickEvent() {
        //toggle module?
    }

    render() {
        return <>

    <Row className="paraBox" >
        <div className="bizBox col s10 m6 offset-m2 offset-s1">         
            <Row>                                                       
                <h3 className="col s12">{props.header}</h3>
                  <div className="col s6">
                    <p>{props.phone}<br />
                        <hr />
                        {props.streetAddress},
                        <br />{props.cityState}
                    </p>
                </div>
                <div className="hide-on-med-and-up col s6">
                    <span className="material-icons biz">
                        {props.rating}
                    </span>
                    <p>Price Diff Compared to others</p>
                </div>
            </Row>
        </div>
        <div className="statBoxBox col s10 m4 offset-s1 ">
            <Row className="">
                <div className="hide-on-small-only">
                    <h1 className="material-icons biz">
                        {props.rating}
                    </h1>
                    <p>Price Diff Compared to others</p>
                </div>
                <button className="BizBtn col s8 m7 l5 xl4
                    offset-s2 offset-m0" onClick={clickEvent()}>
                        Submit Review
                </button>
            </Row>
        </div>
    </Row>

</>}}


export default BusinessHeader;