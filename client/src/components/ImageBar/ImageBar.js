import React from "react";
import { Row } from "react-materialize";
import "./ImageBar.css";

const ImageBar = () => {
    // Todo: Enlarge Images onClick (With a module, maybe?)
    return (
        <div className="imgBar">
            <div className="Bizmage">
                <img className="responsive-img" src="http://placeimg.com/650/650/arch" alt="" />
            </div>
            <div className="Bizmage">
                <img className="responsive-img" src="http://placeimg.com/650/650/arch" alt="" />
            </div>
            <div className="Bizmage">
                <img className="responsive-img" src="http://placeimg.com/650/650/arch" alt="" />
            </div>
            <div className="Bizmage">
                <img className="responsive-img" src="http://placeimg.com/650/650/arch" alt="" />
            </div>
            <div className="Bizmage">
                <img className="responsive-img" src="http://placeimg.com/650/650/arch" alt="" />
            </div>
            <div className="Bizmage">
                <img className="responsive-img" src="http://placeimg.com/650/650/arch" alt="" />
            </div>
        </div>
    )
}

export default ImageBar;