import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import axios from "axios";

import "./app.css";

export default function Wether() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});
  const [date, setDate] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [contentState, setContentState] = useState("blank");
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [loader, setLoader] = useState(undefined);
	const API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = "5fbda9bfae4a8fa8259d33ff93a8fa9e";
  function searchCity(target) {
    setCity(target);
    setDate(dateBuilder(new Date()));
    setLoaderVisibility(true);
  }

  useEffect(() => {
    if (city !== "" && loaderVisibility) {
      setContentState("blank");
      setLoader(<div className="loading"></div>);
      axios
        .get(`${API_URL}?q=${city}&appid=${API_KEY}`)
        .then((response) => {
          console.log("response", response);
          setWeatherInfo(response.data);
          setContentState("weather");
          setLoader(null);
        })
        .catch((error) => {
          catchError(error);
          setLoader(null);
          setCoordinates(undefined);
          setContentState("warning");
          setTimeout(() => {
            if (contentState === "warning" || contentState === "blank")
              setContentState("blank");
          }, 5000);
        });
      setLoaderVisibility(false);
    }
  }, [city, loaderVisibility, loader, contentState]);

  function catchError(error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
  }

  function dateBuilder(d) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const date = [];
    
    for (let count = 0; count < 5; count++) {
      if (d.getDay() + count < 7)
        date[count] = d.getDay() + count;
      else if (d.getDay() + count === 7)
        date[count] = 0;
      else if (d.getDay() + count === 8)
        date[count] = 1;
      else if (d.getDay() + count === 9)
        date[count] = 2;
      else if (d.getDay() + count === 10)
        date[count] = 3;
    }

    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]]
    ];
  }

  return (
    <div className="App">
      <div className="App__container">
        <Header callBack={searchCity} />
        {loader}
        <Main
          weatherInfo={weatherInfo}
          location={location}
          date={date}
          contentState={contentState}
        />
      </div>
    </div>
  );
}
