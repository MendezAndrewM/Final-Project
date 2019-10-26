import React from "react";
import { Row } from "react-materialize";
import "./style.css"
// import Row from "react-materialize/lib/Row";


const Foot = () => {

    return (
        <div id="Footer">
            <Row>
                <div className="linkBox col s5 m4 offset-s1 offset-m2">
                    <ul>
                        <li><a>Andrew</a></li>
                        <li><a>Jake</a></li>
                        <li><a>Joey</a></li>
                    </ul>
                </div>
                <div className="linkBox col s5 m4">
                    <ul>
                        <li><a>Andrew Portfolio</a></li>
                        <li><a>Jake Portfolio</a></li>
                        <li><a>Joey Portfolio</a></li>
                    </ul>

                </div>
            </Row>
            <span>© 2019 Working Title</span>
        </div>
    )
};


export default Foot;