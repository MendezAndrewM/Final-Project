import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
<<<<<<< HEAD


=======
>>>>>>> b1eb3e176bdffbd4e8a4030f083bf0ba627c1c90
import BusinessPage from "./pages/BusinessPage"
import UserPage from "./pages/UserPage";
import API from "../src/utils/API"





function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:0" component={UserPage} />
      <Route exact path="/thisspecificbusiness" component={BusinessPage} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}



export default App;
