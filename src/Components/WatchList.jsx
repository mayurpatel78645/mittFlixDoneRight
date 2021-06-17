import React from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';

export default function WatchList() {
  return (
    <>
      <Header />
      <MovieContainer name='My Watch List' />
    </>
  )
}
