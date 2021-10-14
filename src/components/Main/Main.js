import React from "react";
import "./main.css";

export default function Main({ weatherInfo, location, date, contentState }) {
  if (contentState === "weather")
    return (
      <div className="Main">
        <span>Temperature (in deg. fahrenheit) = {weatherInfo.main.temp}</span><br/>
        <span>Min. Temperature (in deg. fahrenheit) = {weatherInfo.main.temp_min}</span><br/>
        <span>Max. Temperature (in deg. fahrenheit) = {weatherInfo.main.temp_max}</span><br/>
        <span>Pressure = {weatherInfo.main.pressure}</span><br/>
        <span>Humidity = {weatherInfo.main.humidity}</span><br/>
      </div>
    );
  else if (contentState === "warning")
    return (
      <div className="Main Main--warning">
        <h2 className="Main__no-location">No location found</h2>
        <p className="Main__no-location-paragraph">
          Try informing city/town and state/country
        </p>
        <p className="Main__no-location-paragraph">Ex: São Carlos, São Paulo</p>
        <p className="Main__no-location-paragraph">Ex: Tokyo, Japan </p>
      </div>
    );
  else if (contentState === "blank") return <div className="Main"></div>;
}
