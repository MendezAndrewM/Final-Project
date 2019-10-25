import React from "react";
import "./style.css";
import SearchBar from "../SearchBar";
  

const Jumbotron = (props) =>{
    return(
        <div className="jumbo">
            
            <h1>The Thing</h1>
            <h5>And some stuff about the thing</h5>
            <SearchBar 
            onClick={props.onClick}
            />
            
            
        </div>
    )
};

export default Jumbotron;