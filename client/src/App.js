import React from 'react';
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Card from "./components/Card/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Card />
      <Jumbotron />
      
      <Footer />
    </div>
  );
}

export default App;
