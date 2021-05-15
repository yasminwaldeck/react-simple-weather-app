import React from "react";
import styled from "styled-components/macro";

const Card = styled.div`
    background-color: antiquewhite;
    padding: 6% 10% 6% 10%;
    border-radius: 10vh;
    width: 80%;
    color: cadetblue;
  
  h2{
    font-size: 4vw;
  }
  h3{
    font-size: 3vw;
  }
  
`;

function WeatherCard({response}){

        return(
            <Card>
            <div className="WeatherCard">
                    <h2>Current weather in <br/> {response.name}, {response.sys.country}</h2>
                    <h3>Humidity: {response.main.humidity}%</h3>
                    <h3>Cloudiness: {response.clouds.all}%</h3>
                    <h3>Current Temperature: {response.main.temp} Celcius</h3>
                    <h3>Max Temperature: {response.main.temp_max} Celcius</h3>
                    <h3>Min Temperature: {response.main.temp_min} Celcius</h3>

            </div>
            </Card>
        );
}

export default WeatherCard;