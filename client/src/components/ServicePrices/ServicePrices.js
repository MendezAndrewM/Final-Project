import React, { Component } from "react";
import { Row } from "react-materialize";
import "./ServicePrices.css";

const ServicePrices = props => {


    return (
        <Row>
            <div className="ServiceBox col s12 m8 offset-m2">
                <h3>Services</h3>
                {props.services.map(item =>
                    <div className="specificService">
                        <Row className="shrinkThis">
                            <h6 className="col s6 m9 shrinkThis">{item.service}</h6>
                            <div className="priceBox col s4 m3 shrinkThis">
                                <p className="col s12 m6 right-align shrinkThis">${item.price}</p>
                                {/* Compare Price to competitors (After MVP) */}
                                {/* <p className="col s12 m6">%{item.priceCompare}</p> */}
                            </div>
                        </Row>
                        {/* <Row>
                            ToDo: (AFTER MVP) Make this row collapsable to show relevant user comments
                        </Row> */}
                    </div>
                )}
            </div>
        </Row>
    )
}

export default ServicePrices;