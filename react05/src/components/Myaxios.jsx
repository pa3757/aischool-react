import React, { useState, useEffect } from "react";
import axios from "axios";

const Myaxios = () => {
  const [movieList, setMovieList] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240813"
    );
    setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
  };

  return (
    <div>
      <button onClick={getData}>영화정보</button>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>영화명</th>
            <th>개봉일자</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie, index) => (
            <tr key={index}>
              <td>{movie.rank}</td>
              <td>{movie.movieNm}</td>
              <td>{movie.openDt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myaxios;
