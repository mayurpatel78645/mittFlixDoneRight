import React from 'react';
import MovieContainer from './MovieContainer';

export default function WatchList({ handleWatchList, watchListData }) {
  return (
    <>
      <MovieContainer name='My Watch List' data={{results: watchListData}} handleWatchList={handleWatchList} watchListData={watchListData} />
    </>
  )
}
