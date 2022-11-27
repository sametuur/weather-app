import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=190925de26b681b342d5d11d154df0e5`;

  const searchLocaiton = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocaiton}
          placeholder="Şehir seç"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>

          <div className="description">
            <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <b>{data.main.feels_like}°F</b> : null}
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            {data.main ? <b>{data.main.humidity}%</b> : null}
            <p>Humidity</p>
          </div>

          <div className="wind">
            {data.wind ? <b>{data.wind.speed}MP</b>: null}
            <p>Winds Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
