import { API_OPTIONS, Moviejson } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    // const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    // const json =await data.json();
    // console.log(json);
   
    dispatch(addNowPlayingMovies(Moviejson.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
