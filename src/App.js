import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {

  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState("")
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState({
    temp: "?",
    hum: "?"
  })
  const api = {
    key: "c09825cc1b4321cdf11c8abaf050b4d9",
    base: "https://api.openweathermap.org/data/2.5",
  }
  const url = api.base + "/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + api.key +  "&units=" + units
  const [locationStatus, setLocationStatus] = useState(false)
  const [weatherStatus, setWeatherStatus] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLocationStatus(true)
    });

  }, []);

  useEffect( () => {
    loadData();
  }, [locationStatus])

  useEffect( () => {
    weatherObject();
  }, [response])


  function loadData() {
    if(locationStatus) {
      axios.get(url)
          .then(result => {
            setResponse(result);
          })
          .catch((error) => setError(error));
    }
  }

  function weatherObject() {
    if(response !== undefined) {

      setWeather({
        temp: response.temp,
        hum: response.humidity
      })
      setWeatherStatus(true)
    }
  }


  return (
    <div className="App">
    <h3>Current Latitude: {latitude}</h3>
    <h3>Current Longitude: {longitude}</h3>
      {weatherStatus && (
          <div className="help">
              <h1>Current weather in {response.data.name} in {response.data.sys.country}</h1>
              <h2>Humidity: {response.data.main.humidity}%</h2>
              <h2>Cloudiness: {response.data.clouds.all}%</h2>
              <h2>Current Temperature: {response.data.main.temp} Celcius</h2>
              <h2>Max Temperature: {response.data.main.temp_max} Celcius</h2>
              <h2>Min Temperature: {response.data.main.temp_min} Celcius</h2>

          </div>
        )}


      {error && <div>Error. {error.message}</div>}

    </div>
  );
}

export default App;
