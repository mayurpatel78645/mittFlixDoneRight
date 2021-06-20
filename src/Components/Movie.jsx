import React from 'react';
import { Link } from 'react-router-dom';
import imageNotAvailable from '../Images/altImage.jpg';

export default function Movie({ movie, handleWatchList, watchListData }) {
  return (
    <>
      <div className="movie">
        <Link to={`details/${movie.id}`}>
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            onError={(e)=>{e.target.onerror = null; e.target.src= `${imageNotAvailable}`}} 
            alt='Movie Poster'
          />
          <div className="overlay">
            <div className="title">{movie.name}</div>
            <div className="rating">{movie.vote_average}/10</div>
            <div className="plot">
              {movie.overview}
            </div>
          </div>
        </Link>
        <div 
          onClick={() => handleWatchList(movie)} 
          data-toggled={watchListData.some(item => item.id === movie.id)} 
          className="listToggle">
          <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
        </div>
      </div>
    </>
  )
}
