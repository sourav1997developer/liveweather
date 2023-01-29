import { useEffect, useState } from "react";
import React from "react";
import "./WeatherData.css";
import icon from "./images/icon.png";
import axios from "axios";

const WeatherData = () => {
  const [data, setData] = useState({});

  const [inputCity, setInputCity] = useState("");

  const apiKey = "c49f8598a525b1570f5b5860010ecf05";

  const getWeatherDetails = (cityName) => {
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handlesearch = () => {
    getWeatherDetails(inputCity);
  };

  useEffect(() => {
    getWeatherDetails("Delhi");
  }, []);

  return (
    <div className="col-md-12">
      <div className="weatherbg">
        <h1 className="heading">Weather Info</h1>
        <div className="d-grid gap-3 col-md-4 col-7 mt-4">
          <input
            type="text"
            className="form-controle"
            onChange={handleChangeInput}
            value={inputCity}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handlesearch}
          >
            Search
          </button>
        </div>
      </div>
      {/* {Object.keys(data).length > 0 && ( */}
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img className="weatherIcon img-fluid" src={icon} alt="" />
          <h5 className="weatherCity">{data?.name}</h5>
          <div className="weatherTemp">
            {(data?.main?.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default WeatherData;
