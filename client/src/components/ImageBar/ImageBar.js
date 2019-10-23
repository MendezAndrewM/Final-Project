import React from "react";
import { Row } from "react-materialize";
import "./ImageBar.css";

const ImageBar = props => {

    let theTing = props.image
    let image = { backgroundImage: `url(${theTing})` };

    return (<>
        <div>
            <div className="parallax" style={image}></div>
        </div> 
    </>)
}




export default ImageBar;



// Possible Solutions to Parallax below:

// class ImageBar extends Component {
//     constructor(props) {
//         super(props);
//         this.props = {
//           testVar: props.image
//         };
//       }
//     image = { backgroundImage: `url(${this.state.testVar})` };
//     render() {
//         return(<>    
//             <div>
//                 <div className="parallax" style={this.image} />
//             </div>
//         </>)
//     }
// }

{/* <div className="imgBar">
            <div className="Bizmage">
                <img className="responsive-img" width="650" src="http://placeimg.com/650/650/arch" alt="" />
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
        </div> */}
        {/* <div class="parallax-container">
            <div class="parallax"><img src={props.img} /></div>
        </div> */}