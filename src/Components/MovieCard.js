import React from 'react'
import { img_cdn } from '../utils/constant';

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-48 p-4"><img alt="Movie Card" src={poster_path} /></div>
  )
}

export default MovieCard;