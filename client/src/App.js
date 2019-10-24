import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import BusinessPage from "./pages/BusinessPage"
import UserPage from "./pages/UserPage";
import About from "./pages/About"
import FormPage from "./pages/formPage";
import API from "../src/utils/API";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { isSignedIn: false }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.isSignedIn} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={UserPage} />
          <Route exact path="/business/:businessid" component={BusinessPage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/business/:businessid/review" component={FormPage}/>
          <Footer />
        </div>
      </Router>
    )
  }
}



export default App;
