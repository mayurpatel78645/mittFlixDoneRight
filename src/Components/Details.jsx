import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as TvAPI from '../Services/TvAPI';

export default function Details() {
  const { id } = useParams();

  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    const getShowDetails = async() => {
      const data = await TvAPI.getShowById(id);
      setShowDetails(data);
    }
    getShowDetails();
  }, [id]);

  return (
    <>
      <div className="show-details">
        <img src={`https://image.tmdb.org/t/p/original${showDetails.backdrop_path}`} alt="" />
        <div className="show-details-inner">
          <h1>{showDetails.name} </h1>
          <div className="description">
            {showDetails.overview}
          </div>
          <button className="remove-to-watchlist">- Remove from watch list</button>
        </div>
      </div>        
    </>
  )
}
