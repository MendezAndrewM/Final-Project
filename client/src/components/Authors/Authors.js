import React, { Component } from "react";
import { Row } from "react-materialize";
import "./Authors.css"

const Authors = props => <>
    <div className="authorBox">
        <h2>Authors:</h2>
        <p>Jacob: <a href="https://github.com/jacobhanes">https://github.com/jacobhanes</a></p>
        <p>Andrew: <a href="https://github.com/MendezAndrewM">https://github.com/MendezAndrewM</a> </p>
        <p>Joey: <a href="https://github.com/joeyduchett">https://github.com/joeyduchett</a></p>
    </div>
</>

export default Authors;