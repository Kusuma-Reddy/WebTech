import React from 'react';
import Navbar from "./HomepageComponents/Navbar/Navbar"
import Home from "./HomepageComponents/Home/Home"
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
      <Navbar />
      <Home />
      </div>
    );
  }
 

export default App;
