import React, { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx';
import Game from './components/Game/Game.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Search from './components/Search/Search.jsx';
import './stylesheets/App.css'

function App() {

  let gamesInStorage = {...localStorage.myGames};
  
  const [myGames, setMyGames] = useState( Object.keys(gamesInStorage).length ? JSON.parse(localStorage.getItem("myGames"))
    : { 
      playing: [],
      beaten: [],
      wishlist: [],
      library: [],
    }
  );

  useEffect(()=>{
    localStorage.setItem("myGames",JSON.stringify(myGames))
  },[myGames])
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/game/:id" element={<Game setMyGames={setMyGames}/>}/>
        <Route path="/user" element={<User myGames={myGames} setMyGames={setMyGames}/>}/>
      </Routes>
    </div>
  )
}

export default App
