import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import UserPage from "./pages/UserPage";




function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserPage} />
      <Footer />
      
      
    
      </div>
    </Router>
  );
}



export default App;
