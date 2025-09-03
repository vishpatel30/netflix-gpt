import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
    //   API_OPTIONS
    // );
    // const json = await data.json();
    // const FilterData = json.results.filter((d) => d.type === "Trailer");
    // const Trailer = FilterData.length ? FilterData?.[0] : json.results[0];
    dispatch(addTrailerVideo({ key: "hXzcyx9V0xw" }));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useTrailerVideo;
