import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import {Redirect} from 'react-router-dom';
import { PostData } from "../../services/PostData";

class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp(res, type) {
    let postData;
    if(type === 'google' && res.w3.U3){
      
    }
    PostData('signUp',postData).then((result) => {
      let responseJson = result;
      if(responseJson.userData){
        sessionStorage.setItem('userData',JSON.stringify(response.Json));
        this.setState({redirectToReferrer: true});
      }
    });
  }

  render() {
    if(this.state.redirectToReferrer){
      return (<Redirect to={'/'}/>)
    }
    const responseGoogle = response => {
      console.log(response);
      this.signUp(response, "google");
    };

    ReactDOM.render(
      <GoogleLogin
        clientId="9103268589-13g308a85ab43nrjjrq7s6j12ruju6pe.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />,
      document.getElementById("googleButton")
    );
  }
}
