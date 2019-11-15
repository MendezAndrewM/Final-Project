import React from "react";
import { Row } from "react-materialize";
import "./Loading.css"

const Loading = props => <>

<div className="scene">
  <div className="cube">
    <div className="cubeFace frontFacing">Loading...</div>
    <div className="cubeFace backFacing">Loading...</div>
    <div className="cubeFace rightFacing">Loading...</div>
    <div className="cubeFace leftFacing">Loading...</div>
    <div className="cubeFace topFacing">Loading...</div>
    <div className="cubeFace bottomFacing">Loading...</div>
  </div>
</div>

</>

export default Loading;