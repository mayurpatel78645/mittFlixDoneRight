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
          <Header />
          <Home moviesData={allMoviesData}/>
        </Route>

        <Route exact path='/my-watch-list'>
          <Header />
          <WatchList />
        </Route>

        <Route exact path='/details/:id'> 
          <Header />
          <Details />
        </Route>

        <Route path={`/search`}>
          <Header />
          <Search />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
