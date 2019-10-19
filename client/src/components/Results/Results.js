import React from "react";
import { Row } from "react-materialize";
import "./Results.css";


const percentDiff = (x, y) => ((y - x) / x) * 100;

const Result = (props) => {
    let comp = percentDiff(Number(props.priceCompare), Number(props.average));
    return (
        <Row className="ResultBox">
                <img className="col s12 m4 responsive-img" src={props.image} alt={props.name} />
                <div className="Info col s12 m8">
                    <Row>
                        <h5 className="col s12 m7">{props.name}</h5>
                        <div className="col s12 m5">
                            <span className="rating">{props.avgRating}</span>
                            <br></br>
                            { comp > 0
                                ? <span className="priceRank">{comp}% more than average</span>
                                : <span className="priceRank">{comp.toString().replace("-","")}% less than average</span>
                            }
                        </div>
                    </Row>
                    <Row>
                        <div className="Contact col s12 m7">
                            <span>{props.phone}</span>
                            <br></br>
                            <a href={props.url} >{props.url}</a>
                            <br></br>
                            <a target="none" href={props.map}>{props.address}</a>
                        </div>
                        <div className="col s10 m5">
                            <button className="col s10 offset-s2 offset-m1 center-align">Submit Review</button>
                        </div>
                    </Row>
                    <Row>
                        <div className="hide-on-med-and-down">
                            {props.description}
                        </div>
                    </Row>
                </div>
        </Row>
    )
}

export default Result;