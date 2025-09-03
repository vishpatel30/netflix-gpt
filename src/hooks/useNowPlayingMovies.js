import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    // const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    // const json =await data.json();
    // console.log(json);
    const json = {
      results: [
        {
          adult: false,
          backdrop_path: "/",
          genre_ids: [],
          id: 123,
          original_language: "en",
          original_title:"Elemental",
          overview:"In the city where fire, water , land and air residents live together, a fiery young woman and a go with the flow guy.",
          popularity: 5517,
          poster_path:"/cccscs.jpg",
          release_date:"2023-06-14",
          title:"Elemental",
          video:false,
          vote_average:7.7,
          vote_count:1104
        },
        {
          adult: false,
          backdrop_path: "/",
          genre_ids: [],
          id: 123,
          original_language: "en",
        },
        {
          adult: false,
          backdrop_path: "/",
          genre_ids: [],
          id: 123,
          original_language: "en",
        },
        {
          adult: false,
          backdrop_path: "/",
          genre_ids: [],
          id: 123,
          original_language: "en",
        },
        {
          adult: false,
          backdrop_path: "/",
          genre_ids: [],
          id: 123,
          original_language: "en",
        },
        {
          adult: false,
          backdrop_path: "/",
          genre_ids: [],
          id: 123,
          original_language: "en",
        },
      ],
    };
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
