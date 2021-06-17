import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <>
      <div className="movie">
        <Link to={`details/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster" />
          <div className="overlay">
            <div className="title">{movie.name}</div>
            <div className="rating">{movie.vote_average}/10</div>
            <div className="plot">
              {movie.overview}
            </div>
          </div>
        </Link>
        <div data-toggled="true" className="listToggle">
          <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
        </div>
      </div>
    </>
  )
}
