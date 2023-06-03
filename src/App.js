import logo from "./logo.svg";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Weather from "./Weather";

let weatherData = {
  city: "New York",
  temperature: 19,
  description: "Cloudy",
  imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  humidity: 80,
  wind: 10,
};
function App() {
  return (
    <div className="App">
      <Weather
        city={weatherData.city}
        temp={weatherData.temperature}
        desc={weatherData.description}
        icon={weatherData.imgUrl}
        humidity={weatherData.humidity}
        wind={weatherData.wind}
      />
    </div>
  );
}

export default App;
