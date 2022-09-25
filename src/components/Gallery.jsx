import {useState,useEffect } from 'react';
import Slider from './Slider.jsx';
function Gallery( {fetchedGame} ) {
  const [gallery,setGallery] = useState([]);
  async function fetchGallery(gameName) {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${gameName}/screenshots?key=c41ddde4984541a6aff7238cd9b5f310`);
      const data = await response.json();
      setGallery(data.results);
    } 
    catch (error){
      console.log(error);;
    }
  }
  
  useEffect(()=>{ fetchedGame && fetchGallery(fetchedGame.slug) },[fetchedGame]);

  return (
    <section className="game-gallery-wrapper">
      <h6 className="game-subtitle">GALLERY</h6>
      <Slider gallery={gallery}/>
    </section>
  )
}
export default Gallery;