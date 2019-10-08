import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";


class UserPage extends Component {
    // need to control the userpage through state.




    render() {
        return (
            <div>

                <Row>
                    <Nav />
                </Row>
                <Row>
                    <Card />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </div>
        )
    }
}

export default UserPage;