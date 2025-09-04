import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-2">
        <h1 className="text-3xl p-2 text-white flex ">{title}</h1>

      <div className="flex overflow-x-scroll p-4">
        <div className="flex">
            {movies?.map((d)=>{
                return (<MovieCard key={d.id} poster_path={d?.poster_path}/>)
            })}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
