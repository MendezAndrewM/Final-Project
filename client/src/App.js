import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Card from "./components/Card/index";
import BusinessPage from "./pages/BusinessPage"
import UserPage from "./pages/UserPage";
// import Seeds from "../../scripts/seedsDB"
import API from "../src/utils/API"

// const [loggedin, login] = useState(false);
// const [ratings, rate] = useState(0);
// const [Seeds] = useState(Seeds);

// loadBusinesses = () =>



function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserPage} />
      <Route exact path="/thisspecificbusiness" component={BusinessPage} />
      <Footer />
      </div>
    </Router>
  );
}



export default App;
