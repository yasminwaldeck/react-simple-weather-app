import React, { useEffect, useState } from "react";
import "./App.css";
import { loadApi } from "./service/api-service";
import WeatherCard from "./components/WeatherCard";
import Welcome from "./components/Welcome";

function App() {

  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState("")
  const [weatherStatus, setWeatherStatus] = useState(false)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const location = {
          lat: position.coords.latitude,
          long: position.coords.longitude
      }
      loadData(location);
    });

  }, []);


  function loadData(props) {
    const data = loadApi(props)
    if (data !== undefined) {
      data.then((result) => setResponse(result))
          .then(() => setWeatherStatus(true))
          .catch((error) => setError(error));
    }
  }

  return (
    <div className="App">
      <Welcome/>


      {weatherStatus && (
          <WeatherCard response={response}/>
        )}


      {error && <div>Error. {error.message}</div>}

    </div>
  );
}

export default App;
