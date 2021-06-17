import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import Details from './Components/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as TvAPI from './Services/TvAPI';
import React, { useState, useEffect } from 'react';

function App() {
  const [allMoviesData, setAllMoviesData] = useState([]);

  useEffect(() => {
    const getAllData = async() => {
      const data = await TvAPI.allHomeData();
      setAllMoviesData(data);
    }
    getAllData();
  }, []);

  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home moviesData={allMoviesData}/>
        </Route>

        <Route exact path='/my-watch-list'>
          <WatchList />
        </Route>

        <Route exact path='/details/:id'>
          <Header />
          <Details />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
