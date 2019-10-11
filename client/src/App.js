import React, { Component } from 'react';
import Home from "./pages/Home"
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Card from "./components/Card/index";
import BusinessPage from "./pages/BusinessPage"

function App() {
  return (
    <div className="App">
      <Nav />
      {/* React Router Here */}
      <BusinessPage />
      <Footer />
    </div>
  );
}

export default App;
