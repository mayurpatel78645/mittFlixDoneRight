import React from 'react';
import Movie from './Movie';

export default function MovieContainer({ name, data }) {
  return (
    <>
      <div className='titleList'>
        <div className='title'>
          <h1>{name}</h1>
          <div className='titles-wrapper'>
            {data === undefined ? '' 
              : data.results.map(movie => {
                return (
                  <Movie key={movie.id} movie={movie} />
                );
            })}
          </div>
        </div>
      </div>
    </>
  )
}
