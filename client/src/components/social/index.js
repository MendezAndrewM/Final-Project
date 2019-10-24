import React, { Component } from 'react';

//Components
import GoogleLogin from './GoogleLogin'


import config from './config';

class Social extends Component{
    constructor(props) {
        super(props)
        }
    
    render(){
        return(
            <div>
            
                    <GoogleLogin loggedIn={this.props.loggedIn} />
                
            </div>
        )
    }
}

export default Social;