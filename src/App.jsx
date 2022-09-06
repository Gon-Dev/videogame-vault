
import './stylesheets/App.css'
import { Routes , Route , Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import User from './components/User.jsx';
import Game from './components/Game.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import SearchGameList from './components/SearchGameList';

function App() {
  // TODO: guardar
    // data flow
      // user busca juego
      // user toca playingGame, el juego se guarda en localStorge('playing',[{gameObject},{gameObject}])
      // user entra en Account -> renderea Playing
      // Playing levanta locaLStorage on-render con useEffect ('playing',[{gameObject},{gameObject}]) y guarda en state local
      // Playing mapea state local y renderea juegos
      // IDEM para Beaten, Whishlist y Library pero mostrados de otra forma ponele
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<SearchGameList />}/>
        <Route path="/game/:id" element={<Game />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
