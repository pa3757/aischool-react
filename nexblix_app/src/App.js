import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import api from "./api";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MovieActions } from "./redux/reducers/movieSlice";

function App() {
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const dispatch = useDispatch();
  const getMovieData = async () => {
    const res = await api.get("/movie/popular?language=ko-KR&page=1");
    const res2 = await api.get("/movie/top_rated?language=ko-KR&page=1");
    const res3 = await api.get("/movie/upcoming?language=ko-KR&page=1");
    setPopularData(res.data);
    setTopRatedData(res2.data);
    setUpcomingData(res3.data);
  };

  useEffect(() => {
    getMovieData();
    dispatch(
      MovieActions.initData({
        popularData: popularData,
        topRatedData: topRatedData,
        upcomingData: upcomingData,
      })
    );
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            popularData={popularData}
            topRatedData={topRatedData}
            upcomingData={upcomingData}
          />
        }
      />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:mv_no" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
