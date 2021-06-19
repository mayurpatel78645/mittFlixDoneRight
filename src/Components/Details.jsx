import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as TvAPI from '../Services/TvAPI';

export default function Details({  handleWatchList ,watchListData }) {
  const { id } = useParams();

  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    const getShowDetails = async() => {
      const data = await TvAPI.getShowById(id);
      setShowDetails(data);
    }
    getShowDetails();
  }, [id]);

  const retrieveClassName = () => {
    const inWatchList = watchListData.some(item => item.id === showDetails.id);
    if (inWatchList) return {className: 'remove-to-watchlist', innerHTML: ' - Remove from Watch List'};
    return {className: 'add-to-watchlist', innerHTML: ' + Add to Watch List'};
  }

  return (
    <>
      <div className="show-details">
        <img src={`https://image.tmdb.org/t/p/original${showDetails.backdrop_path}`} alt="" />
        <div className="show-details-inner">
          <h1>{showDetails.name} </h1>
          <div className="description">
            {showDetails.overview}
          </div>
          <button onClick={() => handleWatchList(showDetails)} className={retrieveClassName().className}>{retrieveClassName().innerHTML}</button>
        </div>
      </div>        
    </>
  )
}
