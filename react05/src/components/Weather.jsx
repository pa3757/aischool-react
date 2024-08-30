import axios from "axios";
import React, { useState, useEffect } from "react";
import Weatherpage from "./Weatherpage";

const Weather = () => {
  let apikey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log(apikey);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    city: "",
    weather: "",
    temp: "",
    humidity: "",
    wind: "",
    lat: "",
    lon: "",
    img: "",
  });

  const getWeather = async () => {
    const res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apikey +
        "&units=metric"
    );
    console.log(res.data);
    setWeather({
      city: res.data.name,
      weather: res.data.weather[0].main,
      temp: res.data.main.temp,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      lat: res.data.coord.lat,
      lon: res.data.coord.lon,
      img:
        "http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png",
    });
  };

  useEffect(() => {
    // 함수 실행 시간을 확인하기 위한 코드
    console.time();
    if (city !== "") getWeather();
    if (city === "") {
      setWeather({
        city: "",
        weather: "",
        temp: "",
        humidity: "",
        wind: "",
        lat: "",
        lon: "",
      });
    }
    console.timeEnd();
  }, [city]);

  return (
    <div>
      <h1>날씨</h1>
      <p>도시 : {weather.city}</p>
      <p>날씨 : {weather.weather}</p>
      <p>온도 : {weather.temp}</p>
      <img src={weather.img} alt="weather"></img>
      <br />

      <button onClick={() => setCity("Gwangju")}>Gwangju</button>
      <button onClick={() => setCity("Seoul")}>Seoul</button>
      <button onClick={() => setCity("Busan")}>Busan</button>
      <button onClick={() => setCity("Jeju")}>Jeju</button>
      <button onClick={() => setCity("")}>초기화</button>
      <Weatherpage weather={weather} />
    </div>
  );
};

export default Weather;
