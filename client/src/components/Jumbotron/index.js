import React from "react";
import "./style.css"


const Jumbotron = ({ children }) =>{
    return(
        <div className="jumbo">
            
            {children}
            
        </div>
    )
};

export default Jumbotron;