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
                        <li><a>Shizzle</a></li>
                        <li><a>Nizzle</a></li>
                        <li><a>Badizzle</a></li>
                    </ul>
                </div>
                <div className="linkBox col s5 m4">
                    <ul>
                        <li><a>My Portfolio</a></li>
                        <li><a>His Portfolio</a></li>
                        <li><a>Your Portfolio</a></li>
                    </ul>

                </div>
            </Row>
            <span>© 2019 Working Title</span>
        </div>
    )
};


export default Foot;