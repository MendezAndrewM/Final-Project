import React from "react";
import "./style.css";
import SearchBar from "../SearchBar";
  

const Jumbotron = (props) =>{
    return(
        <div className="jumbo">
            
            <h1>WhadjaPay</h1>
            <h5>search by service or zip</h5>
            <SearchBar 
            onClick={props.onClick}
            />
            
            
        </div>
    )
};

export default Jumbotron;