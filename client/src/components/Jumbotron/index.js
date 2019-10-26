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
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            />
            
            
        </div>
    )
};

export default Jumbotron;