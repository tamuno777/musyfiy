import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../Library/Library'
import Feeds from '../Feeds/Feeds'
import Trending from '../Trending/Trending'
import Player from '../Player/Player'
import Favourites from '../Favourites/Favourites';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'
import Login from '../Auth/login';
import { setClientToken } from "../../Spotify";



function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return!token ? (
    <Login />
  ) : (
    <Router>
        <div className='master-body'>
          <Sidebar/>
        <Routes>
            <Route path='/' element={<Library/>}>

            </Route>
            <Route path='/Feeds' element={<Feeds/>}>

            </Route>
            <Route path='/Trending' element={<Trending/>}>

            </Route>
            <Route path='/Player' element={<Player/>}>

            </Route>
            <Route path='/Favourites' element={<Favourites/>}>

            </Route> 
        </Routes>
        </div>
    </Router>
  )
}

export default Home