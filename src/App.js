import React, { useState } from "react";
import axios from 'axios';



function App() {

  const options = { url: `https://api.openweathermap.org/geo/1.0/direct?q=Istanbul&limit=5&appid=190925de26b681b342d5d11d154df0e5`};

  
  
    return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>istanbul</p>
          </div>

          <div className="temp">
            <h1>60°F</h1>
          </div>

          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <b>65°F</b>
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            <b>20%</b>
            <p>Humidity</p>

          </div>

          <div className="wind">
            <b>12 MPH</b>
            <p>Winds Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
