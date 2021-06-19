import React, { useState, useEffect } from 'react';
import MovieContainer from './MovieContainer';
import { useLocation } from 'react-router-dom';
import * as TvAPI from '../Services/TvAPI';

export default function Search({ handleWatchList, watchListData }) {
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const retrieveSearchData = async() => {
      const data = await TvAPI.getSearchData(query);
      setSearchData(data);
    }
    retrieveSearchData();
  }, [query]);

  return (
    <>
      <MovieContainer name='Results' data={searchData} handleWatchList={handleWatchList} watchListData={watchListData} />
    </>
  )
}
