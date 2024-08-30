import React from "react";

const Weatherpage = ({ weather }) => {
  return (
    <div>
      <p>습도 : {weather.humidity}</p>
      <p>풍속 : {weather.wind}</p>
      <p>위도 : {weather.lat}</p>
      <p>경도 : {weather.lon}</p>
    </div>
  );
};

export default Weatherpage;
