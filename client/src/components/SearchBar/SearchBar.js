import React from "react";
import { Row } from "react-materialize";
import "./SearchBar.css";

const SearchBar = () => {
    return ( 
        <Row className="searchBar">
        <input placeholder="Search Business or Service"
            className="col s7 m4 offset-m2"></input>
        <input placeholder="Zip Code"
            className="col s3"></input>
        <button className="col moop s2 m1 material-icons">search</button>
        </Row>
    );
}

export default SearchBar;