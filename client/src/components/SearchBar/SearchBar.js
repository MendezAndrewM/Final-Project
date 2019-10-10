import React from "react";
import { Row } from "react-materialize";

const SearchBar = () => {
    return ( 
        <Row>
        <input placeholder="Enter Business or Service"
            className="col s4 offset-s2"></input>
        <input placeholder="Enter Zip Code"
            className="col s3"></input>
        <button className="col s1 material-icons">search</button>
        </Row>
    );
}

export default SearchBar;