import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Card from "./components/Card/index";
import BusinessPage from "./pages/BusinessPage"
import UserPage from "./pages/UserPage";
// import Seeds from "../../scripts/seedsDB"
import API from "../src/utils/API"





function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:name" component={UserPage} />
      <Route exact path="/thisspecificbusiness" component={BusinessPage} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}



export default App;
