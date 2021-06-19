import './App.css';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import Details from './Components/Details';
import Search from './Components/Search';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as TvAPI from './Services/TvAPI';
import React, { useState, useEffect } from 'react';

function App() {
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [watchListData, setWatchListData] = useState(JSON.parse(localStorage.getItem('watchList')) || []);
 
  useEffect(() => {
    const getAllData = async() => {
      const data = await TvAPI.allHomeData();
      setAllMoviesData(data);
    }
    getAllData();
  }, []);

  const handleWatchList = (movie) => {
    setWatchListData(prevState => {
      const inWatchList = prevState.find(item => item.id === movie.id);
      let newWatchList;
      if (inWatchList) {
        newWatchList = prevState.filter(item => item.id !== movie.id);
      }else {
        newWatchList = [...prevState, movie];
      }
      localStorage.setItem('watchList', JSON.stringify(newWatchList));
      return newWatchList;
    });
  }

  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home moviesData={allMoviesData} handleWatchList={handleWatchList} watchListData={watchListData} />
        </Route>

        <Route exact path='/my-watch-list'>
          <WatchList handleWatchList={handleWatchList} watchListData={watchListData} />
        </Route>

        <Route exact path='/details/:id'> 
          <Details handleWatchList={handleWatchList} watchListData={watchListData} />
        </Route>

        <Route path={`/search`}>
          <Search handleWatchList={handleWatchList} watchListData={watchListData} />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
