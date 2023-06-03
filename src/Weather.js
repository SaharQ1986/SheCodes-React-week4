import React, { useState } from "react";

import "./Weather.css";

import axios from "axios";

function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "58a6775f97527351bf6c6966e209be39";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit} className="form">
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        <div className="container">
          {form}
          <div className="row">
            <div className="col-md-6">
              <p>{weather.city}</p>
              <p>Temperature: {Math.round(weather.temperature)}°C</p>
              <p>Description: {weather.description}</p>
              <p>
                <img src={weather.icon} alt={weather.description} />
              </p>
            </div>
            <div className="col-md-6 control">
              <p>Humidity: {weather.humidity}%</p>
              <p>Wind: {weather.wind}km/h</p>
            </div>
          </div>
        </div>
        <small>
          <a
            href="https://github.com/SaharQ1986/SheCodes-React-week4.git"
            target="_blank"
          >
            Open-source code
          </a>
          by Sahar.Q
        </small>
      </div>
    );
  } else {
    return (
      <div className="container">
        {form}
        <div className="row">
          <div className="col-md-6">
            <p>{props.city}</p>
            <p>Temperature: {Math.round(props.temp)}°C</p>
            <p>Description: {props.desc}</p>
            <p>
              <img src={props.icon} alt={props.description} />
            </p>
          </div>
          <div className="col-md-6 control">
            <p>Humidity: {props.humidity}%</p>
            <p>Wind: {props.wind}km/h</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
