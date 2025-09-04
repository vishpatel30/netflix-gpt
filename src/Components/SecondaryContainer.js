import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieList = useSelector((Store) => Store?.movies?.nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-48 pl-12 relative z-index-20 ">
<MovieList title={"Now Playing"} movies={movieList} /> 
      <MovieList title={"Trending"} movies={movieList} /> 
      <MovieList title={"Popular"} movies={movieList} /> 
      <MovieList title={"Up Comming"} movies={movieList} /> 
      <MovieList title={"Horror"} movies={movieList} /> 
      </div>
      
    </div>
  );
};

export default SecondaryContainer;
