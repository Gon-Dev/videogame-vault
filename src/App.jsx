import React, { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import User from './components/User.jsx';
import Game from './components/Game.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import SearchGameList from './components/SearchGameList';
import './stylesheets/App.css'

function App() {

  const [myGames, setMyGames] = useState( localStorage.lenght ? JSON.parse(localStorage.getItem("myGames"))
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
        <Route path="/search" element={<SearchGameList />}/>
        <Route path="/game/:id" element={<Game setMyGames={setMyGames}/>}/>
        <Route path="/user" element={<User myGames={myGames} />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
