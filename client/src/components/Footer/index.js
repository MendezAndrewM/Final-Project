import React from "react";
import {Footer} from "react-materialize";
import "./style.css"


const Foot = () =>{

return (<Footer
  copyrights="&copy 2019 Copyright Text"
  moreLinks={<a />}
  links={<ul />}
  className="example"
>
<h5 className="white-text">
This is the footer my dudes
</h5>
<p className="grey-text text-lighten-4">
we can put a link here or a return to top link
</p>
</Footer>
)
};


export default Foot;